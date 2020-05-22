function isScrolledIntoView(el, value) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;

  const isVisible = (elemTop <= value);

  return isVisible;
}

const photosProdTitle = document.querySelector('.photos__title');
const descriptionList = document.querySelector('.description__list');
const descriptionItem = document.querySelectorAll('.description__item');
const itList = document.querySelector('.it__list');
const itItem = document.querySelectorAll('.it__item');
const itImage = document.querySelector('.it__image');
const itImageText = document.querySelector('.it__image-text');

window.onscroll = function() {
  if (isScrolledIntoView(photosProdTitle, 500)) {
    photosProdTitle.classList.add('photos__title--visible');
  }

  if (isScrolledIntoView(descriptionList, 500)) {
    descriptionItem[0].classList.add('description__item--visible');

    setTimeout(() => {
      descriptionItem[1].classList.add('description__item--visible');
    }, 500);

    setTimeout(() => {
      descriptionItem[2].classList.add('description__item--visible');
    }, 1000);
  }

  if (isScrolledIntoView(itList, 700)) {
    itItem[0].classList.add('it__item--visible');

    setTimeout(() => {
      itItem[1].classList.add('it__item--visible');
    }, 300);

    setTimeout(() => {
      itItem[2].classList.add('it__item--visible');
    }, 600);

    setTimeout(() => {
      itItem[3].classList.add('it__item--visible');
    }, 900);

    setTimeout(() => {
      itItem[4].classList.add('it__item--visible');
    }, 1200);

    setTimeout(() => {
      itItem[5].classList.add('it__item--visible');
    }, 1500);
  }

  if (isScrolledIntoView(itImage, 500)) {
    itImage.classList.add('it__image--visible');
  }

  if (isScrolledIntoView(itImageText, 700)) {
    itImageText.classList.add('it__image-text--visible');
  }
}
