$(document).ready(function() {
	
	$('#header-user-login').click(function(event) {
		$('#login, #login-overlay').fadeIn();
	});

	$('#login-overlay, .user-exit-btn').click(function(event) {
		$('#login-overlay, #login').fadeOut();
	});

});