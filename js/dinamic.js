let botonMenu = document.getElementById('botonMenu');
let navBar = document.getElementById('navbarNav');

function navegar() {
	botonMenu.classList.add('collapsed');
	let ariaExpanded = botonMenu.getAttribute('aria-expanded');
	if (ariaExpanded) {
		botonMenu.setAttribute('aria-expanded', 'false');
	} else {
		botonMenu.setAttribute('aria-expanded', 'true');
	}
	navBar.classList.remove('show')
}
let contenedorFacebook = document.getElementById('contenedorFacebook');
let contenedorInstagram = document.getElementById('contenedorInstagram');
let contenedorWhatsapp = document.getElementById('contenedorWhatsapp');
if (screen.width > 768) {
	VanillaTilt.init(document.querySelectorAll(".contenedor"), {
		max: 25,
		speed: 200,
		glare: true,
		"max-glare": 1
	});
}
window.sr = ScrollReveal();
sr.reveal('.colprofesional', {
	duration: 2000,
	origin: 'left',
	distance: '300%',
	reset: true,
	delay: 250
});
sr.reveal('.card-body', {
	duration: 3000,
	reset: true,
});
sr.reveal('.copyrigth', {
	duration: 1500,
	origin: 'left',
	distance: '100%',
	reset: true
});
sr.reveal('.redesSociales', {
	duration: 1500,
	origin: 'right',
	distance: '100%',
	reset: true,
})
sr.reveal('.cartas', {
	duration: 2500,
	origin: 'left',
	distance: '200%',
	reset: true
});
sr.reveal('#contenedorFacebook', {
	duration: 2000,
	origin: 'left',
	distance: '300%',
	reset: true,
});
sr.reveal('#contenedorInstagram', {
	duration: 2000,
	origin: 'left',
	distance: '300%',
	reset: true,
});
sr.reveal('#contenedorWhatsapp', {
	duration: 2000,
	origin: 'left',
	distance: '300%',
	reset: true,
});
if (screen.width > 768) {
	sr.reveal('#contenedorWhatsapp', {
		duration: 2000,
		origin: 'right',
		distance: '300%',
		reset: true,
	});
	sr.reveal('#contenedorInstagram', {
		duration: 2000,
		origin: 'bottom',
		distance: '100%',
		reset: true,
	});
	sr.reveal('.copyrigth', {
		duration: 2000,
		origin: 'bottom',
		distance: '500%',
		reset: true
	});
	sr.reveal('.redesSociales', {
		duration: 2000,
		origin: 'top',
		distance: '500%',
		reset: true,
	})
}