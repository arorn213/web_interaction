$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $(‘body’).addClass(‘changeColor’)
      }
      if ($(this).scrollTop() < 50) {
         $(‘body’).removeClass(‘changeColor’)
      }
   });
});