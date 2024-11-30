// Login / Register Modal Logjika
const modal = document.getElementById("login-modal");
const loginBtn = document.getElementById("login-register-btn");
const closeBtn = document.querySelector(".close-btn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block"; // Show login
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // Close login
});

// Login Validation
document.querySelector(".login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;

  // Validate username (min. 3 characters)
  if (username.length < 3) {
    isValid = false;
    showError("username", "Username must be at least 3 characters long.");
  } else {
    clearError("username");
  }

  // Validate password (8 characters,1 number,1 uppercase)
  if (!validatePassword(password)) {
    isValid = false;
    showError(
      "password",
      "Password must be at least 8 characters, include 1 uppercase letter, and 1 number."
    );
  } else {
    clearError("password");
  }

  if (isValid) {
    alert("Login successful!");
    window.location.href = "/";
  }
});

// Register Logic
const registerModal = document.getElementById("register-modal");
const registerLink = document.querySelector(".login-form a");
const switchToLogin = document.querySelector(".switch-to-login");

registerLink.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "none";
  registerModal.style.display = "flex";
});

switchToLogin.addEventListener("click", (event) => {
  event.preventDefault();
  registerModal.style.display = "none";
  modal.style.display = "flex";
});

const registerCloseBtn = registerModal.querySelector(".close-btn");
registerCloseBtn.addEventListener("click", () => {
  registerModal.style.display = "none";
});

// Register Validation
document.querySelector(".register-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("reg-username").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value.trim();
  const confirmPassword = document
    .getElementById("reg-confirm-password")
    .value.trim();

  let isValid = true;

  // Validate username (min. 3 characters)
  if (username.length < 3) {
    isValid = false;
    showError("reg-username", "Username must be at least 3 characters long.");
  } else {
    clearError("reg-username");
  }

  // Validate email format
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    isValid = false;
    showError("reg-email", "Enter a valid email address.");
  } else {
    clearError("reg-email");
  }

  // Validate password (8 characters,1 number,1 uppercase)
  if (!validatePassword(password)) {
    isValid = false;
    showError(
      "reg-password",
      "Password must be at least 8 characters, include 1 uppercase letter, and 1 number."
    );
  } else {
    clearError("reg-password");
  }

  // Validate confirm password (match with password)
  if (password !== confirmPassword) {
    isValid = false;
    showError("reg-confirm-password", "Passwords do not match.");
  } else {
    clearError("reg-confirm-password");
  }

  if (isValid) {
    alert("Registration successful!");
    window.location.href = "/";
  }
});

// Validate password function
function validatePassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}

// Shows error message -> function
function showError(inputId, message) {
  let inputField = document.getElementById(inputId);
  let errorMessage = inputField.nextElementSibling;

  if (!errorMessage || errorMessage.className !== "error-message") {
    errorMessage = document.createElement("span");
    errorMessage.className = "error-message";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "12px";
    errorMessage.style.marginTop = "4px";
    inputField.parentNode.appendChild(errorMessage);
  }

  errorMessage.textContent = message;
}

// Clears error message -> function
function clearError(inputId) {
  let inputField = document.getElementById(inputId);
  let errorMessage = inputField.nextElementSibling;

  if (errorMessage && errorMessage.className === "error-message") {
    errorMessage.textContent = "";
  }
}
