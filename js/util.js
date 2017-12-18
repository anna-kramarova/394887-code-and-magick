'use strict';

(function () {

  // Константы цвета формата RGBA
  var RGBA_MIN = 0;
  var RGBA_MAX = 256;

  // Константы-коды нажатых клавиш
  var KEYCODE_ENTER = 13;
  var KEYCODE_ESC = 27;

  window.util = {

    // Функция поиска случайного числа
    getRandomInt: function (min, max) {
      max = max + 1;
      return Math.floor(Math.random() * (max - min)) + min;
    },

    // Функция поиска случайного цвета в формате rgba
    getRandomColor: function () {
      return 'rgba(' + window.util.getRandomInt(RGBA_MIN, RGBA_MAX) + ',' + window.util.getRandomInt(RGBA_MIN, RGBA_MAX) + ',' + window.util.getRandomInt(0, 256) + ',' + Math.random() + ')';
    },

    // Функция поиска самого большого числа из массива чисел
    getMaxArrayNumber: function (array) {
      var maxElement = -1;
      for (var i = 0; i < array.length; i++) {
        var arrayElement = array[i];
        if (arrayElement > maxElement) {
          maxElement = arrayElement;
        }
      }
      return maxElement;
    },

    // Функция получения случайного элемента массива
    getRandomArrayElement: function (array) {
      var randomArrayElement = array[window.util.getRandomInt(0, array.length - 1)];
      return randomArrayElement;
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === KEYCODE_ENTER) {
        action();
      }
    },

    isEscEvent: function (evt, action) {
      if (evt.keyCode === KEYCODE_ESC) {
        action();
      }
    }


  };

})();
