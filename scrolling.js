(function()  {
$(window).scroll(function()  {
  if($('#navbar-top').offset().top < 100)
    {
      $('#navbar-top').stop().animate({height: '20%','background-color': 'rgba(7, 8, 29,0.0)'},100,"linear");
    } else{
      $('#navbar-top').stop().animate({height: '15%','background-color': 'rgba(7, 8, 29,0.8)'},100,"linear");
    }
});
})(jQuery);
