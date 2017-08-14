$(function() {

  var mainNav = $('nav');
  var subMenu = $('.menu');
  var navPosition = subMenu.offset().top;

  $(window).scroll(function() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > navPosition) {
      subMenu.addClass('sticky');
    } else {
      subMenu.removeClass('sticky');
    }
  });

  $(window).resize(function() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > navPosition) {
      subMenu.addClass('sticky');
    } else {
      subMenu.removeClass('sticky');
    }
  });

  (function($) {
    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

  })(jQuery);

  var win = $(window);

  var allMods = $(".module");

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });

  win.scroll(function(event) {

    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });

  });

});
