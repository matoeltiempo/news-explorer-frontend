import { formRegistration, formLogin } from '../../index';

export function resetErrorRegistration() {
  const [emailMessage, passwordMessage, nameMessage] = formRegistration.querySelectorAll('.popup__error-message');
  emailMessage.textContent = '';
  passwordMessage.textContent = '';
  nameMessage.textContent = '';
}

export function resetErrorLogin() {
  const [emailMessage, passwordMessage] = formLogin.querySelectorAll('.popup__error-message');
  emailMessage.textContent = '';
  passwordMessage.textContent = '';
}