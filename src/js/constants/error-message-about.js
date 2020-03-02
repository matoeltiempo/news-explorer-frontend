import { formLogin } from '../../about';

export function resetErrorLogin() {
  const [emailMessage, passwordMessage] = formLogin.querySelectorAll('.popup__error-message');
  emailMessage.textContent = '';
  passwordMessage.textContent = '';
}