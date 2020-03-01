import { formRegistration } from '../../index';

export function resetErrorRegistration() {
  const [emailMessage, passwordMessage, nameMessage] = formRegistration.querySelectorAll('.popup__error-message');
  emailMessage.textContent = '';
  passwordMessage.textContent = '';
  nameMessage.textContent = '';
}