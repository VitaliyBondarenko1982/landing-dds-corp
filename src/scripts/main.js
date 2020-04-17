'use strict';

const videoHeader = document.querySelector('#video-header');
const videoLeader = document.querySelector('#video-leader');
const videoAbout = document.querySelector('#video-about');

function enableAutoplay(element) {
  element.autoplay = true;
  element.volume = 0;
  element.play();
}

enableAutoplay(videoHeader);
enableAutoplay(videoLeader);
enableAutoplay(videoAbout);

// const productList = document.querySelector('.products__list');
// const productBuilding = document.querySelector('.products__image');
// const leaderText = document.querySelector('.leader__text');
// const leaderVideo = document.querySelector('.leader__video');
// const leaderVideoText = document.querySelector('.leader__video-text');
// const leaderOne = document.querySelector('.leader__one');
// const leaderBlueSquare = document.querySelector('.leader__blue-square');
// const aboutVideo = document.querySelector('.about__video');
// const aboutVideoTriangle = document.querySelector('.about__video-triangle');
// const aboutText = document.querySelector('.about__text');

// function isScrolledIntoView(el, value) {
//   const rect = el.getBoundingClientRect();
//   const elemTop = rect.top;

//   const isVisible = (elemTop <= value);

//   return isVisible;
// }

// window.onscroll = function() {
// if (isScrolledIntoView(productBuilding, 300)) {
//   productBuilding.classList.add('products__image--visible');
// };
// if (isScrolledIntoView(productList, 500)) {
//   productList.classList.add('products__list--visible');
// };
// if (isScrolledIntoView(leaderText, 500)) {
//   leaderText.classList.add('leader__text--visible');
// };
// if (isScrolledIntoView(leaderVideo, 500)) {
//   leaderVideo.classList.add('leader__video--visible');
// };
// if (isScrolledIntoView(leaderVideoText, 700)) {
//   leaderVideoText.classList.add('leader__video-text--visible');
// };
// if (isScrolledIntoView(leaderOne, 100)) {
//   leaderOne.classList.add('leader__one--visible');
// };
// if (isScrolledIntoView(leaderBlueSquare, 300)) {
//   leaderBlueSquare.classList.add('leader__blue-square--visible');
// };
// if (isScrolledIntoView(leaderBlueRectangle, 500)) {
//   leaderBlueRectangle.classList.add('leader__blue-rectangle--visible');
// };
// if (isScrolledIntoView(aboutVideo, 500)) {
//   aboutVideo.classList.add('about__video--visible');
// };
// if (isScrolledIntoView(aboutVideoTriangle, 400)) {
//   aboutVideoTriangle.classList.add('about__video-triangle--visible');
// };
// if (isScrolledIntoView(aboutText, 500)) {
//   aboutText.classList.add('about__text--visible');
// };
// };
