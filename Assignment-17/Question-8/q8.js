const dropdown = document.getElementById('customDropdown');
const dropdownButton = document.getElementById('dropdownButton');
const optionsPanel = document.getElementById('optionsPanel');

dropdownButton.addEventListener('click', (e) => {
  optionsPanel.classList.toggle('hidden');
  e.stopPropagation();
});

optionsPanel.addEventListener('click', (e) => {
  const option = e.target.closest('.option');
  if (!option) return;
  const value = option.getAttribute('data-value');
  dropdownButton.textContent = value;
  optionsPanel.classList.add('hidden');
  e.stopPropagation();
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) optionsPanel.classList.add('hidden');
}, true);
