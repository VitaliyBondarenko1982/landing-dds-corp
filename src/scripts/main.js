/* eslint-disable max-len */
'use strict';

// menu

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

// move video
const videoHeader = document.querySelector('#video-promo');
const videoAbout = document.querySelector('#video-about');

function enableAutoplay(element) {
  element.autoplay = true;
  element.loop = true;
  element.volume = 0;
  element.play();
}

enableAutoplay(videoHeader);
enableAutoplay(videoAbout);

// scroll

const header = document.querySelector('.header');
const products = document.querySelector('.products__list');
const productsCont = document.querySelector('.products__container');
const building = document.querySelector('.building');

const productList = document.querySelectorAll('.product');

const leaderText = document.querySelector('.leader__text');
const leaderTen = document.querySelector('.leader__ten');
const leaderTenText = document.querySelector('.leader__ten-text');
const leaderOne = document.querySelector('.leader__one');
const leaderBlueSquare = document.querySelector('.leader__blue-square');
const leaderBlueRectangle = document.querySelector('.leader__blue-rectangle');
const leaderGreySquare = document.querySelector('.leader__grey-square');
const leaderGreyTriangle = document.querySelector('.leader__grey-triangle');

const aboutVideo = document.querySelector('.about__video');
const aboutVideoTriangle = document.querySelector('.about__video-triangle');
const aboutVideoBlueSquare = document.querySelector('.about__video-blue-square');
const aboutVideoGreySquare = document.querySelector('.about__video-grey-square');
const aboutText = document.querySelector('.about__text');
const aboutMissionMobile = document.querySelector('.about__mission-mobile');
const aboutMissionMobileFull = document.querySelector('.about__mission-mobile-full');
const aboutMission = document.querySelector('.about__mission');
const aboutMissionFull = document.querySelector('.about__mission-full');

function isScrolledIntoView(el, value) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;

  const isVisible = (elemTop <= value);

  return isVisible;
}

const headerHeight = header.clientHeight;

window.onscroll = function() {
  const rectTopProducts = productsCont.getBoundingClientRect().top;

  if (rectTopProducts <= headerHeight + 20) {
    building.classList.add('is-sticky');
    building.style.top = `${headerHeight}px`;
    building.style.opacity = '0.2';
  } else {
    building.classList.add('is-sticky');
    building.style.top = `${rectTopProducts}px`;
    building.style.opacity = '1';
  }

  if (isScrolledIntoView(products, 500)) {
    productList[0].classList.add('product--visible');

    setTimeout(() => {
      productList[1].classList.add('product--visible');
    }, 500);

    setTimeout(() => {
      productList[2].classList.add('product--visible');
    }, 1000);
  };

  if (isScrolledIntoView(leaderText, 500)) {
    leaderText.classList.add('leader__text--visible');
  };

  if (isScrolledIntoView(leaderTen, 500)) {
    leaderTen.classList.add('leader__ten--visible');
  };

  if (isScrolledIntoView(leaderTenText, 700)) {
    leaderTenText.classList.add('leader__ten-text--visible');
  };

  if (isScrolledIntoView(leaderOne, 300)) {
    leaderOne.classList.add('leader__one--visible');
  };

  if (isScrolledIntoView(leaderBlueSquare, 300)) {
    setTimeout(() => {
      leaderBlueSquare.classList.add('leader__blue-square--visible');
    }, 500);
  };

  if (isScrolledIntoView(leaderBlueRectangle, 500)) {
    setTimeout(() => {
      leaderBlueRectangle.classList.add('leader__blue-rectangle--visible');
    }, 500);
  };

  if (isScrolledIntoView(leaderGreySquare, 400)) {
    setTimeout(() => {
      leaderGreySquare.classList.add('leader__grey-square--visible');
    }, 1500);
  };

  if (isScrolledIntoView(leaderGreyTriangle, 300)) {
    setTimeout(() => {
      leaderGreyTriangle.classList.add('leader__grey-triangle--visible');
    }, 1000);
  };

  if (isScrolledIntoView(aboutVideo, 600)) {
    aboutVideo.classList.add('about__video--visible');
  };

  if (isScrolledIntoView(aboutVideoBlueSquare, 600)) {
    setTimeout(() => {
      aboutVideoBlueSquare.classList.add('about__video-blue-square--visible');
    }, 1500);
  };

  if (isScrolledIntoView(aboutVideoGreySquare, 600)) {
    setTimeout(() => {
      aboutVideoGreySquare.classList.add('about__video-grey-square--visible');
    }, 1250);
  };

  if (isScrolledIntoView(aboutVideoTriangle, 600)) {
    setTimeout(() => {
      aboutVideoTriangle.classList.add('about__video-blue-square--visible');
    }, 1000);
  };

  if (isScrolledIntoView(aboutText, 600)) {
    aboutText.classList.add('about__text--visible');
  };

  if (isScrolledIntoView(aboutMissionMobile, 600)) {
    setTimeout(() => {
      aboutMissionMobile.classList.add('about__mission-mobile--visible');
    }, 1000);
  };

  if (isScrolledIntoView(aboutMissionMobileFull, 600)) {
    setTimeout(() => {
      aboutMissionMobileFull.classList.add('about__mission-mobile-full--visible');
    }, 1000);
  };

  if (isScrolledIntoView(aboutMission, 600)) {
    setTimeout(() => {
      aboutMission.classList.add('about__mission--visible');
    }, 1000);
  };

  if (isScrolledIntoView(aboutMissionFull, 600)) {
    setTimeout(() => {
      aboutMissionFull.classList.add('about__mission-full--visible');
    }, 1000);
  };
};

// footer slider

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

// icons in products slider
if (window.innerWidth <= 767) {
  const dots = document.querySelectorAll('.products__dots li');

  dots[2].insertAdjacentHTML('afterbegin', `
    <svg width="40" height="34" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 11.56L18.9639 23.1298C19.3506 23.3252 19.8087 23.44 20.3024 23.44C20.796 23.44 21.2541 23.3252 21.6408 23.1298H21.6448L39.28 11.56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8 17.5C20.8 17.8643 20.5043 18.16 20.14 18.16C19.7757 18.16 19.48 17.8643 19.48 17.5C19.48 17.1356 19.7757 16.84 20.14 16.84C20.5043 16.84 20.8 17.1356 20.8 17.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3 34H2.98C1.88572 34 1 33.1142 1 32.02V8.25997C1 7.16569 1.88572 6.27997 2.98 6.27997H37.3C38.3943 6.27997 39.28 7.16569 39.28 8.25997V32.02C39.28 33.1142 38.3943 34 37.3 34Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4 6.28H12.88V2.98C12.88 1.88572 13.7657 1 14.86 1H25.42C26.5143 1 27.4 1.88572 27.4 2.98V6.28Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `);

  dots[1].insertAdjacentHTML('afterbegin', `
    <svg width="24" height="36" viewBox="0 0 25 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5064 32.1151V32.1151C21.4769 30.7622 19.8645 29.9657 18.1508 29.9657H6.77968C5.06593 29.9657 3.45235 30.7622 2.4229 32.1151C1.98842 32.6884 1.67343 33.3413 1.49723 34.0353L1 36H23.9305L23.4332 34.0353C23.2558 33.3413 22.9408 32.6884 22.5064 32.1151Z" stroke="#3C71E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.44769 5.22461L11.8614 10.6555"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.26972 21.1838L7.11426 29.9649H17.8155L15.6601 21.1838"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3442 20.0087C19.3442 20.0087 16.2643 21.5173 12.465 21.5173C8.66462 21.5173 5.58591 20.0087 5.58591 20.0087C5.58591 20.0087 8.66462 18.5001 12.465 18.5001C16.2643 18.5001 19.3442 20.0087 19.3442 20.0087Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7855 4.04251C14.8398 3.84096 14.8784 3.63338 14.8784 3.41373C14.8784 2.08135 13.7983 1 12.4647 1C11.1323 1 10.051 2.08135 10.051 3.41373C10.051 3.63338 10.0896 3.84096 10.1439 4.04251C8.30826 6.31866 7.03381 10.7092 7.03381 12.9323C7.03381 16.0074 9.46565 18.4996 12.4647 18.4996C15.4638 18.4996 17.8956 16.0074 17.8956 12.9323C17.8956 10.7092 16.6212 6.31866 14.7855 4.04251Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `);

  dots[0].insertAdjacentHTML('afterbegin', `
    <svg width="36" height="36" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M31.1 33.2H5.9C4.7394 33.2 3.8 32.2606 3.8 31.1V5.89999C3.8 4.73939 4.7394 3.79999 5.9 3.79999H31.1C32.2606 3.79999 33.2 4.73939 33.2 5.89999V31.1C33.2 32.2606 32.2606 33.2 31.1 33.2Z" stroke="#3C71E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 29H29V8H8V29Z" stroke="#3C71E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 3.8V1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29 3.8V1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.2 1V3.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.4 1V3.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.6 1V3.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24.8 1V3.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 36V33.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29 36V33.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.2 33.2V36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.4 33.2V36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.6 33.2V36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24.8 33.2V36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33.2 8H36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33.2 29H36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36 12.2H33.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36 16.4H33.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36 20.6H33.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36 24.8H33.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 8H3.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 29H3.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.8 12.2H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.8 16.4H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.8 20.6H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.8 24.8H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `);
}
