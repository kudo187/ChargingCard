$(document).ready(function () {
    $(".alert").hide();
    $(".tienDienThoaiBg").addClass('active');
    $(".tienDienThoaiBg").addClass('open');
    $("[id$=btAccept]").click(function () {
        if ($("[id$=txtPhoneNumber]").val().replace(" ", "") == "" || $("[id$=txtPhoneNumber]").val().length <= 0) {
            $('.se-pre-con').hide();
            $(".alert").html("Vui lòng nhập số điện thoại cần nạp.");
            $(".alert").show();          
            return false;
        }
    });

    $('[id$=ddlCardType]').on('keyup keypress blur change', function (e) {
        var hdDiscount = $("#hdDiscount").val();
        var id = $(this).val();
        $($.parseJSON(hdDiscount)).map(function () {
            if (this.ID == id) {
                $("#ipDiscount").val(this.Discount + " %");
                var totalAmount = this.BuyPrice;
                $("#ipTotalAmount").val(NumberToVND(totalAmount));
                $("[id$=hdproductID]").val(this.ID);
            }
        })
    });
    $("[id$=ipQuanlity]").on('keyup keypress blur change', function (e) {
        if ($(this).val() == "0" || $(this).val() == "") {
            $(this).val("1");
        }
        var hdDiscount = $("#hdDiscount").val();
        var id = $("[id$=ddlCardType] option:selected").val();
        $($.parseJSON(hdDiscount)).map(function () {
            if (this.ID == id) {
                var totalAmount = this.BuyPrice;
                $("#ipTotalAmount").val(NumberToVND(totalAmount));
                $("[id$=hdproductID]").val(this.ID);
            }
        })
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

    });
    var _url = $(location).attr("href");
    if (_url.indexOf("../../nap-dien-thoai/nap-mobi/index.html") != -1) {
        $(".BlockBank ul li").find("a[data-name='Nạp tiền Mobifone']").click();
    }
    if (_url.indexOf("../../nap-dien-thoai/nap-viettel/index.html") != -1) {
        $(".BlockBank ul li").find("a[data-name='Nạp tiền Viettel']").click();
    }
    if (_url.indexOf("../../nap-dien-thoai/nap-vina/index.html") != -1) {
        $(".BlockBank ul li").find("a[data-name='Nạp tiền Vinaphone']").click();
    }
    if (_url.indexOf("../../nap-dien-thoai/nap-vietnammobile/index.html") != -1) {
        $(".BlockBank ul li").find("a[data-name='Nạp tiền Vietnam mobile']").click();
    }
    if (_url.indexOf("../../nap-dien-thoai/nap-beeline/index.html") != -1) {
        $(".BlockBank ul li").find("a[data-name='Nạp tiền Beeline']").click();
    }


});
function loadInfoProduct(id) {
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
                $("#ipDiscount").val(val[0].Discount + " %");
                var totalAmount = val[0].BuyPrice;
                $("[id$=hdproductID]").val(val[0].ID);
                $("#ipTotalAmount").val(NumberToVND(totalAmount));
                hdDiscount = hdDiscount.substr(0, hdDiscount.length - 1);
                $("#hdDiscount").val('[' + hdDiscount + ']');
            });
        }
    });
}
function ShowError(id, productid) {   
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
                $("#hdDiscount").val('');
                var hdDiscount = "";
                for (var i = 0; i < count; i++) {
                    $('[id$=ddlCardType]').append($('<option>').val(val[i].ID).text(NumberToVND(val[i].OriginalPrice)));
                    hdDiscount += '{"ID":' + val[i].ID + ',"Discount":"' + val[i].Discount + '","BuyPrice":' + val[i].BuyPrice + '},';
                    if(val[i].ID == productid)
                    {
                        $("#ipDiscount").val(val[i].Discount + " %");
                        var totalAmount = val[i].BuyPrice;
                        $("[id$=hdproductID]").val(val[i].ID);
                        $("#ipTotalAmount").val(NumberToVND(totalAmount));
                        hdDiscount = hdDiscount.substr(0, hdDiscount.length - 1);
                        $("#hdDiscount").val('[' + hdDiscount + ']');
                        $('[id$=ddlCardType]').val(val[i].ID);
                    }
                }
               
            });
        }
    });
}
