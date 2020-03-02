import { validateRegistration, instantValidate, validatelogin } from './validate';
import { formRegistration, inputRegistrationEmail, inputRegistrationPassword, inputRegistrationName } from '../../index';

export function handleValidateRegistration(event) {
  validateRegistration(event.target);

  const emailIsValid = instantValidate(inputRegistrationEmail);
  const passwordIsValid = instantValidate(inputRegistrationPassword);
  const nameIsValid = instantValidate(inputRegistrationName);
  const submitButton = formRegistration.querySelector('.popup__button_registration');

  if (emailIsValid && passwordIsValid && nameIsValid) {
    resetError(submitButton);
  } else {
    activateError(submitButton);
  }
}

export function handleValidatelogin(event) {
  validatelogin(event.target);
}

export function activateError(button) {
  button.classList.remove('popup__button_activate');
  button.setAttribute('disabled', true);
}

export function resetError(button) {
  button.classList.add('popup__button_activate');
  button.removeAttribute('disabled');
}


