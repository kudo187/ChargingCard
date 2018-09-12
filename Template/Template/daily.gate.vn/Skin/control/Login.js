$("[id$=logIn]").click(function () {

    if ($('#frmLogin').is(':visible')) {
        $("[id$=txtUsername]").val($.trim($("[id$=txtUsername]").val()));

        if ($("[id$=txtUsername]").val() == '') {
            EmptyUsername();
            return false;
        }
        if ($("[id$=txtPassword]").val() == '') {
            EmptyPassword();
            return false;
        }
        return true;
    }
    return true;
});

$("[id$=logIn]").keydown(function (e) {
    var key;

    if (window.event)
        key = window.event.keyCode;     //IE
    else
        key = e.which;     //firefox

    if (key == 9) {
        $("[id$=txtUsername]").select();
        return false;
    }
});

$("#login_form input").keydown(function (e) {
    var key;
    if (window.event)
        key = window.event.keyCode;     //IE
    else
        key = e.which;     //firefox

    if (key == 13) {
        $("[id$=logIn]").click();
        return false;
    }
});

function EmptyUsername() {
    $("#dMessage").css("display", "block").addClass("alert alert-danger").html("Xin vui lòng nhập Số điện thoại.");
}

function EmptyPassword() {
    $("#dMessage").css("display", "block").addClass("alert alert-danger").html("Xin vui lòng nhập Mật khẩu.");
}