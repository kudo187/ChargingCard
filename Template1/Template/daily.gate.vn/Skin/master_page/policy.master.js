$(document).ready(function () {
    var _cardMenuId = 4;
    var _rechargeMenuId = 5;
    var _paymentMenuId = 8;
    var _default = 0;
    var _activeParent = 0;

    var _url = $(location).attr("href");
    if (_url.indexOf("?cat=2") != -1) {
        $("#topNav").find("ul:eq(0)").find("li").each(function () {
            $(this).find("a").removeClass("TopActive");
        });
        $("#pageInfo").addClass("TopActive");
    }

    if (leftMenuContent != null) {
        $.each(leftMenuContent, function () {
            var submenu_a = '<a class="nochild" href="/home/policy/?cat=' + this['ID'] + '">' + this['CategoryName'] + '</a>';
            var $submenu_li;
            if (getUrlVars()['cat'] == this['ID']) {
                var $submenu_li = $("<li>", { class: "active" }).html(submenu_a);             
                if (this["ParentID"] == _cardMenuId) {
                    $('#card_menu_content').addClass("active open")
                }
                else if (this['ParentID'] == _rechargeMenuId) {
                    $('#recharge_menu_content').addClass("active open")
                }
                else if (this['ParentID'] == _paymentMenuId) {
                    $('#payment_menu_content').addClass("active open")
                }
                _default = 1;
            }
            else {
                var $submenu_li = $("<li>").html(submenu_a);              
            }
            if (this["ParentID"] == _cardMenuId) {
                $('#card_menu_content ul').append($submenu_li);
            }
            else if (this['ParentID'] == _rechargeMenuId) {
                $('#recharge_menu_content ul').append($submenu_li);
            }
            else if (this['ParentID'] == _paymentMenuId) {
                $('#payment_menu_content ul').append($submenu_li);
            }
           
        });
        if (_default == 0) {
            $('#card_menu_content').addClass("active open");
            $('#card_menu_content ul li:eq(0)').addClass("active");

        }
    }
   
});