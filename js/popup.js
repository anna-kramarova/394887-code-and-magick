'use strict';

// ОКНО НАСТРОЕК

(function () {

  // РАБОТА ОКНА НАСТРОЕК ПЕРСОНАЖА

  var popupElement = document.querySelector('.setup');
  var popupOpenElement = document.querySelector('.setup-open');
  var popupCloseElement = popupElement.querySelector('.setup-close');

  var popupElementStartCoords;

  // Функция открытия окна, добавление обработчика по нажатию на Esc
  var openPopup = function () {
    popupElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);

    // Задание начальных координат окна
    popupElementStartCoords = {
      x: popupElement.offsetLeft,
      y: popupElement.offsetTop
    };

  };

  // Функция закрытия окна, удаление обработчика по нажатию на Esc
  var closePopup = function () {
    popupElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);

    // Сброс координат окна на начальные
    popupElement.style.left = popupElementStartCoords.x + 'px';
    popupElement.style.top = popupElementStartCoords.y + 'px';

  };

  // Функция-обработчик закрытия окна по нажатию на Esc
  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  // Обработчик открытия окна по клику на иконку
  popupOpenElement.addEventListener('click', function () {
    openPopup();
  });

  // Обработчик открытия окна по нажатию на enter при иконке в фокусе
  popupOpenElement.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  // Обработчик закрытия окна по клику на крестик
  popupCloseElement.addEventListener('click', function () {
    closePopup();
  });

  // Обработчик закрытия окна по нажатию на enter при крестике в фокусе
  popupCloseElement.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });


  // ПЕРЕТАСКИВАНИЕ ОКНА НАСТРОЕК ПЕРСОНАЖА

  // Элемент картинки пользователя
  var popupHandleElement = popupElement.querySelector('.setup-user-pic');

  // Обработчик начала перетаскивания
  popupHandleElement.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    // Стартовые координаты мыши
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    // Функция передвижения блока в процессе перетаскивания
    var onMouseMove = function (mousemoveEvt) {

      // Расчет сдвига мыши
      var shift = {
        x: mousemoveEvt.x - startCoords.x,
        y: mousemoveEvt.y - startCoords.y
      };

      // Расчет новых координат окна
      var popupElementCoords = {
        x: popupElement.offsetLeft + shift.x,
        y: popupElement.offsetTop + shift.y
      };

      // Задание новых координат окна
      popupElement.style.left = popupElementCoords.x + 'px';
      popupElement.style.top = popupElementCoords.y + 'px';

      // Переназначение стартовых координат мыши на текущие
      startCoords = {
        x: mousemoveEvt.clientX,
        y: mousemoveEvt.clientY
      };

    };

    // Функция-обработчик прекращения перетаскивания, удаление обработчиков процесса и прекращения перетаскивания
    var onMouseUp = function (mouseupEvt) {
      mouseupEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    // Обработчик процесса перетаскивания
    document.addEventListener('mousemove', onMouseMove);

    // Обработчик конца перетаскивания
    document.addEventListener('mouseup', onMouseUp);

  });


})();
