'use strict';

// Массивы-константы
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_COUNT = 4;
var KEYCODE_ESC = 27;
var KEYCODE_ENTER = 13;

// Функция поиска случайного числа
var getRandomInt = function (min, max) {
  max = max + 1;
  return Math.floor(Math.random() * (max - min)) + min;
};

// Функция получения случайного значения
var getRandomFeature = function (array) {
  var randomFeature = array[getRandomInt(0, array.length - 1)];
  return randomFeature;
};

// СОЗДАНИЕ И ОТРИСОВКА БЛОКА ПОХОЖИХ ВОЛШЕБНИКОВ

// Блок с волшебниками
var similarListElement = document.querySelector('.setup-similar-list');
// Шаблон волшебника
var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Функция создания случайного волшебника и его записи в массив
var generateSimilarWizards = function () {
  var randomWizards = [];
  for (var i = 0; i <= WIZARDS_COUNT; i++) {
    var randomWizard = {
      name: getRandomFeature(WIZARD_NAMES) + ' ' + getRandomFeature(WIZARD_SURNAMES),
      coatColor: getRandomFeature(WIZARD_COAT_COLORS),
      eyesColor: getRandomFeature(WIZARD_EYES_COLORS)
    };
    randomWizards[i] = randomWizard;
  }
  return randomWizards;
};

// Массив со случайными волшебниками
var randomWizards = generateSimilarWizards();

// Функция создания отдельного элемента волшебника
var renderSimilarWizard = function (wizard) {
  var wizardElement = similarWizardTemplateElement.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Функция создания, записи элементов и вставки фрагмента
var renderSimilarWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < randomWizards.length; i++) {
    fragment.appendChild(renderSimilarWizard(randomWizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderSimilarWizards();

// Отображение блоков
document.querySelector('.setup-similar').classList.remove('hidden');


// РАБОТА ОКНА НАСТРОЕК ПЕРСОНАЖА

var setupElement = document.querySelector('.setup');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = setupElement.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === KEYCODE_ESC) {
    closePopup();
  }
};

var openPopup = function () {
  setupElement.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupElement.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// Открытие окна по клику
setupOpenElement.addEventListener('click', function () {
  openPopup();
});

// Открытие окна по enter
setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE_ENTER) {
    openPopup();
  }
});

// Закрытие окна по клику
setupCloseElement.addEventListener('click', function () {
  closePopup();
});

// Закрытие окна по enter
setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE_ENTER) {
    closePopup();
  }
});

// НАСТРОЙКА ПЕРСОНАЖА

var wizardCoatElement = setupElement.querySelector('.wizard-coat');
var wizardCoatInputElement = setupElement.querySelector('input[name=coat-color]');

var wizardEyesElement = setupElement.querySelector('.wizard-eyes');
var wizardEyesInputElement = setupElement.querySelector('input[name=eyes-color]');

var wizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');
var wizardFireballInputElement = setupElement.querySelector('input[fireball-color]');


// Выбор цвета плаща по клику
wizardCoatElement.addEventListener('click', function (evt) {
  var wizardCoatColor = getRandomFeature(WIZARD_COAT_COLORS);
  evt.currentTarget.style.fill = wizardCoatColor;
  wizardCoatInputElement.value = wizardCoatColor;
});

// Выбор цвета глаз по клику
wizardEyesElement.addEventListener('click', function (evt) {
  var wizardEyesColor = getRandomFeature(WIZARD_EYES_COLORS);
  evt.currentTarget.style.fill = wizardEyesColor;
  wizardEyesInputElement.value = wizardEyesColor;
});

// Выбор цвета фаерболла по клику
wizardFireballElement.addEventListener('click', function (evt) {
  var wizardFireballColor = getRandomFeature(WIZARD_FIREBALL_COLORS);
  evt.currentTarget.style.background = wizardFireballColor;
  wizardFireballInputElement.value = wizardFireballColor;
});
