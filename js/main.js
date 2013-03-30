(function() {
  var app;

  app = (function() {
    var gameLoop, init;

    init = function() {
      var bg, bgc, game, gic, gmc, gui;

      bgc = document.getElementById('background');
      gmc = document.getElementById('game');
      gic = document.getElementById('gui');
      bg = bgc.getContext('2d');
      game = gmc.getContext('2d');
      gui = gic.getContext('2d');
      gameLoop();
    };
    gameLoop = function() {
      console.log('looping...');
      window.requestAnimationFrame(gameLoop);
    };
    return {
      init: init
    };
  })();

  app.init();

}).call(this);
