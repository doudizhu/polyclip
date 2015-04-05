// Polyclip v0.0.1 - https://github.com/corysimmons/polyclip

$(function() {

  var polyclip = function() {

    $('.polyclip').each(function() {

      var duration = 3000,
          arr1 = [],
          arr2 = [],
          arr3 = [],
          pts;

      $(this).find('svg').each(function() {
        $(this).find('polygon').each(function(k, v) {
          arr1.push(v);
        });
      });

      arr2 = arr1.slice(0, (arr1.length / 2));
      arr3 = arr1.slice((arr1.length / 2), arr1.length);

      $(this).append('<div class="clip-wrap"></div>');

      var polyclip = $(this);

      $(this).find('svg:first-child polygon').each(function(k) {

        pts = $(arr2[k]).attr('points').replace(/,/g, 'H'),
        pts = pts.replace(/ +/g, 'px, '),
        pts = pts.replace(/H/g, 'px '),
        pts = pts.replace(/, $/g, ''),
        pts = pts.replace(/\n/g, '');

        polyclip.find('.clip-wrap').append('<div class="clip-element" style="-webkit-clip-path: polygon('+ pts +'); clip-path: polygon('+ pts +'); background: red;"></div>')
      });

    });

  };

  polyclip();

});
