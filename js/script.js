const burgerMenu = document.querySelector(".burger-menu");
const navItems = document.querySelector(".nav-items");

burgerMenu.addEventListener("click", () => {
  navItems.classList.toggle("responsive");
  burgerMenu.classList.toggle("open"); // Optional for animation
});

$(document).ready(function () {
  $(".nav-items a[href^='#']").on("click", function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    const target = $($(this).attr("href")); // Get the target element by ID

    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top, // Scroll to the element's top offset
        },
        800
      );
    }
  });
});
