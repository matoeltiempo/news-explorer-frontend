export function validate(element) {
  const errorElement = document.querySelector(`.popup__error-message_${element.name}`);

  console.log(element.checkValidity());

  if (!element.checkValidity()) {
    errorElement.textContent = element.validationMessage;
    return false;
  } else if ((element.value.trim().length < 8 || element.value.trim().length > 30) && element.type === 'password') {
    errorElement.textContent = 'Пароль от 8 символов';
    return false
  } else if ((element.value.trim().length <= 1 || element.value.trim().length > 30) && element.type === 'text') {
    errorElement.textContent = 'Должно быть от 2 до 30 символов';
    return false
  } else {
    errorElement.textContent = '';
  } return true;
}

export function instantValidate(element) {
  if (!element.checkValidity()) {
    return false;
  } else if ((element.value.trim().length < 8 || element.value.trim().length > 30) && element.type === 'password') {
    return false
  } else if ((element.value.trim().length <= 1 || element.value.trim().length > 30) && element.type === 'text') {
    return false
  } else {
  } return true;
}