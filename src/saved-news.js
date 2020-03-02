import './index.css';

import Popup from './js/components/Popup';

const savedNews = document.querySelector('.page');
const mobileLevel = savedNews.querySelector('.popup_mobile');
const popupMobiLeLvl = new Popup(mobileLevel);

savedNews.addEventListener('click', function (event) {
  if (event.target.classList.contains('header__list')) {
    popupMobiLeLvl.open();
  }
});