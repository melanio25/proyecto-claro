/* ========== Menu responsivo ========== */
const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const openIcon = document.querySelector('.nav__toggle .fa-bars');
const closeIcon = document.querySelector('.nav__toggle .fa-times');

navToggle.addEventListener('click', function() {
    navList.classList.toggle('active');
    navToggle.classList.toggle('active');
    openIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
});

/* ========== Activar menu ========== */
const menuLinks = document.querySelectorAll('nav a[href^="#"]'); /* Seleccionar todos los enlaces que su valor del atributo href comiencen con # */

const observer = new IntersectionObserver( /* Observador de intersección */
  (sections) => { /* Definiendo el array de secciones */
    sections.forEach((section) => { /* Recorriendo el array de secciones cuando una sección está visible */
      const id = section.target.getAttribute("id"); /* Extraendo el valor del atributo id de la sección */
      const menuLink = document.querySelector(`nav a[href="#${id}"]`); /* Buscando el enlace con el atributo href tenga el valor de id de sección */

      if (section.isIntersecting) {  /* Si la sección intersecta con los márgenes del root */
        document.querySelector("nav a.active").classList.remove("active");
        menuLink.classList.add("active");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" } 
);

menuLinks.forEach(menuLink => {
    const hash = menuLink.getAttribute('href');
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
});



/* ========== Mostrar botón ir arriba ========== */
window.onscroll = function() {
    var y = window.scrollY;
    if (y >= 300) {
        document.getElementById('btn__top').classList.add('show__btn');
    } else {
        document.getElementById('btn__top').classList.remove('show__btn');
    }
};