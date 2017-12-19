'use strict';

(function () {

  //  Константы блока похожих волшебников
  var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_COUNT = 4;


  // СОЗДАНИЕ И ОТРИСОВКА БЛОКА ПОХОЖИХ ВОЛШЕБНИКОВ

  // Блок с похожими волшебниками
  var similarListElement = document.querySelector('.setup-similar-list');
  // Шаблон елемента волшебника
  var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Функция создания случайного волшебника и его записи в массив
  var generateSimilarWizards = function () {
    var randomWizards = [];
    for (var i = 0; i <= WIZARDS_COUNT; i++) {
      var randomWizard = {
        name: window.util.getRandomArrayElement(WIZARD_NAMES) + ' ' + window.util.getRandomArrayElement(WIZARD_SURNAMES),
        coatColor: window.util.getRandomArrayElement(WIZARD_COAT_COLORS),
        eyesColor: window.util.getRandomArrayElement(WIZARD_EYES_COLORS)
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

  // Функция создания, записи элементов волшебников во фрагмент, вставки фрагмента в блок похожих волшебников
  var renderSimilarWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < randomWizards.length; i++) {
      fragment.appendChild(renderSimilarWizard(randomWizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  renderSimilarWizards();

  // Отображение блока похожих волшебников
  document.querySelector('.setup-similar').classList.remove('hidden');

  // Запись массива в глобальную область видимости для использования в popup.js
  window.setup = {
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    WIZARD_EYES_COLORS: WIZARD_EYES_COLORS
  }

})();
