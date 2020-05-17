const headerLogo = document.querySelector('.header-inner .header__logo-image');

navToggle.addEventListener('click', () => {
  setTimeout(() => {
    if (navMain.classList.contains('nav--closed')) {
      headerLogo.style.fill = '#3c71e9';
    }
  }, 800);


  if (navMain.classList.contains('nav--opened')) {
    headerLogo.style.fill = '#ffffff';
  }
})


