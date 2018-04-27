$(document).ready(function()
{
	window.addEventListener('hashchange', function(){
    	window.location.reload();
	});
	$('#page').hide();
	switch(location.hash) {
		case "#load-phone":
		{
			showPhone();
			break;
		}
		case "#load-tablet":
		{
			showTablet();
			break;
		}
		case "#load-phone-apple":
		{
			findPhone('apple');
			break;
		}
		case "#load-phone-samsung":
		{
			findPhone('samsung');
			break;
		}
		case "#load-phone-oppo":
		{
			findPhone('oppo');
			break;
		}
		case "#load-phone-sony":
		{
			findPhone('sony');
			break;
		}
		case "#load-phone-vivo":
		{
			findPhone('vivo');
			break;
		}
		case "#load-tablet-apple":
		{
			findTablet('apple');
			break;
		}
		case "#load-tablet-samsung":
		{
			findTablet('samsung');
			break;
		}
		case "#load-tablet-lenovo":
		{
			findTablet('lenovo');
			break;
		}
		case "#load-tablet-masstel":
		{
			findTablet('masstel');
			break;
		}
		case "#load-tablet-huawei":
		{
			findTablet('huawei');
			break;
		}
		default:
		{
			if (location.hash.indexOf('search=') !== -1) {
				search(location.hash.substr(location.hash.indexOf('=') + 1));
			}
		}
	}
});

function searchByFilter() {
	var name = $('#filter_name').val().toLowerCase();
	var cat_phone = $('#cat_phone').is(':checked');
	var cat_tablet = $('#cat_tablet').is(':checked');

	var pro_arr = [];
	if ($('#pro_apple').is(':checked')) {
		pro_arr.push('apple');
	}
	if ($('#pro_samsung').is(':checked')) {
		pro_arr.push('samsung');
	}
	if ($('#pro_oppo').is(':checked')) {
		pro_arr.push('oppo');
	}
	if ($('#pro_sony').is(':checked')) {
		pro_arr.push('sony');
	}
	if ($('#pro_vivo').is(':checked')) {
		pro_arr.push('vivo');
	}
	if ($('#pro_lenovo').is(':checked')) {
		pro_arr.push('lenovo');
	}
	if ($('#pro_masstel').is(':checked')) {
		pro_arr.push('masstel');
	}
	if ($('#pro_huawei').is(':checked')) {
		pro_arr.push('huawei');
	}

	var price_arr = [];
	if ($('#1m').is(':checked')) {
		price_arr.push('1m');
	}
	if ($('#1-5m').is(':checked')) {
		price_arr.push('1-5m');
	}
	if ($('#5-10m').is(':checked')) {
		price_arr.push('5-10m');
	}
	if ($('#10-15m').is(':checked')) {
		price_arr.push('10-15m');
	}
	if ($('#15m').is(':checked')) {
		price_arr.push('15m');
	}

	for (var i = 0; i < $(".dien-thoai").size(); i++) {
		$(".dien-thoai").get(i).style.display = "none";
	}
	for (var i = 0; i < $(".may-tinh-bang").size(); i++) {
		$(".may-tinh-bang").get(i).style.display = "none";
	}
	for (var i = 0; i < $(".dien-thoai").size(); i++) {
		var select = ".dien-thoai:eq(" + i + ")";
		var pName = $(select).find('h5').html();
		pName = pName.toLowerCase();
		if (pName.indexOf(name) != -1){
			$(".dien-thoai").get(i).style.display = "inline-block";
		}
	}

	for (var i = 0; i < $(".may-tinh-bang").size(); i++) {
		var select = ".may-tinh-bang:eq(" + i + ")";
		var pName = $(select).find('h5').html();
		pName = pName.toLowerCase();
		if (pName.indexOf(name) != -1){
			$(".may-tinh-bang").get(i).style.display = "inline-block";
		}
	}

	if (cat_phone == true || cat_tablet == true) {
		if (cat_tablet == false) {
			for (var i = 0; i < $(".may-tinh-bang").size(); i++) {
				$(".may-tinh-bang").get(i).style.display = "none";		
			}
		}
		if (cat_phone == false) {
			for (var i = 0; i < $(".dien-thoai").size(); i++) {
				$(".dien-thoai").get(i).style.display = "none";		
			}
		}
	}

	if (pro_arr.length > 0) {
		for (var i = 0; i < $(".dien-thoai").size(); i++) {
			var select = ".dien-thoai:eq(" + i + ")";
			var pPro = $(select).find('.nha-san-xuat').html();
			if (pro_arr.indexOf(pPro) == -1){
				$(".dien-thoai").get(i).style.display = "none";
			}
		}

		for (var i = 0; i < $(".may-tinh-bang").size(); i++) {
			var select = ".may-tinh-bang:eq(" + i + ")";
			var pPro = $(select).find('.nha-san-xuat').html();
			if (pro_arr.indexOf(pPro) == -1){
				$(".may-tinh-bang").get(i).style.display = "none";
			}
		}
	}

	if (price_arr.length > 0) {
		for (var i = 0; i < $(".dien-thoai").size(); i++) {
			var select = ".dien-thoai:eq(" + i + ")";
			var pPrice = $(select).find('.price-level').html();
			if (price_arr.indexOf(pPrice) == -1){
				$(".dien-thoai").get(i).style.display = "none";
			}
		}

		for (var i = 0; i < $(".may-tinh-bang").size(); i++) {
			var select = ".may-tinh-bang:eq(" + i + ")";
			var pPrice = $(select).find('.price-level').html();
			if (price_arr.indexOf(pPrice) == -1){
				$(".may-tinh-bang").get(i).style.display = "none";
			}
		}
	}

	var count = 0;
	for (var i = 0; i < $(".dien-thoai").size(); i++) {
		var select = ".dien-thoai:eq(" + i + ")";
		if ($(select).css('display') != 'none'){
			count++;
		}
	}

	for (var i = 0; i < $(".may-tinh-bang").size(); i++) {
		var select = ".may-tinh-bang:eq(" + i + ")";
		if ($(select).css('display') != 'none'){
			count++;
		}
	}

	if (count == 0) {
		$('#no_product_alert').css('display', 'inline-block');
	} else {
		$('#no_product_alert').css('display', 'none');
	}

}

function showAll() {
	for (var i = 0; i < $(".dien-thoai").size(); i++) {
		$(".dien-thoai").get(i).style.display = "inline-block";
	}
	for (var i = 0; i < $(".may-tinh-bang").size(); i++) {
		$(".may-tinh-bang").get(i).style.display = "inline-block";
	}
}

function showPhone() {
	$('#page').show();
	for (var i = 0; i < $(".may-tinh-bang").size(); i++)
	{
		$(".may-tinh-bang").get(i).style.display = "none";
	}
	$("#wrap > div").slice(0, 12).addClass('dien-thoai-p1');
	$("#wrap > div").slice(12, 24).addClass('dien-thoai-p2').hide();
	$("#wrap > div").slice(24, 25).addClass('dien-thoai-p3').hide();
	$('#page1').on('click', function() {
    	$("#wrap > div:visible").hide();
    	$('.dien-thoai-p1').show();
	});
	$('#page2').on('click', function() {
  		$("#wrap > div:visible").hide();
    	$('.dien-thoai-p2').show();
	});
	$('#page3').on('click', function() {
  		$("#wrap > div:visible").hide();
    	$('.dien-thoai-p3').show();
	});
}

function showTablet() {
	$('#page').show();
	for (var i = 0; i < $(".dien-thoai").size(); i++)
	{
		$(".dien-thoai").get(i).style.display = "none";
	}
	$("#wrap > div").slice(25, 37).addClass('may-tinh-bang-p1');
	$("#wrap > div").slice(37, 49).addClass('may-tinh-bang-p2').hide();
	$("#wrap > div").slice(49, 50).addClass('may-tinh-bang-p3').hide();
	$('#page1').on('click', function() {
    	$("#wrap > div:visible").hide();
    	$('.may-tinh-bang-p1').show();
	});
	$('#page2').on('click', function() {
  		$("#wrap > div:visible").hide();
    	$('.may-tinh-bang-p2').show();
	});
	$('#page3').on('click', function() {
  		$("#wrap > div:visible").hide();
    	$('.may-tinh-bang-p3').show();
	});
}

function findPhone(producer)
{
	hideAll();
	for (var i = 0; i < $(".dien-thoai").size(); i++)
	{
		name = $(".dien-thoai .nha-san-xuat").get(i).innerHTML;
		if (name.indexOf(producer) != -1) {
			$(".dien-thoai").get(i).style.display = "inline-block";
		}
	}

}

function findTablet(producer)
{
	hideAll();
	for (var i = 0; i < $(".may-tinh-bang").size(); i++)
	{
		name = $(".may-tinh-bang .nha-san-xuat").get(i).innerHTML;
		if (name.indexOf(producer) != -1) {
			$(".may-tinh-bang").get(i).style.display = "inline-block";
		}
	}
}

function hideAll() {
	for (var i = 0; i < $(".dien-thoai").size(); i++)
	{
		$(".dien-thoai").get(i).style.display = "none";
	}
	for (var i = 0; i < $(".may-tinh-bang").size(); i++)
	{
		$(".may-tinh-bang").get(i).style.display = "none";
	}
}

function search(input) {
	hideAll();
	$('#page').hide();
	for (var i = 0; i < $(".dien-thoai").size(); i++)
	{
		name = $(".dien-thoai .card-title").get(i).innerHTML.toLowerCase();
		if (name.indexOf(input) != -1) {
			$(".dien-thoai").get(i).style.display = "inline-block";
		}
	}
	for (var i = 0; i < $(".may-tinh-bang").size(); i++)
	{
		name = $(".may-tinh-bang .card-title").get(i).innerHTML.toLowerCase();
		if (name.indexOf(input) != -1) {
			$(".may-tinh-bang").get(i).style.display = "inline-block";
		}
	}
}

function searchProduct() {
	if ($('#search-box').val().length == 0) {
		alert("Nhập tên sản phẩm bạn muốn tìm.");
		return;
	}
	hideAll();
	var input = $('#search-box').attr("checked", true).val().toLowerCase();
	search(input);
}