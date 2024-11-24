const MENU = document.getElementById('menu');
const CLOSE = document.getElementById("close");
const menu = document.getElementById('openMenu');

MENU.addEventListener("click", ()=>openMenu())
CLOSE.addEventListener("click", ()=>closeMenu())

const openMenu = () => {
    console.log("open menu")
    menu.classList.add("visible");
}

const closeMenu = () => {
    console.log("close menu")
    menu.classList.remove('visible')
}