$(document).ready(function () {
    $("#liLogouted").hide();
});


$("[id$=btnlogIn]").click(function () {
    $("[id$=txtUsername1]").val($.trim($("[id$=txtUsername1]").val()));

    if ($("[id$=txtUsername1]").val() == '') {
        EmptyUsername();
        return false;
    }
    if ($("[id$=txtPassword1]").val() == '') {
        EmptyPassword();
        return false;
    }
    return true;
});

$("#frmLoginPage input").keydown(function (e) {
    var key;
    if (window.event)
        key = window.event.keyCode;     //IE
    else
        key = e.which;     //firefox

    if (key == 13) {
        $("[id$=btnlogIn]").click();
        return false;
    }
});
function EmptyUsername() {
    $("#dloginMessage").css("display", "block").addClass("alert alert-danger").html("Xin vui lòng nhập Số điện thoại.");
}

function EmptyPassword() {
    $("#dloginMessage").css("display", "block").addClass("alert alert-danger").html("Xin vui lòng nhập Mật khẩu.");
}
