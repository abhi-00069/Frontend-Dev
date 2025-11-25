const form = document.getElementById('multiForm');
const steps = Array.from(document.querySelectorAll('.step'));
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');
const summaryBox = document.getElementById('summary');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

let currentStepIndex = 0;

function showStep(index) {
  steps.forEach((s, i) => s.classList.toggle('hidden', i !== index));
  backButton.style.display = index === 0 ? 'none' : 'inline-block';
  nextButton.textContent = index === steps.length - 1 ? 'Finish' : 'Next';
  summaryBox.classList.add('hidden');
}

function validateStep(index) {
  if (index === 0) return nameInput.value.trim().length > 0;
  if (index === 1) return /\S+@\S+\.\S+/.test(emailInput.value.trim());
  if (index === 2) return passwordInput.value.length >= 6;
  return false;
}

nextButton.addEventListener('click', () => {
  if (!validateStep(currentStepIndex)) {
    alert('Please provide valid input for this step');
    return;
  }
  if (currentStepIndex < steps.length - 1) {
    currentStepIndex++;
    showStep(currentStepIndex);
    return;
  }
  const summaryHtml = `
    <h3>Summary</h3>
    <div>Name: ${escapeHtml(nameInput.value)}</div>
    <div>Email: ${escapeHtml(emailInput.value)}</div>
  `;
  summaryBox.innerHTML = summaryHtml;
  summaryBox.classList.remove('hidden');
});

backButton.addEventListener('click', () => {
  if (currentStepIndex > 0) currentStepIndex--;
  showStep(currentStepIndex);
});

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

showStep(0);
