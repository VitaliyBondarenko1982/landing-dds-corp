function isScrolledIntoView(el, value) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;

  const isVisible = (elemTop <= value);

  return isVisible;
}

const photosTitle = document.querySelector('.photos__title');

window.onscroll = function() {
  if (isScrolledIntoView(photosTitle, 500)) {
    photosTitle.classList.add('photos__title--visible');
  }
}
