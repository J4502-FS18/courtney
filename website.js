$(document).ready(function() {
  s('.menu-trigger').click(function(){
    s('nav ul').slideToggle(500)
  });

  $(window).resize(function() {
	   if (  $(window).width() > 700 ) {
		$('nav ul').removeAttr('style');
	 }
 });
});
