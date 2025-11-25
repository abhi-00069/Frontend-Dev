const searchBox = document.getElementById('searchBox');
const studentsTableBody = document.querySelector('#studentsTable tbody');
const noResults = document.getElementById('noResults');

function filterTable(value) {
  const query = value.trim().toLowerCase();
  const rows = Array.from(studentsTableBody.querySelectorAll('tr'));
  let anyVisible = false;
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    const match = text.includes(query);
    row.style.display = match ? '' : 'none';
    if (match) anyVisible = true;
  });
  noResults.classList.toggle('hidden', anyVisible);
}

searchBox.addEventListener('input', (e) => filterTable(e.target.value));
