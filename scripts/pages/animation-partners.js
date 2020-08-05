function isScrolledIntoView(el, value) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;

  const isVisible = (elemTop <= value);

  return isVisible;
}

const buildingFinancial = document.getElementById('building-financial');

const financialContainer = document.querySelector('.financial-partners__container');
const highTechContainer = document.querySelector('.high-tech-partners__container');
const investmentContainer = document.querySelector('.investment-partners__container');

const financialText = document.querySelector('.financial-partners__text');
const highTechText = document.querySelector('.high-tech-partners__text');
const investmentText = document.querySelector('.investment-partners__text');

const header = document.querySelector('.header');

const headerHeight = header.clientHeight;

function scrollHandler(building, container) {
  const rectTopContainer = container.getBoundingClientRect().top;

  if (rectTopContainer <= headerHeight + 20) {
    building.classList.add('is-sticky');
    building.style.top = `${headerHeight}px`;
  } else {
    building.classList.add('is-sticky');
    building.style.top = `${rectTopContainer}px`;
  }
}

window.onscroll = function() {
  scrollHandler(buildingFinancial, financialContainer);

  if (isScrolledIntoView(financialText, window.innerHeight)) {
    financialText.classList.add('financial-partners__text--visible');
  }

  if (isScrolledIntoView(highTechText, window.innerHeight)) {
    highTechText.classList.add('high-tech-partners__text--visible');
  }

  if (isScrolledIntoView(investmentText, window.innerHeight)) {
    investmentText.classList.add('investment-partners__text--visible');
  }
}
