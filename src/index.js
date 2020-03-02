import './index.css';
import './about';

import Popup from './js/components/Popup';

import { registrationUser } from './js/user';
import { handleValidateRegistration, handleValidatelogin } from './js/validate/handlevalidate';
import { resetErrorRegistration, resetErrorLogin } from './js/constants/error-message';

export const page = document.querySelector('.page');
export const buttonRegistration = document.querySelector('.popup__button_registration');
export const buttonLogin = document.querySelector('.popup__button_login');

export const formRegistration = document.querySelector('.popup__form_registration');
export const inputRegistrationEmail = formRegistration.querySelector('.popup__input_type_email');
export const inputRegistrationPassword = formRegistration.querySelector('.popup__input_type_password');
export const inputRegistrationName = formRegistration.querySelector('.popup__input_type_name');

export const formLogin = document.querySelector('.popup__form_login');

export const [loginLevel, registrationLevel, doneLevel, mobileLevel] = page.querySelectorAll('.popup');

export const popupLoginLvl = new Popup(loginLevel);
export const popupRegistrationLvl = new Popup(registrationLevel);
export const popupDoneLvl = new Popup(doneLevel);
export const popupMobileLvl = new Popup(mobileLevel);

page.addEventListener('click', function (event) {
  if (event.target.classList.contains('popup__link_registration')) {
    formRegistration.reset();
    popupRegistrationLvl.open();
    popupLoginLvl.close();
    resetErrorRegistration();
  } else if (event.target.classList.contains('header__button')) {
    popupLoginLvl.open();
    popupMobileLvl.close();
    formLogin.reset();
    resetErrorLogin();
  } else if (event.target.classList.contains('popup__link_login')) {
    formLogin.reset();
    popupLoginLvl.open();
    popupRegistrationLvl.close();
    resetErrorLogin();
  } else if (event.target.classList.contains('popup__link_done')) {
    popupLoginLvl.open();
    popupDoneLvl.close();
    formLogin.reset();
    resetErrorLogin();
  } else if (event.target.classList.contains('header__list')) {
    popupMobileLvl.open();
  }
});

buttonRegistration.addEventListener('click', registrationUser);

formRegistration.addEventListener('input', handleValidateRegistration);
formLogin.addEventListener('input', handleValidatelogin);