$(document).ready(function()
{
	for (var i = 16; i < $(".col-lg-3").size(); i++)
	{
		$(".col-lg-3").get(i).style.display = "none";
	}
});

$("#page1").bind("click",function () {
	$("#page2").removeAttr('disabled');
	for (var i = 0; i < 16; i++)
	{
		$(".col-lg-3").get(i).style.display = "inline-block";
	}
    for (var i = 16; i < $(".col-lg-3").size(); i++)
	{
		$(".col-lg-3").get(i).style.display = "none";
	}
	$("#page1").attr('disabled','disabled');
});

$("#page2").bind("click",function () {
	$("#page1").removeAttr('disabled');
	for (var i = 0; i < 16; i++)
	{
		$(".col-lg-3").get(i).style.display = "none";
	}
    for (var i = 16; i < $(".col-lg-3").size(); i++)
	{
		$(".col-lg-3").get(i).style.display = 'inline-block';
	}
	$("#page2").attr('disabled','disabled');
});

$("#phone").bind("click",function () {
    window.location = 'index.html';
});
$("#tablet").bind("click",function () {
    window.location = 'index.html';
});





$("#sign-up").bind("click",function()
{	
		for (var i = 0; i < $(".hidden").size(); i++)
		{
			var name = $('span[name=ngay]');
			var innerHTML = $('span[name=ngay]').get(i).innerHTML;
			
			alert(name + "-->" + innerHTML);
		}
});