$(document).ready(function()
{
	if (!isEmptyCart()) {
		sumMoney();
	}
});
function isEmptyCart() {
	if ($(".gh-table-price").size() === 0) {
		$(".gh-body").hide();
		$(".gh-empty").show();
		return true;
	}
	$(".gh-body").show();
	$(".gh-empty").hide();
	return false;
}

function sumMoney() {
	var sum = 0;
	var price;
	var count;
	var i = 0;
	$(".gh-table-count-ip").each(function() {
		price = $(".gh-table-price").get(i++).innerHTML.replace(/[^0-9]/g,'');
    	count =$(this).val();
    	sum = sum + parseInt(price) * parseInt(count);
	});
	$("#sum").html(format(sum) + '₫');
}

function increase(span) {
	var count = $(span).parent().find('input');
	count.val(parseInt(count.val())+1);
	sumMoney();
}

function decrease(span) {
	var count = $(span).parent().find('input');
	if (parseInt(count.val()) > 1) {
		count.val(parseInt(count.val())-1);
		sumMoney();
	}
}

function removeRow(row) {
	$(row).closest('tr').remove();
	if (!isEmptyCart()) {
		sumMoney();
	}
}

function format(x) {
    return isNaN(x)?"":x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}