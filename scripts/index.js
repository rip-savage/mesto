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

let formElement = document.querySelector('.form__edit');
let nameInput = document.querySelector('.popup__inpute_form_name');
let jobInput = document.querySelector('.popup__inpute_form_description');
let profileInfoTitle = document.querySelector('.profile__info-title');
let profileInfoDescription = document.querySelector('.profile__info-description');

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileInfoTitle.textContent = nameInput.value;
  profileInfoDescription.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
