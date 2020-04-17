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
