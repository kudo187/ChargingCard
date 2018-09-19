$(document).ready(function () {
    $(".tienGameBg").addClass('active');
    $(".tienGameBg").addClass('open');

    $(".alert").hide();
    if ($("[id$=hdCategory]").val() == "0")
    {
        $(".holder").val($($("#listgame").find("div")[0]).attr("data-value"));
        var content = $($("#listgame").find("div")[0]).clone().contents();
        $("#divActice").html(content);
        $($("#listgame").find("div")[0]).html($($("#listgame").find("div")[0]).find("div"));
    }
    else
    {
        $(".holder").val($("[id$=hdCategory]").val());
        $("#listgame").find("div").each(function () {
            if ($(this).attr("data-value") == $("[id$=hdCategory]").val()) {
                var content = $(this).clone().contents();
                $("#divActice").html(content);               
            }
        });

    }
   
    loadInfoProduct($(".holder").val());
    /* SELECT CHON GAME */

    $(".myDropdownSelect .active").click(function (e) {
        e.stopPropagation();
        var elem = $(this);
        $(this).siblings(".list").toggle();
    });   

    $(".myDropdownSelect .item").click(function (e) {
        e.stopPropagation();
        loadInfoProduct($(this).attr("data-value"));
        $(".myDropdownSelect .active").empty().html($(this).clone().contents());
        $(this).closest(".myDropdownSelect").find(".holder").val($(this).attr("data-value"));
        $(this).closest(".list").toggle();
    });
    $("[id$=btAccept]").click(function () {
        if($("[id$=txtAccount]").val().replace(" ", "")== "" || $("[id$=txtAccount]").val().length<=0)
        {
            $('.se-pre-con').hide();
            $(".alert").html("Vui lòng nhập tài khoản.");
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
                $("#ipTotalAmount").val(NumberToVND(this.BuyPrice));
                $("[id$=hdproductID]").val(this.ID);
            }
        })
    });
    
});


function loadInfoProduct(id) {
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
                $("#hdDiscount").val('');
                var hdDiscount = "";
                for (var i = 0; i < count; i++) {
                    $('[id$=ddlCardType]').append($('<option>').val(val[i].ID).text(NumberToVND(val[i].OriginalPrice)));
                    hdDiscount += '{"ID":' + val[i].ID + ',"Discount":"' + val[i].Discount + '","BuyPrice":' + val[i].BuyPrice + '},';
                }
                $("#ipDiscount").val(val[0].Discount + " %");              
                $("[id$=hdproductID]").val(val[0].ID);
                $("#ipTotalAmount").val(NumberToVND(val[0].BuyPrice));
                hdDiscount = hdDiscount.substr(0, hdDiscount.length - 1);
                $("#hdDiscount").val('[' + hdDiscount + ']');
            });
        }
    });
}
