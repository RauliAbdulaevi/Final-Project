let burgerMenu = document.querySelector(".header_navigation");
let burgerIcon = document.querySelector(".fa-bars");
let xMark = document.querySelector(".fa-circle-xmark");

burgerIcon.addEventListener("click", () => {
    burgerMenu.classList.add("burger_bar_active")
    burgerIcon.style.display = "none";
    xMark.style.display = "block";
});

xMark.addEventListener("click", () => {
    burgerMenu.classList.remove("burger_bar_active")
    burgerIcon.style.display = "block";
    xMark.style.display = "none";
});