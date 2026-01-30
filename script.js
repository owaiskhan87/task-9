 form = document.getElementById("registerForm");

const fields = {
  name: document.geonsttElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  confirmPassword: document.getElementById("confirmPassword"),
  phone: document.getElementById("phone")
};

// Regex patterns
const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.[A-Z])(?=.\d)(?=.*[\W_]).{8,}$/,
  phone: /^[6-9]\d{9}$/
};

// Utility functions
function showError(input, message) {
  const group = input.parentElement;
  group.classList.add("invalid");
  group.classList.remove("valid");
  group.querySelector(".error").textContent = message;
  group.querySelector(".error").style.visibility = "visible";
}

function showSuccess(input) {
  const group = input.parentElement;
  group.classList.add("valid");
  group.classList.remove("invalid");
  group.querySelector(".error").style.visibility = "hidden";
}

// Validation functions
function validateName() {
  if (fields.name.value.trim() === "") {
    showError(fields.name, "Name is required");
    return false;
  }
  showSuccess(fields.name);
  return true;
}

function validateEmail() {
  if (!patterns.email.test(fields.email.value.trim())) {
    showError(fields.email, "Invalid email format");
    return false;
  }
  showSuccess(fields.email);
  return true;
}

function validatePassword() {
  if (!patterns.password.test(fields.password.value)) {
    showError(fields.password, "Password must be strong");
    return false;
  }
  showSuccess(fields.password);
  return true;
}

function validateConfirmPassword() {
  if (fields.confirmPassword.value !== fields.password.value) {
    showError(fields.confirmPassword, "Passwords do not match");
    return false;
  }
  showSuccess(fields.confirmPassword);
  return true;
}

function validatePhone() {
  if (!patterns.phone.test(fields.phone.value)) {
    showError(fields.phone, "Invalid phone number");
    return false;
  }
  showSuccess(fields.phone);
  return true;
}

// Real-time validation
fields.name.addEventListener("input", validateName);
fields.email.addEventListener("input", validateEmail);
fields.password.addEventListener("input", validatePassword);
fields.confirmPassword.addEventListener("input", validateConfirmPassword);
fields.phone.addEventListener("input", validatePhone);

// Submit handler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid =
    validateName() &
    validateEmail() &
    validatePassword() &
    validateConfirmPassword() &
    validatePhone();

  if (isValid) {
    alert("Form submitted successfully");
    form.reset();
    document.querySelectorAll(".form-group").forEach(g => {
      g.classList.remove("valid");
    });
  }
});