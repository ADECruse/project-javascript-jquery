$(document).ready(function() {

	$('button').click(function() {
		$('.grid').removeClass("black");
		$('#wrapper').empty();
		var div=$('<div class="grid"></div>');
		var input = Number(window.prompt('Please enter grid size','32'));
		var size = (700 / input) - 2
		var count = 0;
		var squared = input * input;
		while (count < squared) {
			
			$(div).last().clone().appendTo('#wrapper');
			count++;
		};
		$('.grid').height(size).width(size);

	$('.grid').hover(function() {
		$(this).addClass("black");

});
	});

	



});

		
