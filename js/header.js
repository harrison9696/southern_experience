// Naming the variables
const select = selector => document.querySelector(selector);

const navBtn = select('.mobile-navbar__btn');
const navOpen = select('.mobile-navbar__open');
const contentPushDown = select('.content-push-down');

const navLinks = document.querySelectorAll('.mobile-navbar__link');
const navSocials = document.querySelectorAll('.mobile-navbar__socials');

// Toggling the hamburger menu
function toggle() {
    navBtn.classList.toggle('nav-open');
    navOpen.classList.toggle('nav-open');
    contentPushDown.classList.toggle('content-push-down-big');
}

// Open and close the hamburger menu
navBtn.addEventListener('click', () => {
    toggle();
});

// Close menu on click
navLinks.forEach(navLink => navLink.addEventListener('click', e => {
    toggle();
}));

navSocials.forEach(navSocial => navSocial.addEventListener('click', e => {
    toggle();
}));