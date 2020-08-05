'use strict';

const navContactsButton = document
  .getElementById('nav-contacts');
const footerContacts = document.getElementById('footer-contacts');
const contactsPopup = document
  .querySelector('.modal__contacts .modal__overlay');
const closeButton = document.querySelector('.popup__close');
const form = document.querySelector('.form');
const inputName = document
  .querySelector('.form__input--name');
const inputEmail = document.querySelector('.form__input--email');
const textarea = document.querySelector('.form__textarea');

const openPopup = () => {
  contactsPopup.classList.add('active');

  if (navMain.classList.contains('nav--opened')) {
    closeMenu();
  }
}

const closePopup = (event) => {
  event.preventDefault();

  if (event.toElement.className === 'modal__overlay active') {
    contactsPopup.classList.remove('active');
    return;
  }
};

const formHandler = (evt) => {
  evt.preventDefault();

  inputName.value = '';
  inputEmail.value = '';
  textarea.value = '';
}


navContactsButton.addEventListener('click', openPopup);
footerContacts.addEventListener('click', openPopup);
contactsPopup.addEventListener('click', closePopup);

closeButton.addEventListener('click', () => {
  contactsPopup.classList.remove('active');
});


document.addEventListener('keyup', (event) => {

  if (event.key === 'Escape') {
    event.preventDefault();
    contactsPopup.classList.remove('active');
    return;
  }
});

form.addEventListener('submit', formHandler);
