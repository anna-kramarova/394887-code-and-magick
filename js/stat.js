window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);


  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);


  var max = -1;
  for(var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }


  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 50 + barWidth;
  var initialX = 120;
  var initialY = 80;
  var lineHeight = 20;


  for(var i = 0; i < times.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(Math.round(times[i]), initialX + indent * i, initialY - 5);
    ctx.fillText(names[i], initialX + indent * i, initialY + histogramHeight + lineHeight);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, 1)';
    }

    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);
  }
}
