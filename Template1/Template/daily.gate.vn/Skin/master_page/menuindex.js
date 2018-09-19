$(document).ready(function () {   
    var _url = $(location).attr("href");
    var _url = $(location).attr("href");
    var p = location.protocol;
    var h = location.hostname;
    var fullDomain = p + "//" + h;
    var _abUrl = _url.replace(fullDomain, '');
    $(".has-sub").removeClass('open');
    $(".has-sub").removeClass('active');
    switch (_abUrl) {
        case '/phan-phoi-game/':
        case '/chinh-sach-thanh-toan-phan-phoi/':
            ActiveMenu($('.doanhThuBg'), _abUrl);           
            break;
        case '/the-game-online/the-zing-xu/':
        case '/the-game-online/the-gate/':
        case '/the-game-online/the-vcoin/':
        case '/the-game-online/the-ongame/':
        case '/the-game-online/the-garena/':
            ActiveMenu($('.theGameBg'), _abUrl); 
            break;
        case '/the-dien-thoai/the-viettel/':
        case '/the-dien-thoai/the-mobi/':
        case '/the-dien-thoai/the-vina/':
        case '/the-dien-thoai/the-vietnammobile/':
        case '/the-dien-thoai/the-gmobile/':
        //case '/the-dien-thoai/mua-nhieu-loai-the-cao/':
            ActiveMenu($('.theDienThoaiBg'), _abUrl);
            break;
        case '/the-dien-thoai/mua-nhieu-loai-the-cao/':
            ActiveMenu($('.buy-card-types'), _abUrl);
            break;
        case '/nap-dien-thoai/nap-viettel/':
        case '/nap-dien-thoai/nap-mobi/':
        case '/nap-dien-thoai/nap-vina/':
        case '/nap-dien-thoai/nap-vietnammobile/':
        case '/nap-dien-thoai/nap-gmobile/':
        case '/nap-dien-thoai/tra-truoc-nhieu-so/':
        case '/nap-dien-thoai-tra-truoc/':
            ActiveMenu($('.tienDienThoaiBg'), _abUrl);
            break;
        case '/nap-game-online/nap-gate/':
        case '/nap-game-online/nap-zingxu/':
        case '/nap-game-online/hoanh-tao-thien-ha/':
        case '/nap-game-online/avatar-star/':
        case '/nap-game-online/nap-ongate/':
        case '/nap-game-online/nap-ongame/':
        case '/nap-game-online/mong-giang-ho/':
        case '/nap-game-online/iwin/':
            ActiveMenu($('.tienGameBg'), _abUrl);
            break;
        case '/chuyen-tien-sim-da-nang/':
        case '/chuyen-tien-sim-da-nang/nap-anypay/':
        case '/chuyen-tien-sim-da-nang/nap-mload/':
        case '/chuyen-tien-sim-da-nang/nap-eload/':
        case '/chuyen-tien-sim-da-nang/nap-ezpay/':
        case '/chuyen-tien-sim-da-nang/nap-mlpay/':
            ActiveMenu($('.transfersim'), _abUrl);
            break;
            //case '/dich-vu-thanh-toan/cuoc-di-dong-tra-sau/':
        case '/dich-vu-thanh-toan/cuoc-di-dong-tra-sau/':
            ActiveMenu($('.pay-bill'), _abUrl);
            break;
        case '/dich-vu-thanh-toan/huong-dan-ket-noi-gach-the/':
            ActiveMenu($('.thanhToanBg'), _abUrl);
            break;
        case '/chinh-sach/':
            ActiveMenu($('#card_menu_content'), 'policy/index3f7b.html?cat=2');
            break;
        case '/home/policy/?cat=2':
        case '/home/policy/?cat=1':
            ActiveMenu($('#card_menu_content'), _abUrl);
            break;
        case '/home/policy/?cat=126':
        case '/home/policy/?cat=101':
        case '/home/policy/?cat=6':
            ActiveMenu($('#recharge_menu_content'), _abUrl);
            break;
        case '/home/policy/?cat=8':
        case '/home/policy/?cat=9':
            ActiveMenu($('#payment_menu_content'), _abUrl);
            break;             
        case '/thong-ke-tong-hop/':
            ActiveMenu($('.baocaotk'), _abUrl);
            break;
        case '/bao-cao/chi-tiet/':
        case '/bao-cao/chi-tiet-mua-the/':
        case '/bao-cao/chi-tiet-nap-phi/':
        case '/bao-cao/doanh-thu-dai-ly-cap-2/':
            ActiveMenu($('.baocaodt'), _abUrl);
            break;
        case '/bao-cao/phan-phoi/doanh-thu/':
        case '/bao-cao/phan-phoi/doanh-thu-cap-2/':
            ActiveMenu($('.baocaoppgame'), _abUrl);
            break;
        case '/lich-su-truy-cap/':
        case '/lich-su-nap-tien/': 
        case '/lich-su-nap-tien-gach-the-cao/':
        case '/lich-su-chuyen-tien/':
        case '/lich-su-hoan-tien/':
        case '/lich-su-sms/':
            ActiveMenu($('.historyaccept'), _abUrl);
            break;
        case '/thong-tin-tai-khoan/':      
            ActiveMenu($('.tttk'), _abUrl);
            break;
        case '/cau-hinh-mk/':
        case '/doi-mk-dang-nhap/':
        case '/doi-mk-giao-dich/':
            ActiveMenu($('.ttmk'), _abUrl);
            break;
        case '/tai-khoan-phu/':
        case '/tai-khoan-phu/them-moi-tai-khoan-phu/':        
            ActiveMenu($('.subaccount'), _abUrl);
            break;
        case '/nap-ggold/tien-mat-unc-tai-ngan-hang/':
        case '/nap-ggold/chuyen-tien-mat-atm/':
        case '/nap-ggold/chuyen-tien-internet-banking/':
        case '/nap-ggold/nap-tien-online/':
        case '/nap-ggold/tien-mat-tai-cong-ty-gate/':
        case '/nap-ggold/nap-tien-ggold-all/':
        case '/nap-ggold/nap-bang-the-cao/':
        case '/nap-ggold/nap-bang-nhieu-the-cao/':
            ActiveMenu($('.transfer'), _abUrl);
            break;
        case '/huong-dan/':
        case '/huong-dan/huong-dan-chuyen-tien-mat-atm/':
        case '/huong-dan/huong-dan-nap-tien-internet-banking/':
        case '/huong-dan/huong-dan-nap-tien-mat-unc/':
            ActiveMenu($('.help'), _abUrl);
            break;
        case '/huong-dan/phan-phoi/meo-kinh-doanh/':
        case '/huong-dan/phan-phoi/cau-hoi-thuong-gap/':
            ActiveMenu($('.doanhthu'), _abUrl);
            break;
        case '/huong-dan/tai-khoan/lay-lai-mat-khau/':
        case '/huong-dan/tai-khoan/doi-mat-khau/':
            ActiveMenu($('.taikhoan'), _abUrl);
            break;
        case '/nap-ggold/':
            ActiveMenu($('.support'), _abUrl);
            break;
        case '/nap-ggold/thong-bao-nap-tien/':
            ActiveMenu($('.alarm'), _abUrl);
            $("#TopActive").addClass("TopActive");
            break;     
    }

    //if(_abUrl.indexof()
});

function ActiveMenu(parent, url) {
    parent.addClass('active');
    parent.addClass('open');
    parent.find("[href='" + url + "']").addClass('active');
}
function ActiveMenuabs(parent, url) {
    parent.addClass('active');
    parent.addClass('open');
    parent.find("[href*='" + url + "']").addClass('active');
}