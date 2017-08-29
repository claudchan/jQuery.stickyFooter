/*!
 * jQuery Sticky Footer V1.0
 * Copyright (c) 2017 claudchan
 * MIT license
 */
;(function ($, window, document, undefined) {

  var pluginName = 'stickyFooter',
      defaults = {
        wrapper: $('html'),
        container: $('body'),
        delay: 200
      };

  function Plugin(element, options) {
    this.element = element;
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  $.extend(Plugin.prototype, {

    init: function () {
      this.stickyFooter();
    },
    stickyFooter: function () {
      var element = $(this.element),
      wrapper = this.options.wrapper,
      container = this.options.container,
      delay = this.options.delay,
      _update = function () {
        wrapper.css({ 'position': 'relative', 'min-height': '100%' });
        element.css({ 'position': 'absolute', 'bottom': '0', 'margin': '0', 'width': '100%' });
        container.css('margin-bottom', element.outerHeight());
      },
      resize = false;
      _update();
      $(window).on('resize', function () {
        resize = true;
      });
      setInterval(function () {
        if(resize) {
          resize = false;
          _update();
        }
      }, delay);
    }
  });

  $.fn[pluginName] = function ( options ) {
    var args = arguments;
    if (options === undefined || typeof options === 'object') {
      return this.each(function () {
        if (!$.data(this, 'plugin_' + pluginName)) {
          $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
        }
      });
    }
    else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      var returns;
      this.each(function () {
        var instance = $.data(this, 'plugin_' + pluginName);
        if (instance instanceof Plugin && typeof instance[options] === 'function') {
            returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
        }
        if (options === 'destroy') {
          $.data(this, 'plugin_' + pluginName, null);
        }
      });
      return returns !== undefined ? returns : this;
    }
  };

})(jQuery, window, document);
