/*!
 * jQuery Sticky Footer V1.0
 * Copyright (c) 2017 claudchan
 * MIT license
 */

(function ($) {

  $.fn.stickyFooter = function (options) {

    var settings = $.extend({}, $.fn.stickyFooter.defaults, options),
        element = this;

    stickyFooter(element, settings);

    return this;
   
  };

  function stickyFooter(element, settings) {

    $this = $(element);
    wrapper = settings.wrapper;
    container = settings.container;
    delay = settings.delay;

    var update = function () {
      wrapper.css({ 'position': 'relative', 'min-height': '100%' });
      $this.css({ 'position': 'absolute', 'bottom': '0', 'margin': '0', 'width': '100%' });
      container.css('margin-bottom', $this.outerHeight());
    },

    resize = false;

    update();

    $(window).on('resize', function () {
      resize = true;
    });

    setInterval(function () {
      if(resize) {
        resize = false;
        update();
      }
    }, delay);

  };

  $.fn.stickyFooter.defaults = {
    wrapper: $('html'),
    container: $('body'),
    delay: 200
  };

})(jQuery);
