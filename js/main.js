const gnb = document.querySelector('header');
const logo = document.querySelector('.logo');
const menus = document.querySelectorAll('nav a');
const contents = document.querySelectorAll('.about-page span');
const slides = document.querySelectorAll('.slide-wrap');
const cursor = document.querySelector('.cursor');

logo.addEventListener('click', function () {
  menus.forEach((e) => {
    e.classList.toggle('open');
  });
});

Array.from(contents).forEach((v) => {
  v.addEventListener('mouseover', (e) => {
    v.childNodes[1].classList.add('on');
  });
  v.addEventListener('mouseleave', (e) => {
    v.childNodes[1].classList.remove('on');
  });
});

document.addEventListener('mousemove', function (e) {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const cursorChange = (color) => () => {
  cursor.style.border = `2px solid ${color}`;
};

gnb.addEventListener('mouseenter', cursorChange('white'));
gnb.addEventListener('mouseleave', cursorChange('black'));
