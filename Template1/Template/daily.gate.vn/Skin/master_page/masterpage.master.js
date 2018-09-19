
/// <reference path="policy.master.js" />
$(document).ready(function () {
    
    //var _url = $(location).attr("href");
    //if (_url.indexOf("/home/") != -1 || _url.indexOf("/thong-ke-tong-hop/") != -1 || _url.indexOf("/gioi-thieu/") != -1) {
    //    $("#topNav").find("ul:eq(0)").find("li").each(function () {
    //        $(this).find("a").removeClass("TopActive");
    //    });
    //    $("#pageInfo").addClass("TopActive");
    //}
    //if (_url.indexOf("/home/map/") != -1 || _url.indexOf("/dia-diem-giao-dich/") != -1) {
    //    $("#topNav").find("ul:eq(0)").find("li").each(function () {
    //        $(this).find("a").removeClass("TopActive");
    //    });
    //    $("#pageLocation").addClass("TopActive");
    //}
    //if (_url.indexOf("/home/policy/") != -1 || _url.indexOf("/chinh-sach/") != -1) {
    //    $("#topNav").find("ul:eq(0)").find("li").each(function () {
    //        $(this).find("a").removeClass("TopActive");
    //    });
    //    $("#pagePolicy").addClass("TopActive");
    //}
    //if (_url.indexOf("/home/guid/") != -1 || _url.indexOf("/huong-dan/") != -1) {
    //    $("#topNav").find("ul:eq(0)").find("li").each(function () {
    //        $(this).find("a").removeClass("TopActive");
    //    });
    //    $("#pageGuid").addClass("TopActive");
    //}

    var _url = $(location).attr("href");
    //if (_url.indexOf("/home/") != -1 || _url.indexOf("/thong-ke-tong-hop/") != -1 || _url.indexOf("/gioi-thieu/") != -1) {
    if (_url.indexOf("index.html") != -1 || _url.indexOf("../thong-ke-tong-hop/index.html") != -1) {
        $("#topNav").find("ul:eq(0)").find("li").each(function () {
            $(this).find("a").removeClass("active");
        }); 
        //$("#pageInfo").addClass("active");
        $("#pageggold").addClass("active");
    }
    if (_url.indexOf("../gioi-thieu/index.html") != -1) {
        $("#topNav").find("ul:eq(0)").find("li").each(function () {
            $(this).find("a").removeClass("active");
        });
        $("#pageAbout").addClass("active");
    }
    if (_url.indexOf("../nap-ggold/thong-bao-nap-tien/index.html") != -1) {
        $("#topNav").find("ul:eq(0)").find("li").each(function () {
            $(this).find("a").removeClass("active");
        });
        $("#pageggold").addClass("active");
    }
    if (_url.indexOf("../phan-phoi-game/index.html") != -1) {
        $("#topNav").find("ul:eq(0)").find("li").each(function () {
            $(this).find("a").removeClass("active");
        });
        $("#pagedoanhthu").addClass("active");
    }
    if (_url.indexOf("map/index.html") != -1 || _url.indexOf("../dia-diem-giao-dich/index.html") != -1) {
        $("#topNav").find("ul:eq(0)").find("li").each(function () {
            $(this).find("a").removeClass("active");
        });
        $("#pageLocation").addClass("active");
    }
    if (_url.indexOf("policy/index.html") != -1 || _url.indexOf("../chinh-sach/index.html") != -1) {
        $("#topNav").find("ul:eq(0)").find("li").each(function () {
            $(this).find("a").removeClass("active");
        });
        $("#pagePolicy").addClass("active");
    }
    if (_url.indexOf("guid/index.html") != -1 || _url.indexOf("../huong-dan/index.html") != -1) {
        $("#topNav").find("ul:eq(0)").find("li").each(function () {
            $(this).find("a").removeClass("active");
        });
        $("#pageGuid").addClass("active");
    }
    $(".isNumber").ForceNumericOnly();
    $(".BlockBank ul li a").click(function () {
        $(".BlockBank ul li a").each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });
    $('#fixedtotop').hide();
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {       
        if ($(this).scrollTop() > 100) {
            $('#fixedtotop').fadeIn();
        } else {
            $('#fixedtotop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#fixedtotop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

   
  
});

$(window).load(function () {
    loadTable();
    
});
function ShowDialog(massage) {
    $("#myPupop .modal-body").append(massage);
}
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function loadTable() {
    if (!$(".table tr:first").hasClass("header")) {
        $(".table tr:first").addClass("header");
    }

    if ($(".table").hasClass("summary"))
        $(".table tr:last").addClass("total");
    if ($(".table tr").length >= 2) {
        $(".table tr[class!='total']:last").addClass("last");
        var attr = $(".table").attr('summary');
        if (typeof attr !== 'undefined' && attr !== false) {
            var substr = $(".table").attr("summary").split(':')
            if (substr.length > 0) {
                //alert(substr[0]);
                $(".table tr[class='total'] td:eq(" + substr[0] + ")").text("Tổng cộng"); 
                $(".table tr[class='total']").css("color", "red");
                $(".table tr[class='total']").css("font-weight", "bold");
                for (i = 1; i <= substr.length; i++)
                    $(".table tr[class='total'] td:eq(" + substr[i] + ")").html("");
            }
        }
    }
}
function ShowGoTo(message, url) {    
    $(function () {
        var dialogId = 'my-dialog-1';
        var dialog = new BootstrapDialog({           
            id: dialogId,
            title: 'THÔNG BÁO',
            message: message,
            closable: true,
            closeByBackdrop: false,
            closeByKeyboard: false,
            buttons: [{								
                label: 'Đồng ý',
                cssClass: 'btn BtnGrey',
                action: function(dialogItself){
                    window.location.href = url;
                }								
								 
            }]
        });
        dialog.open();				
        dialog.getModalHeader().css('background-color', '#f3f3f3');				
    });   
}
function ShowError(message) {
    $(function () {
        var dialogId = 'my-dialog-1';
        var dialog = new BootstrapDialog({           
            id: dialogId,
            title: 'THÔNG BÁO',
            message: message,
            closable: true,
            closeByBackdrop: false,
            closeByKeyboard: false,
            buttons: [{
                label: 'Đồng ý',
                cssClass: 'btn BtnGrey',
                action: function (dialogItself) {
                    dialogItself.close();
                }

            }]
        });
        dialog.open();
        dialog.getModalHeader().css('background-color', '#f3f3f3');

    });
}
function ShowGoToUrlByBank(message, url, urlblank) {
    $(function () {
        var dialogId = 'my-dialog-1';
        var dialog = new BootstrapDialog({
            id: dialogId,
            title: 'THÔNG BÁO',
            message: message,
            closable: true,
            closeByBackdrop: false,
            closeByKeyboard: false,
            buttons: [{
                label: 'Đồng ý',
                cssClass: 'btn BtnGrey',
                action: function (dialogItself) {
                    window.location.href = url;
                    window.open(urlblank, '_blank');
                }

            }]
        });
        dialog.open();
        dialog.getModalHeader().css('background-color', '#f3f3f3');
    });
}

function ClosShow() {
    $('.close').click();
}


