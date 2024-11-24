const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const totalImages = images.length;

let index = 0;

function updateSlidePosition() {
  const offset = -index * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function showNextSlide() {
  index++;
  if (index >= totalImages) {
    index = 0;
  }
  updateSlidePosition();
}

function showPreviousSlide() {
  index--;
  if (index < 0) {
    index = totalImages - 1;
  }
  updateSlidePosition();
}

const autoSlide = setInterval(showNextSlide, 3000);

document.querySelector(".next-btn").addEventListener("click", () => {
  clearInterval(autoSlide);
  showNextSlide();
});

document.querySelector(".prev-btn").addEventListener("click", () => {
  clearInterval(autoSlide);
  showPreviousSlide();
});
