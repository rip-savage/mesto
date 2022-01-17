const popoupOpenButton = document.querySelector('.profile__edit-button');
const popoupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

function togglePopup() {
  popup.classList.toggle('popup_opened');
}

function closeOnPopupOverlayClick(event) {
  if (event.target === event.currentTarget) {
    popup.classList.remove('popup_opened');
  }
}

popoupOpenButton.addEventListener('click', togglePopup);
popoupCloseButton.addEventListener('click', togglePopup);
popup.addEventListener('click', closeOnPopupOverlayClick);

let formElement = document.querySelector('.popup__form-edit');
let nameInput = document.querySelector('.popup__inpute_form_name');
let jobInput = document.querySelector('.popup__inpute_form_description');
let profileInfoTitle = document.querySelector('.profile__info-title');
let profileInfoDescription = document.querySelector('.profile__info-description');

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileInfoTitle.textContent = nameInput.value;
  profileInfoDescription.textContent = jobInput.value;
  togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

const popupOpenButtonAddCard = document.querySelector('.profile__add-button');
const popupCloseButtonAddCard = document.querySelector('.popup__close_add-card');
const popupAddCard = document.querySelector('.popup_add-card');

function togglePopupAddCard() {
  popupAddCard.classList.toggle('popup_opened');
}

function closeOnPopupAddCardOverlayClick(event) {
  if (event.target === event.currentTarget) {
    popupAddCard.classList.remove('popup_opened');
  }
}

popupOpenButtonAddCard.addEventListener('click', togglePopupAddCard);
popupCloseButtonAddCard.addEventListener('click', togglePopupAddCard);
popupAddCard.addEventListener('click', closeOnPopupAddCardOverlayClick);
