function isScrolledIntoView(el, value) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;

  const isVisible = (elemTop <= value);

  return isVisible;
}

const mapCareerTitle = document.querySelector('.map-career__title');
const mapCareerRequest = document.querySelector('.map-career__request');

window.onscroll = function() {
  if (isScrolledIntoView(mapCareerTitle, 700)) {
    mapCareerTitle.classList.add('map-career__title--visible');
  }

  if (isScrolledIntoView(mapCareerRequest, 700)) {
    mapCareerRequest.classList.add('map-career__request--visible');
  }
}
