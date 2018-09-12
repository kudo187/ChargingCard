$(document).ready(function () {   
    $(".BtnGrey").click(function () {
        $(".close").click();
    });

    var _cardMobiMenuId = 4;
    var _cardGameMenuId = 2;
    var _rechargeGameMenuId = 5;
    var _rechargeMobiMenuId = 6;
    var _payMenuId = 103;
    var _disMenuId = 105;
    var _transferSimMenuId = 106;

    if (leftMenuContent != null) {
        $.each(leftMenuContent, function () {
            
                // menu card
                var pid = this['ID'];
                var subHeader = '<ul id="sub_card_' + this['ID'] + '" class="ddsubmenustyle blackwhite">';
                var subContent = '';
                var subFooter = '</ul>';
                

                switch(this['ParentID']) {
                    case "2":
                        $('#card_game_menu_content').append($('<li></li>').html('<a href="' + this['url'] + '"><img src="' + this['img'] + '"  /> &nbsp;' + this['CategoryName'] + '</a>'));
                        break;
                    case "1":
                        $('#card_mobi_menu_content').append($('<li></li>').html('<a href="' + this['url'] + '"><img src="' + this['img'] + '"  /> &nbsp;' + this['CategoryName'] + '</a>'));
                        break;
                    case "6":
                        $('#charge_mobi_menu_content').append($('<li></li>').html('<a href="' + this['url'] + '"><img src="' + this['img'] + '"  /> &nbsp;' + this['CategoryName'] + '</a>'));
                        break;
                    case "101":
                        $('#charge_game_menu_content').append($('<li></li>').html('<a href="' + this['url'] + '"><img src="' + this['img'] + '"  /> &nbsp;' + this['CategoryName'] + '</a>'));
                        break;
                    case "8":
                        $('#transfersime_menu_content').append($('<li></li>').html('<a href="' + this['url'] + '"><img src="' + this['img'] + '"  /> &nbsp;' + this['CategoryName'] + '</a>'));
                        break;                             
                }

                
        });
    }  
});
function NumberToVND(number) {
    //return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " VND";
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "";
}

function ShowPopupErorr(message) {
    $(".TextModalTransferErr").append(message);
    $("#apopupError").click();
    
}
