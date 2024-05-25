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

/* CLIENTS */
const columns = document.querySelectorAll('.clients-column');
const innerElements = document.querySelectorAll('.inner-element');

columns.forEach(click => {
  click.addEventListener('click', event => {
    columns.forEach(column => {
      if (column === click) {
        column.classList.add('clients-expanded');
      } else {
        column.classList.remove('clients-expanded');
      }
    });

    innerElements.forEach(innerElement => {
      if (innerElement.parentElement === click) {
        innerElement.classList.add('e-active');
      } else {
        innerElement.classList.remove('e-active');
      }
    });
  });
});

/* ACCORDION */
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector(".accordion__icon");

      c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
      ic.classList.toggle("rotate-effect", i !== index || !isOpen);
      ic.classList.toggle("rotate-effect", i === index && !isOpen);
    });
  });
});

