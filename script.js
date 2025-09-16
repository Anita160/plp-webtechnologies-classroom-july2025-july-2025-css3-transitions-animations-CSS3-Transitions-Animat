// ====== Global Scope ======
let badgeCount = 0;

// ====== Reusable Functions ======

// Update the counter display and trigger animation
function updateBadgeCounter(incrementBy) {
  badgeCount += incrementBy;
  const counterDisplay = document.getElementById('counter');
  counterDisplay.textContent = badgeCount;
  animateElement(counterDisplay, 'counter-animate');
}

// Add a class temporarily to trigger CSS animation
function animateElement(element, className) {
  element.classList.add(className);
  setTimeout(() => element.classList.remove(className), 400);
}

// Toggle answer in FAQ (expand/collapse)
function toggleFaqAnswer(button) {
  const answer = button.nextElementSibling;
  answer.classList.toggle('show');
}

// Validate form fields and return boolean
function validateField(value, minLength) {
  return value.trim().length >= minLength;
}

// Validate email format
function validateEmailFormat(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// ====== Event Listeners ======

// Day/Night Camp Theme
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Badge Button
document.getElementById('increment-btn').addEventListener('click', () => {
  updateBadgeCounter(1);
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => toggleFaqAnswer(button));
});

// Form Validation
document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const successMsg = document.getElementById('form-success');

  // Clear old messages
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('password-error').textContent = '';
  successMsg.classList.add('hidden');

  // Local Scope
  let isValid = true;

  if (!validateField(nameField.value, 2)) {
    document.getElementById('name-error').textContent = 'Please enter your full name.';
    isValid = false;
  }

  if (!validateEmailFormat(emailField.value)) {
    document.getElementById('email-error').textContent = 'Invalid email format.';
    isValid = false;
  }

  if (!validateField(passwordField.value, 6)) {
    document.getElementById('password-error').textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  if (isValid) {
    successMsg.classList.remove('hidden');
    this.reset();
  }
});
