const themeButtons = Array.from(document.querySelectorAll('[data-theme]'));
const bodyEl = document.body;
themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selected = btn.getAttribute('data-theme');
    bodyEl.setAttribute('class', `theme-${selected}`);
    bodyEl.setAttribute('data-theme', selected);
  });
});

const initialSaved = bodyEl.getAttribute('data-theme');
if (initialSaved) bodyEl.setAttribute('class', `theme-${initialSaved}`);
