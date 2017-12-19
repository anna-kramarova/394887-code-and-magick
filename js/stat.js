'use strict';

(function () {

  window.renderStatistics = function (ctx, names, times) {

    // Констатнты блока статистики
    var BLOCK_X = 110;
    var BLOCK_Y = 10;
    var BLOCK_WIDTH = 420;
    var BLOCK_HEIGHT = 270;
    var SHADOW_SHIFT = 10;
    var LINE_HEIGHT = 20;

    // Константы гистограммы
    var HISTOGRAM_HEIGHT = 150;
    var BAR_WIDTH = 40;
    var INDENT = 50;
    var FULL_INDENT = INDENT + BAR_WIDTH;
    var INITIAL_X = 165; // 120, поменяла для центровки гистограммы
    var INITIAL_Y = 250;


    // ОТРИСОВКА БЛОКА СТАТИСТИКИ

    // Функция отрисовки блока статистики
    var drawBlock = function () {

      // Отрисовка блока тени под основным блоком статистики
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(BLOCK_X + SHADOW_SHIFT, BLOCK_Y + SHADOW_SHIFT, BLOCK_WIDTH, BLOCK_HEIGHT);

      // Отрисовка блока статисктики
      ctx.fillStyle = 'white';
      ctx.strokeRect(BLOCK_X, BLOCK_Y, BLOCK_WIDTH, BLOCK_HEIGHT);
      ctx.fillRect(BLOCK_X, BLOCK_Y, BLOCK_WIDTH, BLOCK_HEIGHT);

      // Отрисовка текста на блоке статистики
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.font = '14px PT Mono';
      ctx.fillText('Ура, вы победили!', BLOCK_X + INDENT, BLOCK_Y + LINE_HEIGHT);
      ctx.fillText('Список результатов:', BLOCK_X + INDENT, BLOCK_Y + (LINE_HEIGHT * 2));
    };

    drawBlock();


    // ОТРИСОВКА ГИСТОГРАММЫ

    var max = window.util.getMaxArrayNumber(times);
    var step = HISTOGRAM_HEIGHT / (max - 0);

    // Функция отрисовки столбика гистограммы
    var drawBar = function (i) {
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';

      ctx.fillText(Math.round(times[i]), INITIAL_X + FULL_INDENT * i, INITIAL_Y - times[i] * step - 10);

      ctx.fillText(names[i], INITIAL_X + FULL_INDENT * i, INITIAL_Y + LINE_HEIGHT);

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = window.util.getRandomColor();
      }

      ctx.fillRect(INITIAL_X + FULL_INDENT * i, INITIAL_Y, BAR_WIDTH, times[i] * step * (-1));
    };

    // Цикл отрисовки гистограммы
    for (var i = 0; i < times.length; i++) {
      drawBar(i);
    }

  };

})();
