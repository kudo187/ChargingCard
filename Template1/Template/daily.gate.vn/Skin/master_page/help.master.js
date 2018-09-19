$(document).ready(function () {
    $(window).load(function () {       
        var _url = $(location).attr("href");
        var _url = $(location).attr("href");
        var p = location.protocol;
        var h = location.hostname;
        var fullDomain = p + "//" + h;
        if (_url.indexOf('../huong-dan-chuyen-tien-mat-atm/index.html') != -1) {
            ActiveMenu($('.help'), '../huong-dan-chuyen-tien-mat-atm/index.html');
        }
        if (_url.indexOf('../huong-dan-nap-tien-internet-banking/index.html') != -1) {
            ActiveMenu($('.help'), '../huong-dan-nap-tien-internet-banking/index.html');
        }
        if (_url.indexOf('index.html') != -1) {
            ActiveMenu($('.help'), 'index.html');
        }
        if (_url.indexOf('../phan-phoi/meo-kinh-doanh/index.html') != -1) {
            ActiveMenu($('.doanhthu'), '../phan-phoi/meo-kinh-doanh/index.html');
        }
        if (_url.indexOf('../phan-phoi/cau-hoi-thuong-gap/index.html') != -1) {
            ActiveMenu($('.doanhthu'), '../phan-phoi/cau-hoi-thuong-gap/index.html');
        }
        if (_url.indexOf('../tai-khoan/lay-lai-mat-khau/index.html') != -1) {
            ActiveMenu($('.taikhoan'), '../tai-khoan/lay-lai-mat-khau/index.html');
        }
        if (_url.indexOf('../tai-khoan/doi-mat-khau/index.html') != -1) {
            ActiveMenu($('.taikhoan'), '../tai-khoan/doi-mat-khau/index.html');
        }
        
    });
});


function NumberVND(number) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}