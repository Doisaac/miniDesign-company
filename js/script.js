const hamburger = document.querySelector('.navbar__header .nav .navbar__list .navbar__hamburger');
const mobile_menu = document.querySelector('.navbar__header .nav .navbar__list ul');
const header = document.querySelector('.navbar__header .navbar__container');
const links = document.querySelectorAll('.navbar-link')
const headerBackground = document.querySelector('.navbar__header');
const carouselControls = document.querySelector('.carousel-indicators')

// WHEN THE HAMBURGER IS CLICKED -> MENU APPEARS
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    carouselControls.classList.toggle('deactive')
});

// WHEN A LINK OF THE NAVBAR IS CLICKED, THE MOBILE MENU CLOSE
links.forEach(function (link) {
    link.addEventListener('click', () => {
        mobile_menu.classList.remove('active');
        hamburger.classList.remove('active')
    })
});
