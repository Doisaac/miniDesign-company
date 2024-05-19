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

// LIVE CHAT WIDGET
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/66458f959a809f19fb3164c7/1htvrhno4';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

/* Clientes */
    const imageList = document.getElementById('image-list');
    const mainImage = document.querySelectorAll('.main-image');
    const descriptions = document.querySelectorAll('.description');
    let currentIndex = 0;

    function showImage(index) {
        currentIndex = index;
        updateImage();
    }

    function updateImage() {
        imageList.style.transform = `translateX(-${currentIndex * 100}%)`;
        for (let i = 0; i < mainImage.length; i++) {
            mainImage[i].style.opacity = 0;
            descriptions[i].classList.remove('active-description');
        }
        mainImage[currentIndex].style.opacity = 1;
        descriptions[currentIndex].classList.add('active-description');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % mainImage.length;
        updateImage();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + mainImage.length) % mainImage.length;
        updateImage();
    }

    function showDescription(text) {
        descriptions[currentIndex].textContent = text;
        descriptions[currentIndex].classList.add('active-description');
    }

    function hideDescription() {
        descriptions[currentIndex].classList.remove('active-description');
    }

    setInterval(nextImage, 7000); // Cambia de imagen cada 7 segundos