import './index.css';
import './saved-news';

import Popup from './js/components/Popup';
import { handleValidatelogin } from './js/validate/handlevalidate';
import { resetErrorLogin } from './js/constants/error-message-about';

const about = document.querySelector('.page');
const mobileLevel = about.querySelector('.popup_mobile');
const loginLevel = about.querySelector('.popup_login');

export const formLogin = about.querySelector('.popup__form_login');

const popupMobiLeLvl = new Popup(mobileLevel);
const popupLoginLeLvl = new Popup(loginLevel);

about.addEventListener('click', function (event) {
  if (event.target.classList.contains('header__list')) {
    popupMobiLeLvl.open();
  } else if (event.target.classList.contains('header__button')) {
    popupLoginLeLvl.open();
    popupMobiLeLvl.close();
    formLogin.reset();
    resetErrorLogin();
  }
});

formLogin.addEventListener('input', handleValidatelogin);

// const config = {
//   type: "carousel",
//   perView: 3,
//   focusAt: "center",
//   startAt: 2,
//   gap: 16,
//   keyboard: true,
//   animationDuration: 700,
//   rewindDuration: 2000,
//   animationTimingFunc: 'ease-in-out',
//   breakpoints: {
//     800: {
//       perView: 2
//     },
//     635: {
//       perView: 1
//     },
//   }
// };

// new Glide('.glide', config).mount()