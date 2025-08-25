// --- Part 1: Event Handling ---

const clickMeBtn = document.getElementById('clickMeBtn');
const clickMessage = document.getElementById('clickMessage');

clickMeBtn.addEventListener('click', () => {
  clickMessage.textContent = 'Button clicked! Thanks for interacting.';
});

// --- Part 2: Interactive Elements ---

// Light/Dark Mode Toggle
const modeToggleBtn = document.getElementById('modeToggleBtn');
modeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    modeToggleBtn.textContent = 'Switch to Light Mode';
  } else {
    modeToggleBtn.textContent = 'Switch to Dark Mode';
  }
});

// Counter Feature
let count = 0;
const countDisplay = document.getElementById('countDisplay');
document.getElementById('increaseBtn').addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById('decreaseBtn').addEventListener('click', () => {
  count--;
  countDisplay.textContent = count;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});

// --- Part 3: Custom Form Validation ---

const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formMessage = document.getElementById('formMessage');

signupForm.addEventListener('submit', event => {
  event.preventDefault(); // Prevent page reload

  // Reset errors and message
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formMessage.textContent = '';

  let valid = true;

  // Name validation - required and at least 3 chars
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = 'Name must be at least 3 characters long.';
    valid = false;
  }

  // Email validation - simple regex check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Password validation - at least 6 chars, one digit
  const passwordVal = passwordInput.value;
  if (passwordVal.length < 6 || !/\d/.test(passwordVal)) {
    passwordError.textContent = 'Password must be at least 6 characters and contain a number.';
    valid = false;
  }

  if (valid) {
    formMessage.style.color = '#90ee90'; // light green
    formMessage.textContent = 'Registration successful!';
    // Clear inputs or further actions here
    signupForm.reset();
  } else {
    formMessage.style.color = '#ff6b6b'; // light red
    formMessage.textContent = 'Please fix the errors above and try again.';
  }
});
