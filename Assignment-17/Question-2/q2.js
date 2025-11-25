const messageBox = document.getElementById('messageBox');
const charCounter = document.getElementById('charCounter');
const resetButton = document.getElementById('resetButton');
const maxChars = 100;

function updateCounter() {
  const remaining = maxChars - messageBox.value.length;
  charCounter.textContent = remaining;
  charCounter.classList.remove('yellow', 'red');
  if (remaining <= 0) charCounter.classList.add('red');
  else if (remaining <= 20) charCounter.classList.add('yellow');
}

messageBox.addEventListener('keydown', (e) => {
  const currentLength = messageBox.value.length;
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab'];
  if (currentLength >= maxChars && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
});

messageBox.addEventListener('input', () => {
  if (messageBox.value.length > maxChars) {
    messageBox.value = messageBox.value.slice(0, maxChars);
  }
  updateCounter();
});

resetButton.addEventListener('click', () => {
  messageBox.value = '';
  updateCounter();
});

updateCounter();
