const closeMenu = document.querySelector(".menu--icon");
const menuMobile = document.querySelector(".menu--mobile");


closeMenu.addEventListener('click', (e) => {

    if (menuMobile.classList.contains('visible')) {
        closeMenu.src = "/images/icon-hamburger.svg"
    } else {
        closeMenu.src = "/images/icon-close.svg";
    }
    menuMobile.classList.toggle("visible");
    console.log(e);
})