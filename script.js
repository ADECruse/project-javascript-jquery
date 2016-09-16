$(document).ready(function() {
	var div=$('<div class="grid"></div>')
	var count = 0
	var input = 16
	var squared = input * input
	while (count < squared - 1) {
		$(div).last().clone().appendTo('#wrapper');
		
		count++;
	};
	
});


