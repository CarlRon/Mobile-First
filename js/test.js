let menu = document.querySelector('.menu')
let openMenuBtn = document.querySelector('.open-menu')
let closeMenuBtn = document.querySelector('.close-menu')

function toggleMenu() {
	menu.classList.toggle('menu_opened')
}

openMenuBtn.addEventListener('click', toggleMenu)
closeMenuBtn.addEventListener('click', toggleMenu)

let menuLinks = document.querySelectorAll('.menu a[href^="#"]')

let observer = new InteractionObserver((entries) => {
	entries.forEach((entry) => {
		let id = entry.getAttribute('id')
		let menuLink = document.querySelector(`.menu a [href="#${id}"]`)

		if (entry.isIntersecting) {
			menuLink.classList.add('selected')
		} else {
			menuLink.classList.remove('selected')
		}
	})
})
