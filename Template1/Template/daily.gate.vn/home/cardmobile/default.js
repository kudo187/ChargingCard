$(document).ready(function () {


    $("[id$=txtQuantity]").val('1');
    $(".alert").hide();
    $(".theGameBg").addClass('active');
    $(".theGameBg").addClass('open');

    $("[id$=txtQuantity]").on('keyup change', function (e) {
        //if ($(this).val() == "0" || $(this).val() == "") {
        //    $(this).val("1");
        //}
        var id = $("[id$=hdproductID]").val();
        var discount = $("[id$=txtDiscount]").val();
        var totalAmount = parseInt($("[id$=txtQuantity]").val()) * parseInt($("[id$=hdBuyPrice]").val());
        $("[id$=txtTotalAmount]").val(NumberToVND(totalAmount));
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

    $("[id$=btAccept]").click(function () {
        if ($("[id$=txtQuantity]").val()== "0" || $("[id$=txtQuantity]").val()=="") {
            $('.se-pre-con').hide();
            $(".alert").html("Vui lòng nhập số lượng thẻ cần mua.");
            $(".alert").show();
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
function loadInfoProduct(id, productid) {
    var $data = "{'CategoryID':'" + id + "'}";
    $("[id$=hdCategory]").val(id);
    $.ajax({
        type: 'POST',
        url: '/thong-tin-them/chinh-sach/',
        data: $data,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (r) {
            $.each(r, function (key, val) {
                var count = val.length;
                $('[id$=ddlCardType]').empty();
                $("[id$=hdDiscount]").val('');
                var hdDiscount = "";
                for (var i = 0; i < count; i++) {
                    if (productid == val[i].ID) {
                        $("[id$=txtDiscount]").val(val[i].Discount + " %");
                        var totalAmount = parseInt($("[id$=txtQuantity]").val()) * val[i].BuyPrice;
                        $("[id$=txtTotalAmount]").val(NumberToVND(totalAmount));
                        $("[id$=hdBuyPrice]").val(val[i].BuyPrice);

                    }
                    $('[id$=ddlCardType]').append($('<option>').val(val[i].ID).text(NumberToVND(val[i].OriginalPrice)));
                    hdDiscount += '{"ID":' + val[i].ID + ',"Discount":"' + val[i].Discount + '","BuyPrice":' + val[i].BuyPrice + '},';
                }
                $("[id$=hdproductID]").val(productid);

            });
        }
    });
}
