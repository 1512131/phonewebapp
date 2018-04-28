$(document).ready(function(){

	showPane(1);
	$('.dashboard_button').bind('click', function(){
		$('.dashboard_button').css('background-color', 'white');
		$('.dashboard_button').css('color', 'black');
		$(this).css('background-color', 'green');
		$(this).css('color', 'white');
		var id = $(this).attr('id');
		var index = id.substring(4);
		showPane(index);
	});

	$('.next-btn next-btn-warning next-btn-normal next-btn-large').bind('click', function(){
		var id1 = $(this).attr('id');
		var index1 = id1.substring(4);
		showButton(index1);
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
});


function showPane(index){
	for(var i=1; i<=2; i++){
		var pane = '#pane_' + i;
		var panetk = '#panetk_' +i;
		$(pane).hide();
		$(panetk).hide();
	}

	var pane = '#pane_' + index;
	$(pane).show();
}

function showButton(index){
	for(var i=1; i<=2; i++){
		var pane = '#pane_' + i;
		var panetk = '#panetk_' +i;
		$(pane).hide();
		$(panetk).hide();
	}

	var panetk = '#panetk_' + index;
	$(panetk).show();
}
