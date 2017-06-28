// custom JavaScript
$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    slidesPerRow: 1,
    pauseOnFocus: false,
    pauseOnHover: false
  });

// Hide navigation bar as user scrolls
  var userScroll = 0;
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop - userScroll >= 50) {
      var heightNavbar = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + heightNavbar}, 150);
      userScroll = scrollTop;
    } else if (userScroll - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      userScroll = scrollTop;
    }
  });
});
