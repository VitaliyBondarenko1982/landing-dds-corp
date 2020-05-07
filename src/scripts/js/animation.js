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
