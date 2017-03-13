$(document).ready(function() {
	
	$('#user-basket-btn').click(function(event) {
		$('#basket-overlay, #basket').hide();
		$('#buy, #buy-overlay').fadeIn(1);
	});

	$('#buy-overlay, .user-exit-btn').click(function(event) {
		$('#buy-overlay, #buy').fadeOut();
	});

});