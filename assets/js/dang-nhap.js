function signIn() {
    $('#username-message').html("");
    $('#password-message').html("");
    if (!isValidUsername() || !isValidPassword()) {
        return;
    }
    else {
        $(location).attr('href', 'index-chon-mua.html');
    }
}

function isValidUsername() {
    var input = $('#username').val();
    var username = "customer";
    if (input.length === 0) {
        $('#username-message').html("Vui lòng nhập tên đăng nhập!");
        return false;
    }
    else if (input.indexOf(username)===-1 || username.indexOf(input)===-1) {
        $('#username-message').html("Tên đăng nhập không tồn tại!");
        return false;
    }
    else {
        return true;
    }
}

function isValidPassword() {
    var input = $('#password').val();
    var password = "1234";
    if (input.length === 0) {
        $('#password-message').html("Vui lòng nhập mật khẩu!");
        return false;
    }
    else if (input.indexOf(password)===-1 || password.indexOf(input)===-1) {
        $('#password-message').html("Mật khẩu không đúng!");
        return false;
    }
    else {
        return true;
    }
}

function signInAdmin() {
    $('#username-message').html("");
    $('#password-message').html("");
    if (!isValidUsernameAdmin() || !isValidPasswordAdmin()) {
        return;
    }
    else {
        $(location).attr('href', 'admin.html');
    }
}

function isValidUsernameAdmin() {
    var input = $('#username').val();
    var username = "admin";
    if (input.length === 0) {
        $('#username-message').html("Vui lòng nhập tên đăng nhập!");
        return false;
    }
    else if (input.indexOf(username)===-1 || username.indexOf(input)===-1) {
        $('#username-message').html("Tên đăng nhập không tồn tại!");
        return false;
    }
    else {
        return true;
    }
}

function isValidPasswordAdmin() {
    var input = $('#password').val();
    var password = "admin";
    if (input.length === 0) {
        $('#password-message').html("Vui lòng nhập mật khẩu!");
        return false;
    }
    else if (input.indexOf(password)===-1 || password.indexOf(input)===-1) {
        $('#password-message').html("Mật khẩu không đúng!");
        return false;
    }
    else {
        return true;
    }
}