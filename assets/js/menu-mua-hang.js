$(document).ready(function() {
	insertMenuMuaHang();
});

function insertMenuMuaHang() {
	var menu = 
	`<nav id="navbar" class="navbar navbar-inverse navbar-static-top"">
		<div class="container-fluid">
			<div class="navbar-header">
				<a id="logo-link" class="navbar-brand" href="#">
					<img id="logo-image" src="assets/image/logo.png">
				</a>
			</div>
			<form class="navbar-form navbar-left" action="/action_page.php">
				<div class="input-group">
					<input  id="search-box-mua-hang" type="text" class="form-control" placeholder="Bạn tìm gì...">
					<div class="input-group-btn">
						<button class="btn btn-default" onclick="searchMuaHang()">
							<i class="glyphicon glyphicon-search"></i>
						</button>
					</div>
				</div>
			</form>
			<ul class="nav navbar-nav">
				<li class="dropdown">
					<a id="phone" class="dropdown-toggle" data-toggle="dropdown" href="san-pham-chon-mua.html#load-phone">
						ĐIỆN THOẠI
					</a>
					<ul class="dropdown-menu">
						<li><a href="san-pham-chon-mua.html#load-phone-apple">Apple</a></li>
						<li><a href="san-pham-chon-mua.html#load-phone-samsung">Samsung</a></li>
						<li><a href="san-pham-chon-mua.html#load-phone-oppo">Oppo</a></li>
						<li><a href="san-pham-chon-mua.html#load-phone-sony">Sony</a></li>
						<li><a href="san-pham-chon-mua.html#load-phone-vivo">Vivo</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a id="tablet" class="dropdown-toggle" data-toggle="dropdown" href="san-pham-chon-mua.html#load-tablet">
						MÁY TÍNH BẢNG
					</a>
					<ul class="dropdown-menu">
						<li><a href="san-pham-chon-mua.html#load-tablet-apple">Apple</a></li>
						<li><a href="san-pham-chon-mua.html#load-tablet-samsung">Samsung</a></li>
						<li><a href="san-pham-chon-mua.html#load-tablet-lenovo">Lenovo</a></li>
						<li><a href="san-pham-chon-mua.html#load-tablet-masstel">Masstel</a></li>
						<li><a href="san-pham-chon-mua.html#load-tablet-huawei">Huawei</a></li>
					</ul>
				</li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li>
				<a class="dropdown-toggle" data-toggle="dropdown" href="gio-hang.html">GIỎ HÀNG</a>
				</li>
				<li class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#">
						TÀI KHOẢN CUSTOMER
					</a>
					<ul class="dropdown-menu">
						<li><a href="#" onclick="">Cập nhật thông tin</a></li>
						<li><a href="#" onclick="">Lịch sử mua hàng</a></li>
						<li><a href="#" onclick="">Đăng xuất</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>`;

	$('.menu-mua-hang').html(menu);
}

function searchMuaHang() {
	if ($('#search-box-mua-hang').val().length == 0) {
		alert("Nhập tên sản phẩm bạn muốn tìm.");
		return;
	}
	else {
		var url ='san-pham-chon-mua.html#search='+$('#search-box-mua-hang').attr("checked", true).val().toLowerCase();
		$(location).attr('href', url);
		alert();
	}
}