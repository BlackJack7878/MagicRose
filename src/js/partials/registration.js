$(document).ready(function() {
	
	$('#header-user-register').click(function(event) {
		$('#regist, #regist-overlay').fadeIn();
	});

	$('#regist-overlay, .user-exit-btn').click(function(event) {
		$('#regist-overlay, #regist').fadeOut();
	});

	$('#regist-form').submit(function(event) {
		var pass1 = $('input[type="password"]:first').val();
		var pass2 = $('input[type="password"]:last').val();
		var tel1 = $('input[type="tel"]:first').val();
		var tel2 = $('input[type="tel"]:last').val();
		if (pass1 != pass2) {
			event.preventDefault();
			$('input[type="password"]').css('border-color', 'red');
		}
		else {
			$('input[type="password"]').css('border-color', '#2fbf71');
		}
		if (tel1 != tel2) {
			event.preventDefault();
			$('input[type="tel"]').css('border-color', 'red');
		}
		else {
			$('input[type="tel"]').css('border-color', '#2fbf71');
		}
	});

});