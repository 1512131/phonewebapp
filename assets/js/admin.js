$(document).ready(function() {

	showPane(1);
	showProductGroup(1);

	$('.dashboard_button').bind('click', function(){
		$('.dashboard_button').css('background-color', 'white');
		$('.dashboard_button').css('color', 'black');
		$(this).css('background-color', 'blue');
		$(this).css('color', 'white');
		var id = $(this).attr('id');
		var index = id.substring(4);
		showPane(index);
	});

	$('#table_product').find('tr').bind('click', function(){
		$(location).attr('href', $(this).attr('id'));
	});

	$('#table_product_pagination').find('a').bind('click', function(){
		showProductGroup($(this).html());
	});

	$('#btn_add_product').bind('click', function(){
		var d = new Date();
		var month = d.getMonth() + 1;
		var date = d.getDate() + `/` + month + `/` + d.getFullYear();

		var name = $('#product_name').val();
		var category = $('#product_category').val();
		var producer = $('#product_producer').val();
		var count = $('#table_product').find('tbody').find('tr').size() + 1;
		var html = '<tr class="product_group_2"><td>' + count + '</td><td>' + name + '</td><td>' + date + '</td><td>0</td><td>0</td><td>' + category + '</td><td>' + producer + '</td></tr>';

		$('#table_product').find('tbody').append(html);

		$('#product_name').val('');
		$('#product_category').val('');
		$('#product_producer').val('');
		showProductGroup(2);
	});

	$('.order_state').change(function() {
		var val = $(this).val();
		var tr = $(this).parent().parent();
		if (val === 'Chưa giao'){
			tr.attr('class', 'danger');
		} else if (val === 'Đang giao'){
			tr.attr('class', 'warning');
		} else if (val === 'Đã giao'){
			tr.attr('class', 'success');
		}
	});
});


function showPane(index){
	for(var i=1; i<=4; i++){
		var pane = '#pane_' + i;
		$(pane).hide();
	}

	var pane = '#pane_' + index;
	$(pane).show();
}

function showProductGroup(index){
	for(var i=1; i<=2; i++){
		var group = ".product_group_" + i;
		$(group).hide();
	}

	var group = ".product_group_" + index;
	$(group).show();
}