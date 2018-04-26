function signUp(form) {
    $('#username-message').html("");
    $('#password-message').html("");
    $('#retype-message').html("");
    $('#birthday-message').html("");
    $('#captcha-message').html("");
    var isValid = true;
    if (!isValidUsername()) {isValid = false};
    if (!isValidPassword()) {isValid = false};
    if (!isValidBirthday()) {isValid = false};
    if (!isCaptchaEmpty()) {isValid = false};
    if (!isValid) {
        return;
    }
    else {
        
    }
}

function isValidUsername() {
    var username = $('#username').val();
    if (username.length === 0) {
        $('#username-message').html("Bạn không thể bỏ trống chỗ này!");
        return false;
    }
    else if (!username.match(/^[A-Za-z0-9_]{4,32}$/)) {
        $('#username-message').html("Định dạng không hợp lệ (4-32 kí tự chữ, số và dấu _ )!");
        return false;
    }
    else {
        return true;
    }
}

function isValidPassword() {
    if ($('#password').val().length < 4) {
        $('#password-message').html("Bạn không thể bỏ trống chỗ này!");
        return false;
    }
    if ($('#retype').val().length < 4) {
        $('#retype-message').html("Bạn không thể bỏ trống chỗ này!");
        return false;
    }
    else if ($('#password').val().indexOf($('#retype').val())===-1 || $('#retype').val().indexOf($('#password').val())===-1) {
        $('#retype-message').html("Mật khẩu không khớp!");
        return false;
    }
    else {
        return true;
    }
}

function isValidBirthday() {
    var input = $('#year').val() + '/' + $('#month').val() + '/' + $('#day').val();
    var birthday = new Date(input);
    if ((birthday.getMonth()+1) !== $('#month').val()) {
        $('#birthday-message').html("Ngày sinh không hợp lệ!");
        return false;
    }
    else {
        return true;
    }
}

function isCaptchaEmpty() {
    if(grecaptcha.getResponse().length === 0) {
        $('#captcha-message').html("Vui lòng nhập captcha!");
        return false;
    }
    else {
        return true; 
    }
}