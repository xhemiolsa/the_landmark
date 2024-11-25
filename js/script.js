const burgerMenu = document.querySelector(".burger-menu");
const navItems = document.querySelector(".nav-items");

burgerMenu.addEventListener("click", () => {
  navItems.classList.toggle("responsive");
  burgerMenu.classList.toggle("open");
});

$(document).ready(function () {
  $(
    ".nav-items a[href^='#'], .slider-container a[href^='#'], .footer-section a[href^='#']"
  ).on("click", function (e) {
    e.preventDefault();
    const target = $($(this).attr("href"));

    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        800
      );
    }
  });
});
