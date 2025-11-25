const gallery = document.querySelector('.gallery');
const modalOverlay = document.getElementById('modalOverlay');
const modalImage = document.getElementById('modalImage');

gallery.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (!img) return;
  const large = img.getAttribute('data-large') || img.src;
  modalImage.src = large;
  modalOverlay.classList.remove('hidden');
});

modalOverlay.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
  modalImage.src = '';
});

const modalContent = modalOverlay.querySelector('.modal-content');
modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
});
