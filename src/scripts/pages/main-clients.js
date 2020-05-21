const videoSecurity = document.getElementById('video-security');

function enableAutoplay(element) {
  element.autoplay = true;
  element.loop = true;
  element.volume = 0;
  element.play();
}

enableAutoplay(videoSecurity);

// animation

function isScrolledIntoView(el, value) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;

  const isVisible = (elemTop <= value);

  return isVisible;
}

const mapTitle = document.querySelector('.map__title');

const securityVideo = document.querySelector('.security__video');
const securityVideoTriangle = document.querySelector('.security__video-triangle');
const securityVideoBlueSquare = document
  .querySelector('.security__video-blue-square');
const securityVideoGreySquare = document
  .querySelector('.security__video-grey-square');
const securityText = document.querySelector('.security__text');
const securityStrokeMobile = document.querySelector('.security__icon-stroke-mobile');
const securityFullMobile = document
  .querySelector('.security__icon-full-mobile');
const securityStroke = document.querySelector('.security__icon-stroke');
const securityFull = document.querySelector('.security__icon-full');

window.onscroll = function() {
  if (isScrolledIntoView(mapTitle, 500)) {
    mapTitle.classList.add('map__title--visible');
  }

  if (isScrolledIntoView(securityVideo, 600)) {
    securityVideo.classList.add('security__video--visible');
  }

  if (isScrolledIntoView(securityVideoBlueSquare, 600)) {
    setTimeout(() => {
      securityVideoBlueSquare.classList.add('security__video-blue-square--visible');
    }, 1500);
  }

  if (isScrolledIntoView(securityVideoGreySquare, 600)) {
    setTimeout(() => {
      securityVideoGreySquare.classList.add('security__video-grey-square--visible');
    }, 1250);
  }

  if (isScrolledIntoView(securityVideoTriangle, 600)) {
    setTimeout(() => {
      securityVideoTriangle.classList.add('security__video-triangle--visible');
    }, 1000);
  }

  if (isScrolledIntoView(securityText, 600)) {
    securityText.classList.add('about__text--visible');
  }

  if (isScrolledIntoView(securityStrokeMobile, 600)) {
    setTimeout(() => {
      securityStrokeMobile.classList.add('about__mission-mobile--visible');
    }, 1000);
  }

  if (isScrolledIntoView(securityFullMobile, 600)) {
    setTimeout(() => {
      securityFullMobile.classList.add('about__mission-mobile-full--visible');
    }, 1000);
  }

  if (isScrolledIntoView(securityStroke, 600)) {
    setTimeout(() => {
      securityStroke.classList.add('about__mission--visible');
    }, 1000);
  }

  if(isScrolledIntoView(securityFull, 600)) {
    setTimeout(() => {
      securityFull.classList.add('about__mission-full--visible');
    }, 1000);
  }
}
