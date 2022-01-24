let menu = document.querySelector('.menu')
let openMenuBtn = document.querySelector('.open-menu')
let closeMenuBtn = document.querySelector('.close-menu')

function toggleMenu() {
	menu.classList.toggle('menu_opened')
}

openMenuBtn.addEventListener('click', toggleMenu)
closeMenuBtn.addEventListener('click', toggleMenu)
