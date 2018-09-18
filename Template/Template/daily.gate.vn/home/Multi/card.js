$(document).ready(function () {
    if ($("[id$=hdIsPostBack]").val() == "1") {        
        $("#tbOrder").hide();
        $("#tbBuyed").show();
        $("#tbBuyed").find(".total-quantity").html($("[id$=hdTotalQuantiti]").val());
        $("#tbBuyed").find(".total-price").html($("[id$=hdTotalAmount]").val()); 
    }
    $(".alert").hide();
    $("[id$=ddlCategory] option").each(function () {     
        var trdisplay = $("[id$=ddlCategory]").val();
        var obj = $("[id$=Data_" + $(this).val() + "]");
        if (obj.find("[id*=lblSalePrice]").html()!=null)
            obj.find("[id*=hdSalePrice]").val(obj.find("[id*=lblSalePrice]").html().replace(",", ""));         
        if ($(this).val() == trdisplay) {
            obj.show();
        }
        else {
            obj.hide();
        }
    });
    //$("[id*=ddlCardType]").change(function () {
    //    var id = $(this).parent().attr('valueIdParent');
    //    console.log($(this).parent().attr('valueIdParent'));
    //    console.log($("[id$=" + id + "]").find("[id*=lblTotal]").html());
    //    $.each(CardInfo, function () {
    //        if (this['ID'] == id) {
    //            var salePrice = this['SalePrice'];
    //            $('#' + eleID + 'lblSalePrice').text(salePrice);
    //        }
    //    });
    //});
    $("[id$=tbOrder]").find("tr.nottotal").each(function () {
        if ($(this).find('[id*=lbcheckCard]').val() == '1') {            
            $(this).show();
            var totalAmount = parseInt($(this).find("[id*=txtQuantity]").val()) * parseInt($(this).find("[id*=lblTotal]").html().replace(",", ""));
            $(this).find("[id*=hdSalePrice]").val(totalAmount);
            $(this).find("[id*=lblSalePrice]").html(NumberToVND(totalAmount).replace("VND", ""));          
            $("[id$=lblTotalSum]").html($("[id$=lblTotalSum]").html().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }        
    });
    //$("[id*=txtQuantity]").on('keyup change', function (e) {
    //    if (parseInt($(this).val()) <= 0) {
    //        $(this).val(1);
    //    }
    //    var id = $(this).attr("valueChange");
    //    var obj = $("[id$=Data_" + id + "]");
    //    var totalAmount = parseInt($(this).val()) * parseInt(obj.find("[id*=lblTotal]").html().replace(",", ""));
    //    obj.find("[id*=hdSalePrice]").val(totalAmount);
    //    obj.find("[id*=lblSalePrice]").html(NumberToVND(totalAmount).replace("VND", ""));             
    //    SumOrder();
    //    $("[id$=lblTotalSum]").html($("[id$=lblTotalSum]").html().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //});
    $(document).on("click", "#multipleBuying .delete", function () {
        var id = $(this).attr('valueDelete');
        var obj = $("[id$=" + id + "]");
        obj.find('[id*=lbcheckCard]').val("0");
        $("[id$=lblQuantitySum]").html(parseInt($("[id$=lblQuantitySum]").html()) - parseInt(obj.find("[id*=txtQuantity]").val()));
        $("[id$=lblTotalSum]").html(parseInt($("[id$=lblTotalSum]").html().replace(",", "")) - parseInt(obj.find("[id*=hdSalePrice]").val()));
        $("[id$=lblTotalSum]").html($("[id$=lblTotalSum]").html().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        hideObject(obj);
        ResetCardOrder(obj);
    });
    $(".btnInsert").click(function () {
        var id = $("[id$=ddlCategory]").val();
        var obj = $("[id$=Data_" + id + "]");
        if(obj.css('display') == 'none'){
            $("tr.footer").prev().after(obj);
            $("[id$=lblQuantitySum]").html(parseInt($("[id$=lblQuantitySum]").html()) + 1);
            $("[id$=lblTotalSum]").html(parseInt($("[id$=lblTotalSum]").html().replace(",", "")) + parseInt(obj.find("[id*=hdSalePrice]").val()));
            $("[id$=lblTotalSum]").html($("[id$=lblTotalSum]").html().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            obj.find('[id*=lbcheckCard]').val("1");
            obj.find("[id*=lblSalePrice]").html(obj.find("[id*=lblTotal]").html());            
            obj.show();
            ResetCardOrder(obj);
        }
        else {
            var addObj = obj.clone();
            var addRows = parseInt(obj.find("[id*=hdAddRows_" + id + "]").val()) + 1;
            obj.find("[id*=hdAddRows_" + id + "]").val(addRows);            
            var nid = "Data_" + id + "_" + addRows;
            addObj.attr('id', nid);
            addObj.find(".selectpicker").attr('valueIdParent', nid);
            addObj.find("[id*=txtQuantity]").attr('valuechange', nid);

            addObj.find("[id*=txtQuantity]").attr('name', nid);
            addObj.find(".btn-number").attr('data-field', nid);

            addObj.find(".delete").attr('valueDelete', nid);            
            addObj.find("[id*=txtQuantity]").val("1");
            addObj.find("[id*=lblSalePrice]").val(obj.find("[id*=lblTotal]")); 
            //obj.after(addObj);
            $("tr.footer").prev().after(addObj);
            $("[id$=lblQuantitySum]").html(parseInt($("[id$=lblQuantitySum]").html()) + 1);
            $("[id$=lblTotalSum]").html(parseInt($("[id$=lblTotalSum]").html().replace(",", "")) + parseInt(addObj.find("[id*=hdSalePrice]").val()));
            $("[id$=lblTotalSum]").html($("[id$=lblTotalSum]").html().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            $("[id$=lblTotalSum]").html($("[id$=lblTotalSum]").html().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            addObj.find('[id*=lbcheckCard]').val("1");
            addObj.find("[id*=lblSalePrice]").html(obj.find("[id*=lblTotal]").html());
            addObj.show();
            ResetCardOrder(addObj);

        }
    });
    MethodDisplay($('[id$=ddlMethod]').val());
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
    window.onload = function () {
        SumOrder();
        $("[id$=lblTotalSum]").html($("[id$=lblTotalSum]").html().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    }



    //$('.btn-number').click(function (e) {$('input[name="btnName"]')
    //$('.btn-number').click(function (e) {
        //e.preventDefault();

    $(document).on('click', '.btn-number', function (e) {
     

        var fieldName = $(this).attr('data-field');
        var type = $(this).attr('data-type');
        var input = $("input[name='" + fieldName + "']");
        //var input = $("[id*=txtQuantity]");
       
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if (type == 'minus') {
                var minValue = parseInt(input.attr('min'));
                if (!minValue) minValue = 1;
                if (currentVal > minValue) {
                    input.val(currentVal - 1).change();
                    QuantityChange(input);
                }
                if (parseInt(input.val()) == minValue) {
                    $(this).attr('disabled', true);
                }

            } else if (type == 'plus') {
                var maxValue = parseInt(input.attr('max'));
                if (!maxValue) maxValue = 9999999999999;
                if (currentVal < maxValue) {
                    input.val(currentVal + 1).change();
                    QuantityChange(input);
                }
                if (parseInt(input.val()) == maxValue) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').focusin(function () {
        $(this).data('oldValue', $(this).val());
    });


});
function hideObject(obj) {
    obj.hide();
}
function ResetCardOrder(obj) {
    obj.find("[id*=txtQuantity]").val(1);
    obj.find("[id*=ddlCardType]").val(obj.find("[id*=ddlCardType] option:first").val());
    obj.find("[id*=lblSalePrice]").html(obj.find("[id*=lblTotal]").html());
    if (obj.find("[id*=lblTotal]").html()!=null)
        obj.find("[id*=hdSalePrice]").val(obj.find("[id*=lblTotal]").html().replace(",", ""));
}

function SumOrder() {
    var TotalQuantity = 0;
    var TotalAmount = 0;
    $("[id$=tbOrder]").find("tr.nottotal").each(function () {
        if ($(this).css('display') == 'none') {
            $(this).find('[id*=lbcheckCard]').val("0");
        }
        else
        {
            $(this).find('[id*=lbcheckCard]').val("1");
            TotalQuantity += parseInt($(this).find("[id*=txtQuantity]").val());
            TotalAmount += parseInt($(this).find("[id*=hdSalePrice]").val());            
        }
    });
    $("[id$=lblQuantitySum]").html(TotalQuantity);
    $("[id$=lblTotalSum]").html(TotalAmount);
}

function MethodDisplay(id)
{
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
}

function DownloadTXT(data) {
    var $data = JSON.stringify({ lngOrderIDs: data })
    $.ajax({
        type: 'POST',
        url: '/xuat-the/xuat-file-txt/',
        data: $data,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (r) {
            alert('ok');
        }
    });
}

function ChangeCard(e) {
    var id = $(e).val();
    var eleID = $(e).id;    
    var idparent = $(e).parent().attr('valueIdParent');
    console.log($(e).parent().attr('valueIdParent'));
    console.log($("[id$=" + idparent + "]").find("[id*=lblTotal]").html());
    var quantity = parseInt($("[id$=" + idparent + "]").find("[id*=txtQuantity]").val());
    $.each(CardInfo, function () {
        if (this['ID'] == id) {
            var salePrice = this['SalePrice'];
            console.log(salePrice);
            $("[id$=" + idparent + "]").find("[id*=lblTotal]").html(salePrice);
            var totalsalePrice = parseInt(salePrice.replace(",", "")) * quantity;
            $("[id$=" + idparent + "]").find("[id*=hdSalePrice]").val(totalsalePrice);            
            $("[id$=" + idparent + "]").find("[id*=lblSalePrice]").html(totalsalePrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            SumOrder();
            $("[id$=lblTotalSum]").html($("[id$=lblTotalSum]").html().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        }
    });
}
function QuantityChange(e) {
    var id = $(e).attr("valueChange");
    var obj = $("[id$=" + id + "]");
    var totalAmount = parseInt($(e).val()) * parseInt(obj.find("[id*=lblTotal]").html().replace(",", ""));
    obj.find("[id*=hdSalePrice]").val(totalAmount);
    obj.find("[id*=lblSalePrice]").html(NumberToVND(totalAmount).replace("VND", ""));    
    SumOrder();
    $("[id$=lblTotalSum]").html($("[id$=lblTotalSum]").html().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
}
function AcceptOrder() {
    var sCardOrderedemplate = "{'ID':'@ID', 'CardName':'@CardName', 'Quantity':'@Quantity', 'Total': '@Total', 'Logo': '@Logo', 'Amount': '@Amount', 'SalePrice' : '@SalePrice', 'QuantitySum' : '@QuantitySum', 'TotalSum': '@TotalSum'},";
    var sCardOrdered = "";
    var cardOrder = "";
    $("[id$=tbOrder]").find("tr.nottotal").each(function () {
        if ($(this).find('[id*=lbcheckCard]').val() == '1') {
            $(this).show();
            var totalAmount = parseInt($(this).find("[id*=txtQuantity]").val()) * parseInt($(this).find("[id*=lblTotal]").html().replace(",", ""));
            $(this).find("[id*=hdSalePrice]").val(totalAmount);
            $(this).find("[id*=lblSalePrice]").html(NumberToVND(totalAmount).replace("VND", ""));
            $("[id$=lblTotalSum]").html($("[id$=lblTotalSum]").html().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            cardOrder = sCardOrderedemplate;
            cardOrder = cardOrder.replace("@ID", $(this).find("[id*=ddlCardType]").val()).replace("@Quantity", $(this).find("[id*=txtQuantity]").val());
            cardOrder = cardOrder.replace("@Total", $(this).find("[id*=Total]").html()); 
            cardOrder = cardOrder.replace("@Logo", $(this).find(".logoformuilty img").attr("src"));
            cardOrder = cardOrder.replace("@Amount", $(this).find("[id*=ddlCardType] option:selected").text());
            cardOrder = cardOrder.replace("@SalePrice", $(this).find("[id*=lblSalePrice]").html());
            cardOrder = cardOrder.replace("@QuantitySum",$("[id$=lblQuantitySum]").html());
            cardOrder = cardOrder.replace("@TotalSum", $("[id$=lblTotalSum]").html());
            cardOrder = cardOrder.replace("@CardName", $("[id*=lblCardName]").html());
            sCardOrdered += cardOrder;
        }
    });


    sCardOrdered = "[" + sCardOrdered.substring(0, sCardOrdered.length - 1) + "]";
    console.log(sCardOrdered);
    $("[id$=hdCardOrder]").val(sCardOrdered);
    $("[id$=hdTotalQuantiti]").val($("[id$=lblQuantitySum]").html());
    $("[id$=hdTotalAmount]").val($("[id$=lblTotalSum]").html());
    
}