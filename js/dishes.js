import menuData from "./dummydata.js";

const menu = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("close");
const menuHeader = document.getElementById("menuHeader");
const menuContainer = document.getElementById("menuContainer");
const menuTrigger = document.getElementById("menu");

menuTrigger.addEventListener("click", () => menu.classList.add("visible"));
closeMenuBtn.addEventListener("click", () => menu.classList.remove("visible"));

document.querySelectorAll("#openMenu div[data-menu]").forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    const menuType = menuItem.getAttribute("data-menu");
    displayMenu(menuType);
    menu.classList.remove("visible");
  });
});

function displayMenu(menuType) {
  menuContainer.innerHTML = "";
  menuHeader.textContent = menuType
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());

  const dishes = menuData[menuType];
  if (dishes) {
    dishes.forEach((dish) => {
      const dishElement = document.createElement("div");
      dishElement.classList.add("dishes");
      dishElement.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" />
        <p>${dish.name}</p>
        <p class="dish-description">${dish.description}</p>
        <p class="dish-price">${dish.price}</p>
      `;
      menuContainer.appendChild(dishElement);
    });
  } else {
    menuContainer.innerHTML = "<p>No dishes available for this menu.</p>";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  displayMenu("appetizer");
});
