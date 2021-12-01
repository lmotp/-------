const slides = document.querySelectorAll('main .slide-wrap');
const slidesImgWrap = document.querySelectorAll('main .slide-wrap .slide-image');
const slidesImg = document.getElementsByClassName('slide');
const main = document.querySelector('main');
const buttonGaugeBox = document.querySelector('.button-gauge-box');
const buttonGauge = document.querySelector('.button-gauge');
const moveButton = document.querySelector('.move-button');
const logo = document.querySelector('.logo');
const menus = document.querySelectorAll('nav a');
const contents = document.querySelectorAll('.about-page span');

let isDown = false;
let shiftX;
let startX;
let x;

const arrayWidth = [];
const arrayHeight = [];

Array.from(slidesImg).forEach((v) => {
  const imgWidth = v.naturalWidth;
  const imgHeight = v.naturalHeight;
  arrayWidth.push(imgWidth);
  arrayHeight.push(imgHeight);
});

for (let i = 0; i < slidesImgWrap.length; i++) {
  slidesImgWrap[i].style.height = `${arrayHeight[i] / 3}px`;
}

for (let j = 0; j < slides.length; j++) {
  slides[j].style.minWidth = `${arrayWidth[j] / 2 / 10}%`;
}

const buttonOnDown = (e) => {
  e.preventDefault();
  isDown = true;
  shiftX = e.clientX - moveButton.getBoundingClientRect().left;
};

const buttonOnUp = () => {
  isDown = false;
};

const buttonOnMove = (e) => {
  if (isDown) {
    let newLeft = e.clientX - shiftX - buttonGaugeBox.getBoundingClientRect().left; // 이 부분이 핵심임!! buttonGaugeBox.getBoundingClientRect().left를 통해 값추가되는것을 방지 ★★★★★

    // the pointer is out of buttonGaugeBox => lock the moveButton within the bounaries
    if (newLeft < 0) {
      newLeft = 0;
    }

    let rightEdge = buttonGaugeBox.offsetWidth - moveButton.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    moveButton.style.transform = `translate(${newLeft}px,1px)`;
    buttonGauge.style.width = `${newLeft}px`;
    buttonGauge.style.display = 'block';

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translate(${arrayHeight[i] / 3 - newLeft * 2.2}px)`;
    }
  }
};

const buttonGaugeMove = (e) => {
  let newLeft = e.clientX - buttonGaugeBox.getBoundingClientRect().left;

  moveButton.style.transform = `translate(${newLeft}px, 1px)`;
  buttonGauge.style.width = `${newLeft}px`;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translate(${-newLeft * 1.6}px)`;
  }
};

buttonGaugeBox.addEventListener('mousedown', buttonGaugeMove);
moveButton.addEventListener('mousedown', buttonOnDown);
document.addEventListener('mousemove', buttonOnMove);
document.addEventListener('mouseup', buttonOnUp);
slides.forEach((v) =>
  v.addEventListener('mouseenter', function (e) {
    v.style.cursor = 'pointer';
  }),
);

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

// slidesImgWrap.forEach((v) =>);
