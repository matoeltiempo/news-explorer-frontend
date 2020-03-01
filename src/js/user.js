import { popupLoginLvl, popupRegistrationLvl, popupDoneLvl, buttonLogin, buttonRegistration } from '../index.js';
import { validate } from './validate';

export function registrationUser(event) {
  event.preventDefault();

  const form = document.forms.registration;
  const email = form.elements.text;
  const password = form.elements.password;
  const name = form.elements.name;
  const inputs = Array.from(form.elements);

  let isValidForm = true;

  inputs.forEach((elem) => {
    if (!elem.classList.contains('popup__button')) {
      if (!validate(elem)) isValidForm = false;
    }
  });

  if (isValidForm) {
    buttonRegistration.classList.remove('popup__button_activate');
    popupRegistrationLvl.close();
    popupDoneLvl.open();
    form.reset();
  } else {
    console.log('Не прошло');
  }
}