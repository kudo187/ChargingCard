$(document).ready(function () { 
    $(".isNumber").ForceNumericOnly();
    $("[id$=divAlertStep1]").hide();
    $("[id$=btnAcceptStep1]").click(function () {
        //$("[id$=txtUsername]").focus();
        if (!ValidateForm()) {
            return false;
        }
        return true;
    });
    $("[id$=cboCity]").on('change focus', function () {
        $("[id$=hdfDistrict]").val("-1");
        $("[id$=hdfDistrictName]").val("");
        GetDistrict();
        if ($("[id$=hdisPostback]").val() != "0") {
            $("[id$=cboDistrict]").val($("[id$=hdisPostback]").val());
            $("[id$=hdisPostback]").val("0");
        }
    });   
    $("[id$=cboDistrict]").change(function () {
        var hdfdis = $(this).val();
        var hdfDistrictName = $(this).find("option:selected").text();
        $("[id$=hdfDistrict]").val(hdfdis);
        $("[id$=hdfDistrictName]").val(hdfDistrictName);
       
    });

    //$("[id$=cboCity]").focus();   
    //$("[id$=txtUsername]").focus();    
});

$("[id$=txtUsername]").focusout(function () {
    var id = $("[id$=txtUsername]").val();
    var $data = "{'sUserName':'" + id + "'}";
    $("[id$=txtUsername]").parent().find('.ColorDo').remove();
    $.ajax({
        type: 'POST',
        url: '/home/ajaxserive/GetNameUser.aspx/CheckUserName',
        data: $data,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {  

            var parent = $("[id$=txtUsername]").parent();
            $(parent).find('.ColorDo').remove();
            if (!data.d) {
                
                $(parent).find('.ColorDo').remove();
                $(parent).find('.TextNote').remove();
                $(parent).find('.ColorXanh').remove();
                $(parent).append('<span class="ColorDo">Số điện thoại đã được đăng ký. Vui lòng nhập số khác</span>');
               // $("[id$=txtUsername]").next().text('Số điện thoại đã được đăng ký. Vui lòng nhập số khác');
                $("[id$=txtUsername]").parent().addClass("has-error");
            }
            else 
            {
                if ($("[id$=txtUsername]").val().length < 6) {
                    $(parent).find('.TextNote').remove();
                    $(parent).find('.ColorXanh').remove();
                    $(parent).append('<span class="ColorDo">Vui lòng nhập <b>số điện thoại</span>');
                    $("[id$=txtUsername]").parent().addClass("has-error");
                }
                else {                
                    $(parent).find('.ColorDo').remove();
                    $(parent).find('.TextNote').remove();
                    $(parent).find('.ColorXanh').remove();
                    $("[id$=txtUsername]").parent().removeClass("has-error");
                    $("[id$=txtUsername]").parent().addClass("has-success");
                    $(parent).append('<span class="ColorXanh">Số điện thoại này có thể đăng ký.</span>');
                }
            }
           
        }
    });

   
});

function checkInput(obj, msg) {
    var parent = $(obj).parent();
    $(parent).find('.ColorDo').remove();
    $(parent).find('.ColorDo').removeClass()
    $(parent).find('.TextNote').remove();
    $(parent).append('<span class="ColorDo">' + msg + '</span>');
    $(parent).addClass("has-error");
}

function ValidateForm() {
    var mess = "";
    var result = true;
    var CliendID = "0";
    if ($("[id$=txtUsername]").val().length == 0) {
        mess = "Vui lòng nhập <b>số điện thoại</b>";
        CliendID = $("[id$=txtUsername]");
        checkInput($("[id$=txtUsername]"), mess);
        result = false;
    }
    if ($("[id$=txtPassword]").val().length < 6) {
        mess = "Vui lòng nhập <b>mật khẩu</b> ít nhất 6 ký tự.";
        checkInput($("[id$=txtPassword]"), mess);
        if (CliendID == "0")
        {
            CliendID = $("[id$=txtPassword]");
        }
        result = false;
    }

    if ($("[id$=txtRePassword]").val().length == 0) {
        mess = "Vui lòng nhập <b>mật khẩu xác nhận </b>";
        checkInput($("[id$=txtRePassword]"), mess);
        if (CliendID == "0") {
            CliendID = $("[id$=txtPassword]");
        }
        result = false;
    }

    if ($("[id$=txtPassword]").val() != $("[id$=txtRePassword]").val()) {
        mess = "<b>Mật khẩu</b> và <b>mật khẩu nhập lại</b> không khớp.";
        checkInput($("[id$=txtRePassword]"), mess);
        if (CliendID == "0") {
            CliendID = $("[id$=txtRePassword]");
        }
        result = false;
    }
    if ($("[id$=txtFullName]").val().length < 3) {
        mess = "Vui lòng nhập <b>họ và tên</b> ít nhất 3 ký tự.<br/>";
        checkInput($("[id$=txtFullName]"), mess);
        if (CliendID == "0") {
            CliendID = $("[id$=txtFullName]");
        }
        result = false;
    }
    if ($("[id$=txtCMND]").val().length != 9 && $("[id$=txtCMND]").val().length != 12) {
        mess = "Số <b>CMND</b> không hợp lệ.<br/>";
        checkInput($("[id$=txtCMND]"), mess);
        if (CliendID == "0") {
            CliendID = $("[id$=txtCMND]");
        }
        result = false;
    }
    if ($("[id$=txtEmail]").val().length == 0) {
        mess = "Vui lòng nhập <b>Email</b>";
        checkInput($("[id$=txtEmail]"), mess);
        if (CliendID == "0") {
            CliendID = $("[id$=txtEmail]");
        }
        result = false;
    }
    var obj = $("[id$=txtEmail]");
    if ($(obj).val() != '') {
        var reg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!reg.test($(obj).val())) {
            showError($(obj), 'Email không hợp lệ.');
            //checkInput(obj, mess);
            result = false;
        }
    }
    if ($("[id$=txtAddress]").val().length < 10) {
        mess = "Địa chỉ không hợp lệ, <b>địa chỉ</b> ít nhất 10 ký tự.<br/>";
        checkInput($("[id$=txtAddress]"), mess);
        //$("[id$=txtUsername]").focus();
        if (CliendID == "0") {
            CliendID = $("[id$=txtAddress]");
        }
        result = false;
    }
    if ($("[id$=cboCity]").val() == "-1") {
        mess = "Vui lòng chọn <b>tỉnh / thành</b>.<br/>";
        checkInput($("[id$=cboCity]"), mess);
        result = false;
    }
    if ($("[id$=cboDistrict]").val() == "-1") {
        mess = "Vui lòng chọn <b>quận / huyện</b>.<br/>";
        checkInput($("[id$=cboDistrict]"), mess);
        result = false;
    }
    if (!result) {
        CliendID.focus();
        return false;
    }

    return true;
}

//function ValidateForm() {
//    var mess = "";
//    var result = true;
//    if ($("[id$=txtUsername]").val().length == 0) {
//        mess += "Vui lòng nhập <b>số điện thoại</b>.<br/>";
//        $("[id$=txtUsername]").focus();
//        result = false;
//    }
//    if ($("[id$=txtPassword]").val().length <7) {
//        mess += "Vui lòng nhập <b>mật khẩu</b> ít nhất 6 ký tự.<br/>";
//        $("[id$=txtPassword]").focus();
//        result = false;
//    }
//    if ($("[id$=txtPassword]").val() != $("[id$=txtRePassword]").val()) {
//        mess += "<b>Mật khẩu</b> và <b>mật khẩu nhập lại</b> không khớp.<br/>";
//        $("[id$=txtRePassword]").focus();
//        result = false;
//    } 
//    if ($("[id$=txtFullName]").val().length < 3) {
//        mess += "Vui lòng nhập <b>họ và tên</b> ít nhất 3 ký tự.<br/>";
//        $("[id$=txtFullName]").focus();
//        result = false;
//    }
//    if ($("[id$=txtCMND]").val().length != 9 && $("[id$=txtCMND]").val().length != 12) {
//        mess += "Số <b>CMND</b> không hợp lệ.<br/>";
//        $("[id$=txtCMND]").focus();
//        result = false;
//    }
//    var obj = $("[id$=txtEmail]");
//    if ($(obj).val() != '') {
//        var reg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//        if (!reg.test($(obj).val())) {
//            showError($(obj), 'Email không hợp lệ.');
//            $("[id$=txtEmail]").focus();
//            result = false;
//        }
//    }
//    if ($("[id$=txtAddress]").val().length <10) {
//        mess += "Địa chỉ không hợp, <b>địa chỉ</b> ít nhất 10 ký tự.<br/>";
//        $("[id$=txtAddress]").focus();
//        result = false;
//    }
//    if ($("[id$=cboCity]").val() == "-1") {
//        mess += "Vui lòng chọn <b>tỉnh / thành</b>.<br/>";
//        $("[id$=cboCity]").focus();
//        result = false;
//    }
//    if ($("[id$=cboDistrict]").val() == "-1") {
//        mess += "Vui lòng chọn <b>quận / huyện</b>.<br/>";
//        $("[id$=cboDistrict]").focus();
//        result = false;
//    }
//    if (!result){
//        $("[id$=divAlertStep1]").html(mess);
//        $("[id$=divAlertStep1]").show();
//        return false;
//    }
    
//    return true;
//}

function GetDistrict() {
    var cboDistrict = $('[id$=cboDistrict]');
    $(cboDistrict).find("option").remove();
    $(cboDistrict).append('<option value="-1">Chọn quận / huyện</option>');
    var requestdata = "{ 'CityId': '" + $("[id$=cboCity]").val() + "'}";
    $.ajax({
        type: "POST",
        url: "/thong-tin-them/tinh-thanh/",
        data: requestdata,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var obj = eval(response.d);

            $.each(obj, function (i, item) {
                $(cboDistrict).append('<option value="' + item.Id + '">' + item.DistrictName + '</option>');
            });

            $(cboDistrict).val($("[id$=hdfDistrict]").val());
        }
    });
}

function showErrorMesg(obj, msg) {
  
    var parent = $("[id$=" + obj + "]").parent();
    $(parent).find('.ColorDo').remove();
    $(parent).find('.TextNote').remove();
    $(parent).append('<span class="ColorDo">' + msg + '</span>');
    $(parent).addClass("has-error");
}
