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

  var win = $(window),
      allMods = $(".module");

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

  var win = $(window),
      sold = $(".sold");

  win.scroll(function(event) {

    sold.each(function(i, img) {
      var img = $(img),
          open = $(".open");

      if (open.visible(true)) {
        img.addClass("sold-animation");
      }
    });

  });

  var links = subMenu.find('a'),
      href = subMenu.find('href');

  links.on('click', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
  });

  var ad = $(".ad"),
      adBtn = ad.find('.ad-btn');

  adBtn.on('click', function(event) {
    ad.css('display', 'none');
  })

  $(window).scroll(function() {
    var scrollTop = $(document).scrollTop();
        adPosition = ad.offset().top;

    if (scrollTop > adPosition) {
      ad.addClass('stickyAd');
    } else {
      ad.removeClass('stickyAd');
    }
  });

});
