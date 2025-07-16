let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
const rectangulo = document.querySelector('.rectangulo');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop + 5) {
    rectangulo.classList.add('oculto');
  } else if (scrollTop < lastScrollTop - 5) {
    rectangulo.classList.remove('oculto');
  }

  lastScrollTop = scrollTop;
})
