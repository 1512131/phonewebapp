$(document).ready(function()
{
	showFrom(0);
	$("#page1").attr('disabled','disabled');

	$("#page1").bind("click",function () {
		$("#page2").removeAttr('disabled');
		showFrom(0);
		$("#page1").attr('disabled','disabled');
	});

	$("#page2").bind("click",function () {
		$("#page1").removeAttr('disabled');
		showFrom(16);
		$("#page2").attr('disabled','disabled');
	});

	$("#page3").bind("click",function () {
		$("#page1").removeAttr('disabled');
		$("#page2").removeAttr('disabled');
		$("#page4").removeAttr('disabled');
		showFrom(32);
		$("#page3").attr('disabled','disabled');
	});

	$("#page4").bind("click",function () {
		$("#page1").removeAttr('disabled');
		$("#page2").removeAttr('disabled');
		$("#page3").removeAttr('disabled');
		showFrom(48);
		$("#page4").attr('disabled','disabled');
	});
});

function hideAll() {
	for (var i = 0; i < $(".item").size(); i++)
	{
		$(".item").get(i).style.display = "none";
	}
}

function showFrom(index) {
	hideAll();
	for (var i = index; i < $(".item").size() && i < index + 16; i++)
	{
		$(".item").get(i).style.display = "inline-block";
	}
}



function search() {
	if ($('#search-box').val().length == 0) {
		alert("Nhập tên sản phẩm bạn muốn tìm.");
		return;
	}
	hideAll();
	$("#page1").hide();
	$("#page2").hide();
	$("#page3").hide();
	$("#page4").hide();
	var inputName = $('#search-box').attr("checked", true).val().toLowerCase();
	var name;
	for (var i = 0; i < $(".item").size(); i++)
	{
		name = $(".card-title").get(i).innerHTML.toLowerCase();
		if (name.indexOf(inputName) != -1) {
			$(".item").get(i).style.display = "inline-block";
		}
	}
}

function showPhone(phoneName)
{
	hideAll();
	$("#page1").hide();
	$("#page2").hide();
	$("#page3").hide();
	$("#page4").hide();
	for (var i = 0; i < $(".item").size(); i++)
	{
		name = $(".nha-san-xuat").get(i).innerHTML;
		if (name.indexOf(phoneName) != -1) {
			$(".item").get(i).style.display = "inline-block";
		}
	}
}