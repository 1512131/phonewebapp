$(document).ready(function() {
	setVisible('.new_', 1);
	setVisible('.best_selling_', 1);
	setVisible('.most_view_', 1);
	
	$('.new_pagination_item').bind('click', function(){
		setVisible('.new_', $(this).html());
			$('.new_pagination_item').css('background-color', 'white');
		$('.new_pagination_item').css('color', 'black');
		$(this).css('background-color', 'blue');
		$(this).css('color', 'white');
	});

	$('.best_selling_pagination_item').bind('click', function(){
		setVisible('.best_selling_', $(this).html());
		$('.best_selling_pagination_item').css('background-color', 'white');
		$('.best_selling_pagination_item').css('color', 'black');
		$(this).css('background-color', 'blue');
		$(this).css('color', 'white');
	});

	$('.most_view_pagination_item').bind('click', function(){
		setVisible('.most_view_', $(this).html());
		$('.most_view_pagination_item').css('background-color', 'white');
		$('.most_view_pagination_item').css('color', 'black');
		$(this).css('background-color', 'blue');
		$(this).css('color', 'white');
	});
});

function setVisible(str, index){
	for (var i=1; i<=3; i++){
		var select = str + i;
		$(select).hide();
	}
	var select = str + index;
		$(select).show();
}