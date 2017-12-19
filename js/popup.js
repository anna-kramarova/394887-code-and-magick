'use strict';

(function () {

  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // РАБОТА ОКНА НАСТРОЕК ПЕРСОНАЖА

  var setupElement = document.querySelector('.setup');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = setupElement.querySelector('.setup-close');

  // Функция открытия окна, добавление обработчика по нажатию на Esc
  var openPopup = function () {
    setupElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  // Функция закрытия окна, удаление обработчика по нажатию на Esc
  var closePopup = function () {
    setupElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  // Функция-обработчик закрытия окна по нажатию на Esc
  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  // Обработчик открытия окна по клику на иконку
  setupOpenElement.addEventListener('click', function () {
    openPopup();
  });

  // Обработчик открытия окна по нажатию на enter при иконке в фокусе
  setupOpenElement.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  // Обработчик закрытия окна по клику на крестик
  setupCloseElement.addEventListener('click', function () {
    closePopup();
  });

  // Обработчик закрытия окна по нажатию на enter при крестике в фокусе
  setupCloseElement.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  // НАСТРОЙКА ПЕРСОНАЖА

  var wizardCoatElement = setupElement.querySelector('.wizard-coat');
  var wizardCoatInputElement = setupElement.querySelector('input[name=coat-color]');

  var wizardEyesElement = setupElement.querySelector('.wizard-eyes');
  var wizardEyesInputElement = setupElement.querySelector('input[name=eyes-color]');

  var wizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');
  var wizardFireballInputElement = setupElement.querySelector('input[name=fireball-color]');


  // Выбор цвета плаща по клику
  wizardCoatElement.addEventListener('click', function (evt) {
    var wizardCoatColor = window.util.getRandomArrayElement(window.setup.WIZARD_COAT_COLORS);
    evt.currentTarget.style.fill = wizardCoatColor;
    wizardCoatInputElement.value = wizardCoatColor;
  });

  // Выбор цвета глаз по клику
  wizardEyesElement.addEventListener('click', function (evt) {
    var wizardEyesColor = window.util.getRandomArrayElement(window.setup.WIZARD_EYES_COLORS);
    evt.currentTarget.style.fill = wizardEyesColor;
    wizardEyesInputElement.value = wizardEyesColor;
  });

  // Выбор цвета фаерболла по клику
  wizardFireballElement.addEventListener('click', function (evt) {
    var wizardFireballColor = window.util.getRandomArrayElement(WIZARD_FIREBALL_COLORS);
    evt.currentTarget.style.background = wizardFireballColor;
    wizardFireballInputElement.value = wizardFireballColor;
  });

})();
