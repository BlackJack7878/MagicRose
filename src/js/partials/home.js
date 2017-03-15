$(document).ready(function() {
	
	$(".shop-form-range").slider({
		range: true,
		min: 0,
		max: 10000,
		values: [ 2000, 4000 ],
		slide: function(event, ui) {
			$("#form-low-price").val(ui.values[0]);
			$("#form-high-price").val(ui.values[1]);
		}
	});

	$('.arrow').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop:$(target).position().top - 100}, 2000);
	});

});