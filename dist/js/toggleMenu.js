const headerNav = document.querySelector(".headerNav");
const toggleMenu = document.querySelector(".toggleMenu");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");
});