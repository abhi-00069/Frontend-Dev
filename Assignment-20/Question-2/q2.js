// Base API URL for Q2 (JSON Server running on port 3002)
const API_BASE = 'http://localhost:3002';

// DOM references
const $loading = document.getElementById('loading');
const $table = document.getElementById('employeesTable');
const $tbody = $table.querySelector('tbody');
const $errorMsg = document.getElementById('errorMsg');

// Utility: create element helper
function createElement(tag, attrs = {}, text = '') {
  const el = document.createElement(tag);
  for (const k in attrs) {
    if (k === 'class') el.className = attrs[k];
    else if (k === 'dataset') {
      for (const d in attrs[k]) el.dataset[d] = attrs[k][d];
    } else el.setAttribute(k, attrs[k]);
  }
  if (text) el.textContent = text;
  return el;
}

// Show an error message to the user
function showError(msg) {
  $errorMsg.textContent = msg;
  setTimeout(() => { $errorMsg.textContent = ''; }, 4000);
}

// Fetch all employees using XMLHttpRequest (GET)
function fetchEmployees() {
  $loading.style.display = 'inline-block';
  $table.classList.add('hidden');
  $tbody.innerHTML = '';

  const xhr = new XMLHttpRequest();
  xhr.open('GET', API_BASE + '/employees', true);
  xhr.responseType = 'json';

  // On load, populate table or show error
  xhr.onload = function () {
    $loading.style.display = 'none';
    if (xhr.status >= 200 && xhr.status < 300) {
      const employees = xhr.response;
      renderEmployees(employees);
    } else {
      showError('Failed to load employees (status ' + xhr.status + ')');
    }
  };

  // Network or other error
  xhr.onerror = function () {
    $loading.style.display = 'none';
    showError('Network error while fetching employees');
  };

  xhr.send();
}

// Render employees into the table body
function renderEmployees(employees) {
  if (!Array.isArray(employees)) {
    showError('Invalid data received');
    return;
  }

  employees.forEach(emp => {
    const tr = createElement('tr');
    tr.appendChild(createElement('td', {}, String(emp.id)));
    tr.appendChild(createElement('td', {}, emp.name));
    tr.appendChild(createElement('td', {}, emp.role || '—'));
    tr.appendChild(createElement('td', {}, emp.email || '—'));

    // Status cell
    const statusTd = createElement('td', {}, emp.status);
    statusTd.className = emp.status === 'active' ? 'active' : 'inactive';
    tr.appendChild(statusTd);

    // Action cell with toggle button
    const actionTd = createElement('td');
    const toggleBtn = createElement('button', { class: 'toggle', 'aria-pressed': emp.status === 'active' }, emp.status === 'active' ? 'Set Inactive' : 'Set Active');

    // Attach click handler for toggle (optimistic UI update + PATCH via XHR)
    toggleBtn.addEventListener('click', function () {
      // Determine new status
      const newStatus = (emp.status === 'active') ? 'inactive' : 'active';

      // Optimistically update UI immediately
      statusTd.textContent = newStatus;
      statusTd.className = newStatus === 'active' ? 'active' : 'inactive';
      toggleBtn.textContent = newStatus === 'active' ? 'Set Inactive' : 'Set Active';
      toggleBtn.disabled = true; // disable until server responds

      // Create PATCH request to update status on server
      const patchXhr = new XMLHttpRequest();
      patchXhr.open('PATCH', API_BASE + '/employees/' + emp.id, true);
      patchXhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

      // On success: update local employee object and re-enable button
      patchXhr.onload = function () {
        toggleBtn.disabled = false;
        if (patchXhr.status >= 200 && patchXhr.status < 300) {
          try {
            const updated = JSON.parse(patchXhr.responseText);
            // sync local emp status
            emp.status = updated.status;
            // ensure UI matches server
            statusTd.textContent = emp.status;
            statusTd.className = emp.status === 'active' ? 'active' : 'inactive';
            toggleBtn.textContent = emp.status === 'active' ? 'Set Inactive' : 'Set Active';
          } catch (err) {
            // If parsing fails, show warning but keep optimistic change
            showError('Unexpected response from server');
          }
        } else {
          // On HTTP error, revert UI and notify user
          revertToggle(emp, statusTd, toggleBtn);
          showError('Failed to update status (status ' + patchXhr.status + ')');
        }
      };

      // Network error: revert UI and notify
      patchXhr.onerror = function () {
        toggleBtn.disabled = false;
        revertToggle(emp, statusTd, toggleBtn);
        showError('Network error while updating status');
      };

      // Send the PATCH payload
      patchXhr.send(JSON.stringify({ status: newStatus }));
    });

    actionTd.appendChild(toggleBtn);
    tr.appendChild(actionTd);
    $tbody.appendChild(tr);
  });

  $table.classList.remove('hidden');
}

// Revert optimistic UI changes when PATCH fails
function revertToggle(emp, statusTd, toggleBtn) {
  // Revert to original status (emp.status hasn't been updated yet)
  const original = emp.status;
  statusTd.textContent = original;
  statusTd.className = original === 'active' ? 'active' : 'inactive';
  toggleBtn.textContent = original === 'active' ? 'Set Inactive' : 'Set Active';
}

// Initial load
fetchEmployees();
