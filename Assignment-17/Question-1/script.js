const productInput = document.getElementById('productInput');
const addProductButton = document.getElementById('addProductButton');
const productList = document.getElementById('productList');

function createListItem(text) {
  const li = document.createElement('li');
  li.className = 'product-item';
  li.innerHTML = `
    <span class="product-label" data-name>${escapeHtml(text)}</span>
    <div class="product-actions">
      <button data-action="edit">Edit</button>
      <button data-action="delete">Delete</button>
    </div>
  `;
  return li;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

addProductButton.addEventListener('click', () => {
  const name = productInput.value.trim();
  if (!name) return;
  productList.appendChild(createListItem(name));
  productInput.value = '';
  productInput.focus();
});

productInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addProductButton.click();
});

productList.addEventListener('click', (event) => {
  const actionButton = event.target.closest('button[data-action]');
  if (!actionButton) return;
  const action = actionButton.getAttribute('data-action');
  const listItem = actionButton.closest('.product-item');
  if (action === 'delete') {
    listItem.remove();
    return;
  }
  if (action === 'edit') {
    beginEditItem(listItem);
  }
});

let currentlyEditingItem = null;

function beginEditItem(listItem) {
  if (currentlyEditingItem && currentlyEditingItem !== listItem) saveEdit(currentlyEditingItem);
  const label = listItem.querySelector('[data-name]');
  const currentText = label.textContent;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentText;
  input.className = 'inline-editor';
  label.replaceWith(input);
  listItem.classList.add('editing');
  input.focus();
  input.setSelectionRange(0, input.value.length);
  currentlyEditingItem = listItem;
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveEdit(listItem);
    if (e.key === 'Escape') cancelEdit(listItem, currentText);
  });
  input.addEventListener('blur', () => saveEdit(listItem));
}

function saveEdit(listItem) {
  const input = listItem.querySelector('.inline-editor');
  if (!input) return;
  const newText = input.value.trim() || 'Untitled';
  const label = document.createElement('span');
  label.className = 'product-label';
  label.setAttribute('data-name', '');
  label.textContent = newText;
  input.replaceWith(label);
  listItem.classList.remove('editing');
  currentlyEditingItem = null;
}

function cancelEdit(listItem, originalText) {
  const input = listItem.querySelector('.inline-editor');
  if (!input) return;
  const label = document.createElement('span');
  label.className = 'product-label';
  label.setAttribute('data-name', '');
  label.textContent = originalText;
  input.replaceWith(label);
  listItem.classList.remove('editing');
  currentlyEditingItem = null;
}

document.addEventListener('click', (e) => {
  if (!currentlyEditingItem) return;
  if (currentlyEditingItem.contains(e.target)) return;
  saveEdit(currentlyEditingItem);
});
