/* eslint-disable strict */

const navButton = document.querySelector('.footer__item-button-nav');
const vacButton = document.querySelector('.footer__item-button-vac');
const contButton = document.querySelector('.footer__item-button-cont');
const navLinks = document.querySelector('.footer__item-nav-links');
const vacLinks = document.querySelector('.footer__item-vac-links');
const contLinks = document.querySelector('.footer__item-cont-links');

const buttonClickHandler = (button, links, value) => {
  button.classList.toggle(`footer__item-button-${value}--open`);
  links.classList.toggle(`footer__item-${value}-links--visible`);
};

navButton.addEventListener('click', () => {
  buttonClickHandler(navButton, navLinks, 'nav');
});

vacButton.addEventListener('click', () => {
  buttonClickHandler(vacButton, vacLinks, 'vac');
});

contButton.addEventListener('click', () => {
  buttonClickHandler(contButton, contLinks, 'cont');
});

if (window.innerWidth >= 768) {
  navLinks.classList.remove('footer__item-nav-links--visible');
  vacLinks.classList.remove('footer__item-vac-links--visible');
  contLinks.classList.remove('footer__item-cont-links--visible');
}
