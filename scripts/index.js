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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

/*<li class="elements__item">
      <img src="" class="elements__item-image" alt="">
      <div class="elements__item-footer">
        <h2 class="elements__item-title"></h2>
        <button class="elements__item-button page__button" type="button"></button>
      </div>
    </li>*/

initialCards.forEach(function(makeCard) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
  const list = document.querySelector('.elements');
  const cardLi = cardTemplate.querySelector('.elements__item');
  const cardFooter = cardTemplate.querySelector('.elements__item-footer');
  const cardImage = cardTemplate.querySelector('.elements__item-image');
  const cardTitle = cardTemplate.querySelector('.elements__item-title');
  
  cardTitle.textContent = makeCard.name;
  cardImage.src = makeCard.link;

  list.prepend(cardElement);
  
  console.log('cardData =>', makeCard);
  console.log('cardImage =>', cardImage);
  console.log('cardTitle =>', cardTitle);
  console.log('cardLi =>', cardLi);
});