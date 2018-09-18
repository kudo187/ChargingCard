$(document).ready(function () {

    loadInfoProduct($('[id$=ddlMethod]').val());


    $('[id$=ddlMethod]').on('change', function (e) {      
        var id = $(this).val();    
        loadInfoProduct(id);    
    });
    $('[id$=ddlCardType]').on('change', function (e) {
        var hdDiscount = $("#hdDiscount").val();
        var id = $(this).val();
        $($.parseJSON(hdDiscount)).map(function () {
            if (this.ID == id) {             
                var totalAmount = this.BuyPrice;
                $("[id$=txtAmount]").val(NumberToVND(totalAmount));
                $("[id$=hdproductID]").val(this.ID);
            }
        })
    });
    $(".alert").hide();

    $("[id$=btAccept]").click(function () {
        if ($("[id$=txtPhoneNumber]").val().replace(" ", "") == "" || $("[id$=txtPhoneNumber]").val().length <= 0) {
            $('.se-pre-con').hide();
            $(".alert").html("Vui lòng nhập số điện thoại cần chuyển.");
            $(".alert").show();
            return false;
        }
    });
});
function loadInfoProduct(id) {
    var $data = "{'CategoryID':'" + id + "'}";   
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
                $("#hdDiscount").val('');
                var hdDiscount = "";
                for (var i = 0; i < count; i++) {
                    $('[id$=ddlCardType]').append($('<option>').val(val[i].ID).text(NumberToVND(val[i].OriginalPrice)));
                    hdDiscount += '{"ID":' + val[i].ID + ',"Discount":"' + val[i].Discount + '","BuyPrice":' + val[i].BuyPrice + '},';
                }
                hdDiscount = hdDiscount.substr(0, hdDiscount.length - 1);
                $("#hdDiscount").val('[' + hdDiscount + ']');
            });
            $($.parseJSON($("#hdDiscount").val())).map(function () {
                if (this.ID == $('[id$=ddlCardType]').val()) {
                    var totalAmount = this.BuyPrice;
                    $("[id$=txtAmount]").val(NumberToVND(totalAmount));
                    $("[id$=hdproductID]").val(this.ID);
                }
            })
        }
    });
}
