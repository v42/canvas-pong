(function() {
  var app;

  app = (function() {
    var init;

    init = function() {
      return console.log('hello coffee module pattern');
    };
    return {
      init: init
    };
  })();

  app.init();

}).call(this);
