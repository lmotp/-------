const logo = document.querySelector('.logo');
const menus = document.querySelectorAll('nav a');
const contents = document.querySelectorAll('.about-page span');
const slides = document.querySelectorAll('.slide-wrap');

slides.forEach((v) => {
  if (v.classList.value.includes('on')) {
  } else {
  }
});

logo.addEventListener('click', function () {
  menus.forEach((e) => {
    e.classList.toggle('open');
  });
});

Array.from(contents).forEach((v) => {
  v.addEventListener('mouseenter', (e) => {
    v.childNodes[1].classList.add('on');
  });
  v.addEventListener('mouseleave', (e) => {
    v.childNodes[1].classList.remove('on');
  });
});
