$(document).ready(function()
{
	show(1);
	if (location.hash === "#chon-mua") {
		$("#menu-id").hide();
		$("#menu-mua-hang-id").show();
		$(".ct-btn").removeClass('hidden');
	}
	else {
		$("#menu-id").show();
		$("#menu-mua-hang-id").hide();
		$(".ct-btn").attr('class','hidden');
	}
});

function show(n)
{
	for (var i = 0; i < $(".large").size(); i++)
	{
		$(".large").get(i).style.display = "none";
	}
	$(".large").get(n - 1).style.display = "inline-block";
}

