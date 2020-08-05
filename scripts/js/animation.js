'use strict';

/* eslint-disable max-len */

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
const aboutVideoBlueSquare = document
  .querySelector('.about__video-blue-square');
const aboutVideoGreySquare = document
  .querySelector('.about__video-grey-square');
const aboutText = document.querySelector('.about__text');
const aboutMissionMobile = document.querySelector('.about__mission-mobile');
const aboutMissionMobileFull = document
  .querySelector('.about__mission-mobile-full');
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
    building.style.opacity = '0.7';
  } else {
    building.classList.add('is-sticky');
    building.style.top = `${rectTopProducts}px`;
    building.style.opacity = '1';
  }

  if (isScrolledIntoView(products, window.innerHeight)) {
    productList[0].classList.add('product--visible');

    setTimeout(() => {
      productList[1].classList.add('product--visible');
    }, 500);

    setTimeout(() => {
      productList[2].classList.add('product--visible');
    }, 1000);
  }

  if (isScrolledIntoView(leaderText, window.innerHeight)) {
    leaderText.classList.add('leader__text--visible');
  }

  if (isScrolledIntoView(leaderTen, window.innerHeight)) {
    leaderTen.classList.add('leader__ten--visible');
  }

  if (isScrolledIntoView(leaderTenText, window.innerHeight)) {
    leaderTenText.classList.add('leader__ten-text--visible');
  }

  if (isScrolledIntoView(leaderOne, window.innerHeight)) {
    leaderOne.classList.add('leader__one--visible');
  }

  if (isScrolledIntoView(leaderBlueSquare, window.innerHeight)) {
    setTimeout(() => {
      leaderBlueSquare.classList.add('leader__blue-square--visible');
    }, 500);
  }

  if (isScrolledIntoView(leaderBlueRectangle, window.innerHeight)) {
    setTimeout(() => {
      leaderBlueRectangle.classList.add('leader__blue-rectangle--visible');
    }, 500);
  }

  if (isScrolledIntoView(leaderGreySquare, window.innerHeight)) {
    setTimeout(() => {
      leaderGreySquare.classList.add('leader__grey-square--visible');
    }, 1500);
  }

  if (isScrolledIntoView(leaderGreyTriangle, window.innerHeight)) {
    setTimeout(() => {
      leaderGreyTriangle.classList.add('leader__grey-triangle--visible');
    }, 1000);
  }

  if (isScrolledIntoView(aboutVideo, window.innerHeight)) {
    aboutVideo.classList.add('about__video--visible');
  }

  if (isScrolledIntoView(aboutVideoBlueSquare, window.innerHeight)) {
    setTimeout(() => {
      aboutVideoBlueSquare.classList.add('about__video-blue-square--visible');
    }, 1500);
  }

  if (isScrolledIntoView(aboutVideoGreySquare, window.innerHeight)) {
    setTimeout(() => {
      aboutVideoGreySquare.classList.add('about__video-grey-square--visible');
    }, 1250);
  }

  if (isScrolledIntoView(aboutVideoTriangle, window.innerHeight)) {
    setTimeout(() => {
      aboutVideoTriangle.classList.add('about__video-triangle--visible');
    }, 1000);
  }

  if (isScrolledIntoView(aboutText, window.innerHeight)) {
    aboutText.classList.add('about__text--visible');
  }

  if (isScrolledIntoView(aboutMissionMobile, window.innerHeight)) {
    setTimeout(() => {
      aboutMissionMobile.classList.add('about__mission-mobile--visible');
    }, 1000);
  }

  if (isScrolledIntoView(aboutMissionMobileFull, window.innerHeight)) {
    setTimeout(() => {
      aboutMissionMobileFull.classList.add('about__mission-mobile-full--visible');
    }, 1000);
  }

  if (isScrolledIntoView(aboutMission, window.innerHeight)) {
    setTimeout(() => {
      aboutMission.classList.add('about__mission--visible');
    }, 1000);
  }

  if(isScrolledIntoView(aboutMissionFull, window.innerHeight)) {
    setTimeout(() => {
      aboutMissionFull.classList.add('about__mission-full--visible');
    }, 1000);
  }
};
