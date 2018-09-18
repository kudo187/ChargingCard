$(document).ready(function () {



    $(".alert").hide();
    $(".theGameBg").addClass('active');
    $(".theGameBg").addClass('open');

    $("[id$=btAccept]").click(function () {
        if ($("[id$=txtPhoneNumber]").val().replace(" ", "") == "" || $("[id$=txtPhoneNumber]").val().length <= 0) {
            $('.se-pre-con').hide();
            $(".alert").html("Vui lòng nhập số điện thoại cần nạp.");
            $(".alert").show();
            return false;
        }
    });
    $('[id$=ddlMethod]').on('keyup keypress blur change', function (e) {
        var id = $(this).val();
        switch (id) {
            case "0":
                $('[id$=divPrintType]').hide();
                $('[id$=txtPhoneReceive]').hide();
                break;
            case "1":
                $('[id$=divPrintType]').show();
                $('[id$=txtPhoneReceive]').hide();
                break;
            case "2":
                $('[id$=divPrintType]').hide();
                $('[id$=txtPhoneReceive]').show();
                break;
        }

    });
    $('[id$=LinkButton1]').click(function () {
        $("[id$=hdPageNum]").val($(this).html());
        $("[id$=btnCallPager]").click();

    });
    $('[id$=btnPrev]').click(function () {
        var curentpage = parseInt($("[id$=hdPageNum]").val()) - 1;
        if (curentpage > 0) {
            $("[id$=hdPageNum]").val(curentpage);
            $("[id$=btnCallPager]").click();
        }
        else {
            return false;
        }

    });
    $('[id$=btnNext]').click(function () {
        var curentpage = parseInt($("[id$=hdPageNum]").val()) + 1;
        var totalpage = parseInt($("[id$=hdTotalPage]").val());
        if (curentpage <= totalpage) {
            $("[id$=hdPageNum]").val(curentpage);
            $("[id$=btnCallPager]").click();
        }
        else {
            return false;
        }

    });

});
$(window).load(function () {
    var pagecurrent = $("[id$=hdPageNum]").val();
    var totalpage = parseInt($(this).prev().html());
    $('.pagger').find('[id$=LinkButton1]').each(function () {
        $(this).attr('href', 'javascript:;');
        if ($(this).html() != pagecurrent) {
            $(this).removeClass('current');
        }
        else {
            $(this).addClass('current');
        }

    })

});

$('[id$=ddlCardType]').on('keyup keypress blur change', function (e) {
    $(".alert").hide();
    var hdDiscount = $("#hdDiscount").val();
    var id = $(this).val();
    $($.parseJSON(hdDiscount)).map(function () {
        if (this.ID == id) {
            $("[id$=txtDiscount]").val(this.Discount + " %");
            var totalAmount = this.BuyPrice;
            $("[id$=txtTotalAmount]").val(NumberToVND(totalAmount));
            $("[id$=hdproductID]").val(this.ID);
        }
    })
});
//function loadInfoProduct(id, productid, e) {
//    $(e).addClass('active');
//    var $data = "{'CategoryID':'" + id + "'}";
//    $("[id$=hdCategory]").val(id);
//    $.ajax({
//        type: 'POST',
//        url: '/thong-tin-them/chinh-sach/',
//        data: $data,
//        contentType: 'application/json; charset=utf-8',
//        dataType: 'json',
//        success: function (r) {
//            $.each(r, function (key, val) {
//                var count = val.length;
//                $('[id$=ddlCardType]').empty();
//                $("[id$=hdDiscount]").val('');
//                var hdDiscount = "";
//                for (var i = 0; i < count; i++) {
//                    if (productid == val[i].ID) {
//                        $("[id$=txtDiscount]").val(val[i].Discount + " %");
//                        var totalAmount = parseInt(val[i].BuyPrice);
//                        $("[id$=txtTotalAmount]").val(NumberToVND(totalAmount));
//                        $("[id$=hdBuyPrice]").val(val[i].BuyPrice);

//                    }
//                    $('[id$=ddlCardType]').append($('<option>').val(val[i].ID).text(NumberToVND(val[i].OriginalPrice)));
//                    hdDiscount += '{"ID":' + val[i].ID + ',"Discount":"' + val[i].Discount + '","BuyPrice":' + val[i].BuyPrice + '},';
//                }
//                $("[id$=hdproductID]").val(productid);

//            });
//        }
//    });
//}
//$(".alert").hide();
$("[id$=txtPhoneNumber]").focusout(function () {
    var id = getCategoryID();
    if (id == -1) {
        $(".alert").html("Số điện thoại vừa nhập không hợp lệ!");
        $(".alert").show();
        return false;
    }
    loadInfoProduct(id);
});

function loadInfoProduct(id) {
    //$(e).addClass('active');
    var $data = "{'CategoryID':'" + id + "'}";
    $("[id$=hdCategory]").val(id);
    $.ajax({
        type: 'POST',
        url: '/home/ajaxserive/GetPolicy.aspx/ListPolicy',
        data: $data,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
                success: function (r) {
                    $.each(r, function (key, val) {
                        var count = val.length;
                        $('[id$=ddlCardType]').empty();
                        $("#hdDiscount").val('');
                        var hdDiscount = "";
                        for (var i = 0; i < count; i++) {
                            $('[id$=ddlCardType]').append($('<option>').val(val[i].ID).text(NumberToVND(val[i].OriginalPrice)));
                            hdDiscount += '{"ID":' + val[i].ID + ',"Discount":"' + val[i].Discount + '","BuyPrice":' + val[i].BuyPrice + '},';
                        }
                        $("[id$=txtDiscount]").val(val[0].Discount + " %");
                        var totalAmount = val[0].BuyPrice;
                        $("[id$=hdproductID]").val(val[0].ID);
                        $("[id$=txtTotalAmount]").val(NumberToVND(totalAmount));
                        hdDiscount = hdDiscount.substr(0, hdDiscount.length - 1);
                        $("#hdDiscount").val('[' + hdDiscount + ']');
                    });
                }
    });
}

function getCategoryID()
{
    var phone = parseservicemobile($("[id$=txtPhoneNumber]").val());
    switch (phone)
    {
        case "VMS":
            return 18;
        case "VINAPHONE":                   
            return 94;
        case "VIETTEL":
            return 95;                   
        case "VNMOBILE": 
            return 96;
        case "BEELINE": 
            return 97;                   
        default: return -1;
    }

}

function parseservicemobile(mobile) {
    var telco = getservicemobile(mobile.substring(0, 3));
    if (telco === "") {
        telco = getservicemobile(mobile.substring(0, 4));
        return telco;
    }
    return telco;
};

function getservicemobile(prefix) {
    var telco = "";
    switch (prefix) {        
        case "096":
        case "097":
        case "098":
        case "0162":
        case "0163":
        case "0164":
        case "0165":
        case "0166":
        case "0167":
        case "0168":
        case "0169":
        case "086":
        case "032"://03: la dau so moi cua viettel sau khi chuyen doi (016 -> 03)
        case "033":
        case "034":
        case "035":
        case "036":
        case "037":
        case "038":
        case "039":
            telco = "VIETTEL";
            break;
        case "090":
        case "093":
        case "0120":
        case "0121":
        case "0122":
        case "0126":
        case "0128":
        case "089":
        case "070"://07: la dau so moi cua mobi sau khi chuyen doi (012 -> 07)
        case "076":
        case "077":
        case "078":
        case "079":
            telco = "VMS";
            break;
        case "091":
        case "094":
        case "0123":
        case "0124":
        case "0125":
        case "0127":
        case "0129":
        case "088":
        case "081"://08: la dau so moi cua vina sau khi chuyen doi (012 -> 08)
        case "082":
        case "083":
        case "084":
        case "085":
            telco = "VINAPHONE";
            break;
        case "095":
            telco = "SFONE";
            break;
        case "092":
        case "0188":
        case "0186":
        case "056"://05: la dau so moi cua vnm sau khi chuyen doi (018 -> 05)
        case "058":
            telco = "VNMOBILE";
            break;
        case "0199":
        case "099":
        case "059"://05: la dau so moi cua vnm sau khi chuyen doi (019 -> 05)
            telco = "BEELINE";
            break;
        default:
            telco = "";
    }

    return telco;
};