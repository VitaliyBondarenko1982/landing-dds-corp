const buildingFinancial = document.getElementById('building-financial');
const buildingHighTech = document.getElementById('building-high-tech');
const buildingInvestment = document.getElementById('building-investment');

const financialContainer = document.querySelector('.financial-partners__container');
const highTechContainer = document.querySelector('.high-tech-partners__container');
const investmentContainer = document.querySelector('.investment-partners__container');

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
  scrollHandler(buildingHighTech, highTechContainer);
  scrollHandler(buildingInvestment, investmentContainer);
}
