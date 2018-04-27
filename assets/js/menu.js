$(document).ready(function() {
	insertMenu();
});

function insertMenu() {
	var menu = 
	`<nav id="navbar" class="navbar navbar-inverse navbar-static-top"">
		<div class="container-fluid">
			<div class="navbar-header">
				<a id="logo-link" class="navbar-brand" href="index.html">
					<img id="logo-image" src="assets/image/logo.png">
				</a>
			</div>
			<form class="navbar-form navbar-left" action="javascript:void(0);">
				<div class="input-group">
					<input  id="search-box" type="text" class="form-control" placeholder="Bạn tìm gì...">
					<div class="input-group-btn">
						<button id="search-btn" class="btn btn-default" onclick="search()">
							<i class="glyphicon glyphicon-search"></i>
						</button>
					</div>
				</div>
			</form>
			<ul class="nav navbar-nav">
				<li class="dropdown">
					<a id="phone" class="dropdown-toggle" data-toggle="dropdown" href="san-pham.html#load-phone">
						ĐIỆN THOẠI
					</a>
					<ul class="dropdown-menu">
						<li><a href="san-pham.html#load-phone-apple">Apple</a></li>
						<li><a href="san-pham.html#load-phone-samsung">Samsung</a></li>
						<li><a href="san-pham.html#load-phone-oppo">Oppo</a></li>
						<li><a href="san-pham.html#load-phone-sony">Sony</a></li>
						<li><a href="san-pham.html#load-phone-vivo">Vivo</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a id="tablet" class="dropdown-toggle" data-toggle="dropdown" href="san-pham.html#load-tablet">
						MÁY TÍNH BẢNG
					</a>
					<ul class="dropdown-menu">
						<li><a href="san-pham.html#load-tablet-apple">Apple</a></li>
						<li><a href="san-pham.html#load-tablet-samsung">Samsung</a></li>
						<li><a href="san-pham.html#load-tablet-lenovo">Lenovo</a></li>
						<li><a href="san-pham.html#load-tablet-masstel">Masstel</a></li>
						<li><a href="san-pham.html#load-tablet-huawei">Huawei</a></li>
					</ul>
				</li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li><a href="dang-ki.html">ĐĂNG KÍ</a></li>
				<li><a href="dang-nhap.html">ĐĂNG NHẬP</a></li>
			</ul>
		</div>
	</nav>`;

	$('.menu').html(menu);
}

function search() {
	if ($('#search-box').val().length == 0) {
		alert("Nhập tên sản phẩm bạn muốn tìm.");
		return;
	}
	else {
		var url ='san-pham.html#search='+$('#search-box').attr("checked", true).val().toLowerCase();
		$(location).attr('href', url);
	}
}