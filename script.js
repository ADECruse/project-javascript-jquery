$(document).ready(function() {

	$('button').click(function() {
		$('.grid').removeClass("black");
		$('#wrapper').empty().css("background-color", "black");

		var div=$('<div class="grid"></div>');
		var input = Number(window.prompt('Please enter grid size','32'));
		var size = (700 / input) - 2
		var count = 0;
		var squared = input * input;
		while (count < squared) {
			
			$(div).last().clone().appendTo('#wrapper');
			count++;
		};
		var color = 1;
		$('.grid').height(size).width(size).css("background-color", "white");

	$('.grid').mouseenter(function() {
		var gradient = $(this).css("opacity");
		if (gradient > 0) {
			$(this).css("opacity", "-=0.1");

			console.log(gradient)
		};
		
					
		
		

}); 
	});

	



});

		
