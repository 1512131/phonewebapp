$(document).ready(function() {
	insertMenu();	
});

function insertMenu(){
	var menu = `<nav id="navbar" class="navbar navbar-inverse navbar-static-top"">
		<div class="container-fluid">
			<div class="navbar-header">
				<a id="logo-link" class="navbar-brand" href="index.html">
					<img id="logo-image" src="assets/image/logo.png">
				</a>
			</div>
			<form class="navbar-form navbar-left" action="/action_page.php">
				<div class="input-group">
					<input  id="search-box" type="text" class="form-control" placeholder="Bạn tìm gì...">
					<div class="input-group-btn">
						<button class="btn btn-default" type="submit" onclick="search()">
							<i class="glyphicon glyphicon-search"></i>
						</button>
					</div>
				</div>
			</form>
			<ul class="nav navbar-nav">
				<li class="dropdown">
					<a id="phone" class="dropdown-toggle" data-toggle="dropdown" href="dien-thoai.html">
						ĐIỆN THOẠI
					</a>
					<ul class="dropdown-menu">
						<li><a onclick="showPhone('apple')">Apple</a></li>
						<li><a onclick="showPhone('samsung')">Samsung</a></li>
						<li><a onclick="showPhone('oppo')">Oppo</a></li>
						<li><a onclick="showPhone('sony')">Sony</a></li>
						<li><a onclick="showPhone('vivo')">Vivo</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a id="tablet" class="dropdown-toggle" data-toggle="dropdown" href="dien-thoai.html">
						MÁY TÍNH BẢNG
					</a>
					<ul class="dropdown-menu">
						<li><a onclick="showPhone('Apple')">Apple</a></li>
						<li><a onclick="showPhone('Samsung')">Samsung</a></li>
						<li><a onclick="showPhone('Lenovo')">Lenovo</a></li>
						<li><a onclick="showPhone('Masstel')">Masstel</a></li>
						<li><a onclick="showPhone('Huawei')">Huawei</a></li>
					</ul>
				</li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li><a id="sign-up" href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
				<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
			</ul>
		</div>
	</nav>`;

	var html = $('body').html();
	$('body').html(menu + html);
}