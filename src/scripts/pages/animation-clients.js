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
  if (isScrolledIntoView(mapTitle, window.innerHeight)) {
    mapTitle.classList.add('map__title--visible');
  }

  if (isScrolledIntoView(securityVideo, window.innerHeight)) {
    securityVideo.classList.add('security__video--visible');
  }

  if (isScrolledIntoView(securityVideoBlueSquare, window.innerHeight)) {
    setTimeout(() => {
      securityVideoBlueSquare.classList.add('security__video-blue-square--visible');
    }, 1500);
  }

  if (isScrolledIntoView(securityVideoGreySquare, window.innerHeight)) {
    setTimeout(() => {
      securityVideoGreySquare.classList.add('security__video-grey-square--visible');
    }, 1250);
  }

  if (isScrolledIntoView(securityVideoTriangle, window.innerHeight)) {
    setTimeout(() => {
      securityVideoTriangle.classList.add('security__video-triangle--visible');
    }, 1000);
  }

  if (isScrolledIntoView(securityText, window.innerHeight)) {
    securityText.classList.add('about__text--visible');
  }

  if (isScrolledIntoView(securityStrokeMobile, window.innerHeight)) {
    setTimeout(() => {
      securityStrokeMobile.classList.add('about__mission-mobile--visible');
    }, 1000);
  }

  if (isScrolledIntoView(securityFullMobile, window.innerHeight)) {
    setTimeout(() => {
      securityFullMobile.classList.add('about__mission-mobile-full--visible');
    }, 1000);
  }

  if (isScrolledIntoView(securityStroke, window.innerHeight)) {
    setTimeout(() => {
      securityStroke.classList.add('about__mission--visible');
    }, 1000);
  }

  if(isScrolledIntoView(securityFull, window.innerHeight)) {
    setTimeout(() => {
      securityFull.classList.add('about__mission-full--visible');
    }, 1000);
  }
}
