import './index.css';

import Popup from './js/components/Popup';
import { registrationUser } from './js/user';
import { handleValidateRegistration, handleValidatelogin } from './js/handlevalidate';
import { resetErrorRegistration } from './js/constants/error-message';

export const page = document.querySelector('.page');
export const buttonRegistration = document.querySelector('.popup__button_registration');
export const buttonLogin = document.querySelector('.popup__button_login');

export const formRegistration = document.querySelector('.popup__form_registration');
export const inputRegistrationEmail = formRegistration.querySelector('.popup__input_type_email');
export const inputRegistrationPassword = formRegistration.querySelector('.popup__input_type_password');
export const inputRegistrationName = formRegistration.querySelector('.popup__input_type_name');

export const formLogin = document.querySelector('.popup__form_login');

export const [loginLevel, registrationLevel, doneLevel] = page.querySelectorAll('.popup');

export const popupLoginLvl = new Popup(loginLevel);
export const popupRegistrationLvl = new Popup(registrationLevel);
export const popupDoneLvl = new Popup(doneLevel);

page.addEventListener('click', function (event) {
  if (event.target.classList.contains('popup__link_registration')) {
    formRegistration.reset();
    popupRegistrationLvl.open();
    popupLoginLvl.close();
    resetErrorRegistration();
  } else if (event.target.classList.contains('header__button')) {
    popupLoginLvl.open();
  } else if (event.target.classList.contains('popup__link_login')) {
    popupLoginLvl.open();
    popupRegistrationLvl.close();
  } else if (event.target.classList.contains('popup__link_done')) {
    popupLoginLvl.open();
    popupDoneLvl.close();
  }
});

buttonRegistration.addEventListener('click', registrationUser);


formRegistration.addEventListener('input', handleValidateRegistration);
formLogin.addEventListener('input', handleValidatelogin);

const config = {
  type: "carousel",
  perView: 3,
  focusAt: "center",
  startAt: 2,
  gap: 16,
  keyboard: true,
  animationDuration: 700,
  rewindDuration: 2000,
  animationTimingFunc: 'ease-in-out',
  breakpoints: {
    800: {
      perView: 2
    },
    635: {
      perView: 1
    },
  }
};

new Glide('.glide', config).mount()