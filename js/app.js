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
});
