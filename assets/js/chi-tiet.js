$(document).ready(function()
{
	show(1);
});

function show(n)
{
	for (var i = 0; i < $(".large").size(); i++)
	{
		$(".large").get(i).style.display = "none";
	}
	$(".large").get(n - 1).style.display = "inline-block";
}

