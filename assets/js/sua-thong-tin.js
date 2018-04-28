function FixInformation(form) {
    $('#username-message').html("");
    $('#email-message').html("");
    $('#phonenumber-message').html("");
    $('#birthday-message').html("");

    var isValid = true;
    if (!isValidUsername()) {isValid = false};
    if (!isValidEmail()) {isValid = false};
    if (!isValidPhonenumber()) {isValid = false};
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

function isValidEmail() {
    var email = $('#email').val();
    if (email.length === 0) {
        $('#email-message').html("Bạn không thể bỏ trống chỗ này!");
        return false;
    }
    else if (!email.match(/^[A-Za-z0-9_]{4,32}$/)) {
        $('#email-message').html("Định dạng không hợp lệ (4-32 kí tự chữ, số và dấu _ )!");
        return false;
    }
    else {
        return true;
    }
}

function isValidPhonenumber() {
    var phonenumber = $('#phonenumber').val();
    if (phonenumber.length === 0) {
        $('#phonenumber-message').html("Bạn không thể bỏ trống chỗ này!");
        return false;
    }
    else if (!phonenumber.match(/^[A-Za-z0-9_]{4,32}$/)) {
        $('#phonenumber-message').html("Định dạng không hợp lệ (4-32 kí tự chữ, số và dấu _ )!");
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