$(document).ready(function() {
	// On Click Sound Play JS
	var audio = new Audio("images/bleep.wav");
	$('.btn-listing > li > a').click( () => audio.play() );
	// On Click of Button Listing Active Class Add
	$(".btn-listing > li > a").click(function(e) {
		e.preventDefault();
		$(".btn-listing > li > a").parent().removeClass("active");
		$(this).parent().addClass("active");
	});
});