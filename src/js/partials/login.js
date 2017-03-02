$(document).ready(function() {
	
	$('#header-user-login').click(function(event) {
		$('#login, #login-overlay').fadeIn();
	});

	$('#login-overlay').click(function(event) {
		$('#login-overlay, #login').fadeOut();
	});

});