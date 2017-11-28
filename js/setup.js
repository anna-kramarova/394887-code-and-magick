'use strict';

// Массивы-константы
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// Блок с волшебниками
var similarListElement = document.querySelector('.setup-similar-list');

// Шаблон
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Пустой фрагмент
var fragment = document.createDocumentFragment();

// Функция поиска случайного числа
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

// Функция получения случайного значения
var getRandomFeature = function (array) {
  var randomFeature = array[getRandomInt(0, array.length - 1)];
  return randomFeature;
};

// Функция получения случайного волшебника
var getRandomWizard = function () {
  var randomWizard = {
    name: getRandomFeature(WIZARD_NAMES) + ' ' + getRandomFeature(WIZARD_SURNAMES),
    coatColor: getRandomFeature(WIZARD_COAT_COLORS),
    eyesColor: getRandomFeature(WIZARD_EYES_COLORS)
  };
  return randomWizard;
};

// Массив со случайными волшебниками
var randomWizards = [getRandomWizard(), getRandomWizard(), getRandomWizard(), getRandomWizard()];

// Функция создания отдельного элемента волшебника
var renderWizard = function () {

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = randomWizards[i].name;

  wizardElement.querySelector('.wizard-coat').style.fill = randomWizards[i].coatColor;

  wizardElement.querySelector('.wizard-eyes').style.fill = randomWizards[i].eyesColor;

  return wizardElement;
};

// Функция записи отдельного элемента волшебника в фрагмент
for (var i = 0; i < randomWizards.length; i++) {
  fragment.appendChild(renderWizard(randomWizards[i]));
}

// Отображение блоков
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

// Отрисовка готового фрагмента с волшебниками в блок
similarListElement.appendChild(fragment);
