const hamButton = document.getElementById("hamburger-icon");
hamButton.addEventListener("click", () => {
	const navLinks = document.getElementsByClassName("nav-links")[0];
	if (navLinks.classList.contains("hide")) {
		navLinks.classList.remove("hide");
		navLinks.classList.add("show");
	} else if (navLinks.classList.contains("show")) {
		navLinks.classList.remove("show");
		navLinks.classList.add("hide");
	}
});

const mainTouch = document.getElementsByTagName("main")[0];
mainTouch.addEventListener("click", () => {
	const navLinks = document.getElementsByClassName("nav-links")[0];
	navLinks.classList.remove("show");
	navLinks.classList.add("hide");
});

const getInTouchButton = document.getElementById("getintouch");
getInTouchButton.addEventListener("click", () => {
	const contactItems = document.getElementsByClassName("contact-items")[0];
	if (contactItems.classList.contains("hide")) {
		contactItems.classList.remove("hide");
		contactItems.classList.remove("hidden");
		contactItems.classList.add("show");
		setTimeout(() => {
			contactItems.classList.add("contents");
		}, 300);
	} else if (contactItems.classList.contains("show")) {
		contactItems.classList.remove("show");
		contactItems.classList.remove("contents");
		contactItems.classList.add("hide");
		setTimeout(() => {
			contactItems.classList.add("hidden");
		}, 300);
	}
});

const links = document.querySelectorAll(".nav-link-item");
links.forEach((link) => {
	link.addEventListener("click", () => {
		const navLinks = document.getElementsByClassName("nav-links")[0];
		navLinks.classList.remove("show");
		navLinks.classList.add("hide");
	});
});

const worksNav = document.getElementById("nav-works");
const worksContent = document.getElementById("works");
worksNav.addEventListener("click", () => {
	window.scrollTo(0, worksContent.offsetTop - 120);
});

const aboutNav = document.getElementById("nav-about");
const aboutContent = document.getElementById("about");
aboutNav.addEventListener("click", () => {
	window.scrollTo(0, aboutContent.offsetTop - 120);
});

const contactNav = document.getElementById("nav-contact");
const contactContent = document.getElementById("contact");
contactNav.addEventListener("click", () => {
	window.scrollTo(0, contactContent.offsetTop - 120);
});
