const burgerButton = document.querySelector('.nav__burger');
const burgerMenu = document.querySelector('.nav__body');


burgerButton.addEventListener("click", () => {
	burgerButton.classList.toggle("active");
	burgerMenu.classList.toggle("active");
});