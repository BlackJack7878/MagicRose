$(document).ready(function() {
	
	$('#header-user-basket').click(function(event) {
		$('#basket, #basket-overlay').fadeIn();
	});

	$('#basket-overlay, .user-exit-btn').click(function(event) {
		$('#basket-overlay, #basket').fadeOut();
	});

});