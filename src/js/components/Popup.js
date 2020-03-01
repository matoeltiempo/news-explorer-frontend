export default class Popup {
  constructor(popupLvl) {
    this.popup = popupLvl;
    this.popup.addEventListener('click', event => {
      if (event.target.classList.contains('popup__close')) this.close();
    });
  }
    open() {
      this.popup.classList.add('popup_is-opened');
    }
    close() {
      this.popup.classList.remove('popup_is-opened');
    }
}