let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
const rectangulo = document.querySelector('.rectangulo');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Desaparece si bajás más de 5px
  if (scrollTop > lastScrollTop + 5) {
    rectangulo.classList.add('oculto');
  }

  // Reaparece si subís más de 5px
  else if (scrollTop < lastScrollTop - 5) {
    rectangulo.classList.remove('oculto');
  }

  lastScrollTop = scrollTop;
});
