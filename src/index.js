import "./pages/index.css";

<<<<<<< HEAD
import { Api } from './script/Api.js';
import { FormValidator } from './script/FormValidator.js';
import { Card } from './script/Card.js';
import { CardList } from './script/CardList.js';
import { UserInfo } from './script/UserInfo.js';
import { Popup } from './script/Popup.js';
import { ImgPopup } from './script/ImgPopup.js';
=======
import {Api} from './script/Api.js';
import {FormValidator} from './script/FormValidator.js';
import {Card} from './script/Card.js';
import {CardList} from './script/CardList.js';
import {UserInfo} from './script/UserInfo.js';
import {Popup} from './script/Popup.js';
import {ImgPopup} from './script/ImgPopup.js';


>>>>>>> 02e7fa214c9c96afedb2eaf93ca013ac69535af9

const popupButton = document.querySelector('.user-info__button');
const editButton = document.querySelector('.user-info__edit');
const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job');
const placesListPage = document.querySelector('.places-list')
const newFormPlace = document.querySelector('#new')
const newFormEdit = document.querySelector('#form-edit')
const background = document.querySelector('#image-open');
const inputUser = document.querySelector('.popup__input_type_user');
const inputInfo = document.querySelector('.popup__input_type_info');
const buttonSubUser = document.querySelector('#submit-edit');
const buttonSubPlace = document.querySelector('#submit');

const template = document.querySelector('#card-template').content.querySelector('.place-card');

const errorMessages = {
  empty: 'Это обязательное поле',
  wrongLength: 'Должно быть от 2 до 30 символов',
  wrongUrl: 'Здесь должна быть ссылка'
}

const api = new Api({
<<<<<<< HEAD
  url: (process.env.NODE_ENV === 'production' ? "https://nomoreparties.co/cohort11" : "http://nomoreparties.co/cohort11"),
=======
  url: (process.env.NODE_ENV === 'production' ? "https://nomoreparties.co/cohort11":"http://nomoreparties.co/cohort11"),
>>>>>>> 02e7fa214c9c96afedb2eaf93ca013ac69535af9
  headers: {
    authorization: '5e3b9035-32d1-4ba7-9a38-5bcb2c0ecbb0',
    'Content-Type': 'application/json'
  }
});

const createCard = (...arg) => new Card(...arg, api, createPopupImg, template).create();
const createPopupImg = (item) => zoomBig.openImg(item);

const formValidationPlace = new FormValidator(newFormPlace, errorMessages);
formValidationPlace.setEventListeners();

const formValidationUser = new FormValidator(newFormEdit, errorMessages);
formValidationUser.setEventListeners();

const zoomBig = new ImgPopup(document.querySelector('#popup-image'), document.querySelector('#popup-img-close'), background);
const popupNewPlace = new Popup(document.querySelector('#popup-place'), document.querySelector('#popupClose'));
const popupNewUser = new Popup(document.querySelector('#popup-edit'), document.querySelector('#popup-edit-close'));

<<<<<<< HEAD
=======

>>>>>>> 02e7fa214c9c96afedb2eaf93ca013ac69535af9
popupButton.addEventListener('click', () => {
  newFormPlace.reset();
  formValidationPlace.resetErrors();
  popupNewPlace.open();
})

editButton.addEventListener('click', () => {
  formValidationUser.resetErrors();
  popupNewUser.open();
})

api.getDataUser()
  .then(res => {
    userInfo.setUserInfo(res);
    userInfo.updateUserInfo();
    inputUser.value = userInfo.getUserInfo().userInf;
    inputInfo.value = userInfo.getUserInfo().infoInf;
  })
  .catch((err) => {
    alert('Упс! ' + err);
  });

const userInfo = new UserInfo(userName, userJob);

newFormEdit.addEventListener('submit', (event) => {
  event.preventDefault();
  buttonSubUser.textContent = 'Загрузка...';
  api.changeData(inputUser.value, inputInfo.value).then(res => {
    userInfo.setUserInfo(res);
    userInfo.updateUserInfo()
    popupNewUser.close();
  })
    .catch((err) => {
      alert('Упс! ' + err);
    })
    .finally(() => { buttonSubUser.textContent = 'Сохранить' })
<<<<<<< HEAD

});

=======
 
});


>>>>>>> 02e7fa214c9c96afedb2eaf93ca013ac69535af9
const placesList = new CardList(placesListPage, createCard, api);
api.getData()
  .then(res => {
    placesList.render(res);
  })
  .catch((err) => {
    alert('Упс! ' + err);
  });

newFormPlace.addEventListener('submit', (event) => {
  event.preventDefault();
  buttonSubPlace.textContent = 'Загрузка...';
  api.creatTask(newFormPlace.name.value, newFormPlace.link.value)
<<<<<<< HEAD

=======
   
>>>>>>> 02e7fa214c9c96afedb2eaf93ca013ac69535af9
    .then(res => {
      placesList.addCard('0', newFormPlace.name.value, newFormPlace.link.value, res._id);
      popupNewPlace.close();
    })
    .catch((err) => {
      alert('Упс! ' + err);
    })
    .finally(() => { buttonSubPlace.textContent = '+' })
<<<<<<< HEAD

=======
 
>>>>>>> 02e7fa214c9c96afedb2eaf93ca013ac69535af9
})
