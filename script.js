const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");

// Name validation
function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    return false;
  }
  nameError.textContent = "";
  return true;
}

// Email validation
function validateEmail() {
  const email = emailInput.value.trim();
  const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    return false;
  } else if (!pattern.test(email)) {
    emailError.textContent = "Enter a valid email.";
    return false;
  }
  emailError.textContent = "";
  return true;
}

// Password validation
function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

// Enable or disable the submit button
function checkForm() {
  const validName = validateName();
  const validEmail = validateEmail();
  const validPassword = validatePassword();

  submitBtn.disabled = !(validName && validEmail && validPassword);
  successMessage.textContent = ""; // Hide success if typing
}

// Real-time validation
nameInput.addEventListener("input", checkForm);
emailInput.addEventListener("input", checkForm);
passwordInput.addEventListener("input", checkForm);

// On form submit
form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (!submitBtn.disabled) {
    alert("Form Submitted Successfully")
    form.reset();
    submitBtn.disabled = true;
  }
});