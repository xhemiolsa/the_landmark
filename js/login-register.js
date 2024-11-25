// Login / Register Modal
const modal = document.getElementById("login-modal");
const loginBtn = document.getElementById("login-register-btn");
const closeBtn = document.querySelector(".close-btn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

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
