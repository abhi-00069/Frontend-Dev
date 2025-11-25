const userForm = document.getElementById('userForm');
const nameField = document.getElementById('nameField');
const emailField = document.getElementById('emailField');
const passwordField = document.getElementById('passwordField');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

function validateAll() {
  let valid = true;
  if (nameField.value.trim() === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  } else nameError.textContent = '';
  if (!/\S+@\S+\.\S+/.test(emailField.value.trim())) {
    emailError.textContent = 'Valid email required';
    valid = false;
  } else emailError.textContent = '';
  if (passwordField.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 chars';
    valid = false;
  } else passwordError.textContent = '';
  return valid;
}

userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const allValid = validateAll();
  if (allValid) {
    successMessage.classList.remove('hidden');
    userForm.reset();
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
  } else {
    successMessage.classList.add('hidden');
  }
});

[nameField, emailField, passwordField].forEach(field => {
  field.addEventListener('input', () => {
    validateAll();
  });
});
