'use strict';

window.renderStatistics = function (ctx, names, times) {

  var blockX = 110;
  var blockY = 10;
  var blockWidth = 420;
  var blockHeight = 270;
  var shadowShift = 10;

  var drawBlock = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(blockX + shadowShift, blockY + shadowShift, blockWidth, blockHeight);

    ctx.fillStyle = 'white';
    ctx.strokeRect(blockX, blockY, blockWidth, blockHeight);
    ctx.fillRect(blockX, blockY, blockWidth, blockHeight);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.font = '14px PT Mono';
    ctx.fillText('Ура, вы победили!', blockX + 10, blockY + 20);
    ctx.fillText('Список результатов:', blockX + 10, blockY + 40);
  };

  var getMaxNumber = function (array) {
    var max = -1;
    for (var i = 0; i < array.length; i++) {
      var time = array[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  };

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var getRandomColor = function () {
    return 'rgba(' + getRandomInt(0, 256) + ',' + getRandomInt(0, 256) + ',' + getRandomInt(0, 256) + ',' + Math.random() + ')';
  };

  var max = getMaxNumber(times);
  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 50 + barWidth;
  var initialX = 120;
  var initialY = 250;
  var lineHeight = 20;

  var drawBar = function (i) {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';

    ctx.fillText(Math.round(times[i]), initialX + indent * i, initialY - times[i] * step - 10);

    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }

    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step * (-1));
  };

  drawBlock();

  for (var i = 0; i < times.length; i++) {
    drawBar(i);
  }

};
