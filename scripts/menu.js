/* eslint-disable strict */

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const burgerMiddle = document.querySelector('.nav__icon path:first-child');
const burgerTop = document.querySelector('.nav__icon path:nth-child(2)');
const burgerBottom = document.querySelector('.nav__icon path:nth-child(3)');

const onToggleEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeMenu();
  }
};

const openMenu = function() {
  navMain.classList.remove('nav--closed');
  navMain.classList.add('nav--opened');
  navList.style.animation = 'menuIn 1000ms ease';
  burgerMiddle.style.opacity = '0';
  burgerTop.style.transform = 'translate(8px, -1px) rotate(45deg)';
  burgerBottom.style.transform = 'translate(-9px, 8px) rotate(-45deg)';
  document.addEventListener('keydown', onToggleEscPress);
};

const closeMenu = function() {
  navList.style.animation = 'menuOut 1000ms ease';
  burgerMiddle.style.opacity = '1';
  burgerTop.style.transform = 'none';
  burgerBottom.style.transform = 'none';

  setTimeout(() => {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }, 800);

  document.removeEventListener('keydown', onToggleEscPress);
};

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});

navToggle.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE
    && navMain.classList.contains('nav--closed')) {
    closeMenu();
  } else {
    openMenu();
  }
});
