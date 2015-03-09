'use strict';

Tinytest.add('Slideout.is', function (test) {
  var div1 = document.createElement('div');
  var div2 = document.createElement('div');
  var slide = new Slideout({
    'panel': div1,
    'menu': div2,
    'padding': 256,
    'tolerance': 70
  });
  test.instanceOf(slide, Slideout, 'Instantiation OK');
});
