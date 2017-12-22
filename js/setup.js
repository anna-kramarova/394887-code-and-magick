'use strict';

// НАСТРОЙКА ВОЛШЕБНИКА И ЕГО ИНВЕНТАРЯ

(function () {

  // Константы настройки персонажа
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


  // Элемент формы настройки волшебника и его инвентаря
  var wizardSetupFormElement = document.querySelector('.setup-wizard-form');


  // НАСТРОЙКА ПЕРСОНАЖА

  var wizardSetupBlockElement = wizardSetupFormElement.querySelector('.setup-player');

  var wizardCoatElement = wizardSetupBlockElement.querySelector('.wizard-coat');
  var wizardCoatInputElement = wizardSetupBlockElement.querySelector('input[name=coat-color]');

  var wizardEyesElement = wizardSetupBlockElement.querySelector('.wizard-eyes');
  var wizardEyesInputElement = wizardSetupBlockElement.querySelector('input[name=eyes-color]');

  var wizardFireballElement = wizardSetupBlockElement.querySelector('.setup-fireball-wrap');
  var wizardFireballInputElement = wizardSetupBlockElement.querySelector('input[name=fireball-color]');


  // Выбор цвета плаща по клику
  wizardCoatElement.addEventListener('click', function (evt) {
    var wizardCoatColor = window.util.getRandomArrayElement(WIZARD_COAT_COLORS);
    evt.currentTarget.style.fill = wizardCoatColor;
    wizardCoatInputElement.value = wizardCoatColor;
  });

  // Выбор цвета глаз по клику
  wizardEyesElement.addEventListener('click', function (evt) {
    var wizardEyesColor = window.util.getRandomArrayElement(WIZARD_EYES_COLORS);
    evt.currentTarget.style.fill = wizardEyesColor;
    wizardEyesInputElement.value = wizardEyesColor;
  });

  // Выбор цвета фаерболла по клику
  wizardFireballElement.addEventListener('click', function (evt) {
    var wizardFireballColor = window.util.getRandomArrayElement(WIZARD_FIREBALL_COLORS);
    evt.currentTarget.style.background = wizardFireballColor;
    wizardFireballInputElement.value = wizardFireballColor;
  });


  // ПЕРЕТАСКИВАНИЕ АРТЕФАКТОВ

  // Элемент магазина артефактов
  var popupArtifactsShop = wizardSetupFormElement.querySelector('.setup-artifacts-shop');
  // Коллекция элементов ячеек магазина артефактов
  var artifactsShopCellElements = popupArtifactsShop.querySelectorAll('.setup-artifacts-cell');

  // Функция задания перетаскиваемости (draggable) артефактам в магазине
  var makeShopItemsDraggable = function () {
    for (var i = 0; i < artifactsShopCellElements.length; i++) {
      var artifactElement = artifactsShopCellElements[i].children[0];

      if (artifactElement) {
        artifactElement.draggable = true;
      }

    }
  };
  makeShopItemsDraggable();


  // Элемент блока инвентаря
  var inventoryBlockElement = wizardSetupFormElement.querySelector('.setup-artifacts');
  // Перетаскиваемый артефакт
  var draggedItem;

  // Обработчик начала перетаскивания артефакта из магазина
  popupArtifactsShop.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      inventoryBlockElement.style.outline = '2px dashed red';
      // Сообщение браузеру дополнительной информации о перетаскиваемом объекте
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });


  // Обработчик события наведения на конечный блок, сброс события по умолчанию
  inventoryBlockElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  // Обработчик отпускания перетаскиваемого элемента
  inventoryBlockElement.addEventListener('drop', function (evt) {
    if (evt.target.className === 'setup-artifacts-cell') {
      evt.target.appendChild(draggedItem);
      evt.target.style.backgroundColor = '';
      inventoryBlockElement.style.outline = '';
    } else {
      evt.target.style.backgroundColor = '';
      evt.target.dropzone = '';
    }
    evt.preventDefault();
  });

  // Обработчик события входа в зону конечного блока
  inventoryBlockElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  // Обработчик события выхода из зоны конечного блока
  inventoryBlockElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });


  // Запись в глобальную область видимости
  window.setup = {

    // Запись массивов для генерации похожих волшебников (similarWizards.js)
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    WIZARD_EYES_COLORS: WIZARD_EYES_COLORS

  };

})();
