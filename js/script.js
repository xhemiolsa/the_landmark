const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const totalImages = images.length;

let index = 0;

function updateSlidePosition() {
  const offset = -index * 100; // Calculate the offset for the current slide
  slides.style.transform = `translateX(${offset}%)`;
}

function showNextSlide() {
  index++;
  if (index >= totalImages) {
    index = 0; // Loop back to the first image
  }
  updateSlidePosition();
}

function showPreviousSlide() {
  index--;
  if (index < 0) {
    index = totalImages - 1; // Loop back to the last image
  }
  updateSlidePosition();
}

// Automatically change slide every 3 seconds
const autoSlide = setInterval(showNextSlide, 3000);

// Add event listeners for buttons
document.querySelector(".next-btn").addEventListener("click", () => {
  clearInterval(autoSlide); // Stop auto-slide when button is clicked
  showNextSlide();
});

document.querySelector(".prev-btn").addEventListener("click", () => {
  clearInterval(autoSlide); // Stop auto-slide when button is clicked
  showPreviousSlide();
});

const burgerMenu = document.querySelector(".burger-menu");
const navItems = document.querySelector(".nav-items");

burgerMenu.addEventListener("click", () => {
  navItems.classList.toggle("responsive");
  burgerMenu.classList.toggle("open"); // Optional for animation
});
