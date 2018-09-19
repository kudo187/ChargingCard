$(document).ready(function (e) {
    var jstemp = $("[id$=hdcontent]").val();
    var objtem = JSON.parse(jstemp);
  
    
    $(".doanhThuBg").addClass('active');
    $(".doanhThuBg").addClass('open');
    $(".doanhThuBg ul li:eq(0)").addClass('active');
    
    var obj = objtem;

    if (obj.length > 0) {     
        var count = obj.length;
        var groudid = $("#hdgr").val();

        for (var i = 0; i < count; i++) {

            if (obj[i].name != "iWin Online")
            {
                var img = "/home/distribution/images/" + obj[i].app + ".png";
                if (!imageExists(img)) {
                    img = "/home/distribution/images/" + obj[i].app + ".jpg";
                }

                var imgBox = '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 game-logo" onclick="refgg(' + groudid + ', \'' + obj[i].app + '\');"><a href="javascript:;" style="display: block"><img src="' + img + '" ></a></div>';

                var namegame = '<a href="javascript:;" style="color:#000; text-decoration: none" title="' + obj[i].name + '"><h4>' + obj[i].name + '</h4></a>';
                var rate = '<div>Chia sẻ: <span class="ColorDo bold">' + obj[i].rate + '</span> <b>(sms,card)</b></div>';
                var publisher = '<div>Nhà phát hành: <b>' + obj[i].publisher + '</b></div>';
                var infoBox = '<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 game-info">' + namegame + publisher + rate + '</div>'

                var platform = obj[i].platform.split(',');
                var countpf = platform.length;
                var imgpfformat = '<img src="/home/distribution/images/icon/nameicon-icon.png" style="width: 25px"/>';
                var imgpf = '';
                for (var j = 0; j < countpf; j++) {
                    imgpf += imgpfformat.replace('nameicon', platform[j]);
                }

                //var evenlink = '<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"><a href="javascript:;"  onclick="refgg(' + groudid + ', \'' + obj[i].app + '\');" class="kinh-doanh-ngay">Kinh doanh ngay</a></div>';
                var evenlink = '<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"><a href="' + obj[i].download + '" target="_blank"  class="kinh-doanh-ngay">Kinh doanh ngay</a></div>';
                var introlink = '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3"><a href="/huong-dan/phan-phoi-game/" class="tai-ngay">Hướng dẫn</a></div>';
                //var evenlinkdl = '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="fb-root"></div>';
                //var evenlinkdl = '';


                var evenlinkdl = '<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 fb-share-button" data-href="' + obj[i].download + '" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u="+' + obj[i].download + '+";src=sdkpreparse">Chia sẻ</a></div>';

                var rowTitle = '<div class="row">' + imgBox + infoBox + '</div>';
                var rowShortIntro = '<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">' + obj[i].des.substring(0, 80) + '...</div></div>';
                //var rowPlatform = '<div class="row game-tool"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">Hỗ trợ:' + imgpf + '</div></div>';
                var rowPlatform = '<div class="row game-tool"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">Link kinh doanh:  ' + obj[i].download + '</div></div>';
                var rowOperation = '<div class="row game-tool">' + evenlink;
                if (groudid > 0) {
                    rowOperation += evenlinkdl + '</div>';
                }
                else {
                    rowOperation += '</div>'
                }
                var boxGame = '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">' + rowTitle + rowShortIntro + rowPlatform + rowOperation + '</div>';
                $("#dvBlock").append(boxGame);

            }

            
        }
        paging(count, 6);
    }
    $("#liGuide").click(function () {
        $("#divGuide").show();
        $("#divGame").hide();
        $("#liGame").removeClass('active');
        $("#liGuide").addClass('active');
     
    });
    $("#liGame").click(function () {
        $("#divGuide").hide();
        $("#divGame").show();
        $("#liGame").addClass('active');
        $("#liGuide").removeClass('active');
    });    

    
});


function paging(numOfItems, numOfShowItems) {
    //how much items per page to show
    var show_per_page = numOfShowItems;
    //getting the amount of elements inside content div
    var number_of_items = numOfItems;
    //calculate the number of pages we are going to have
    var number_of_pages = Math.ceil(number_of_items / show_per_page);

    //set the value of our hidden input fields
    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);

    //now when we got all we need for the navigation let's make it '

    /* 
	what are we going to have in the navigation?
		- link to previous page
		- links to specific pages
		- link to next page
	*/
    var navigation_html = '<span p="1" class="nactive first"><a href="javascript:previous();">&nbsp;</a></span>';
    var current_link = 0;
    while (number_of_pages > current_link) {
        navigation_html += '<span p="2" class="inactive" longdesc="' + current_link + '"><a href="javascript:go_to_page(' + current_link + ')">' + (current_link + 1) + '</a></span>';
        current_link++;
    }
    navigation_html += '<span p="368" class="inactive last"><a href="javascript:next('+ number_of_pages + ');">&nbsp;</a></span>';

    $('#page_navigation').html(navigation_html);

    //add active_page class to the first page link
    $('#page_navigation span:eq(1)').addClass('active');

    //hide all the elements inside content div
    $('#dvBlock').children().css('display', 'none');

    //and show the first n (show_per_page) elements
    $('#dvBlock').children().slice(0, show_per_page).css('display', 'block');
}
function previous() {

    new_page = parseInt($('#current_page').val()) - 1;
    //if there is an item before the current active link run the function
    if (new_page >= 0) {
        go_to_page(new_page);
    }

}

function next(number_of_pages) {
    new_page = parseInt($('#current_page').val()) + 1;
    //if there is an item after the current active link run the function
    if (new_page < number_of_pages) {
        go_to_page(new_page);
    }

}
function go_to_page(page_num) {
    //get the number of items shown per page
    var show_per_page = parseInt($('#show_per_page').val());

    //get the element number where to start the slice from
    start_from = page_num * show_per_page;

    //get the element number where to end the slice
    end_on = start_from + show_per_page;

    //hide all children elements of content div, get specific items and show them
    $('#dvBlock').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

    /*get the page link that has longdesc attribute of the current page and add active_page class to it
	and remove that class from previously active page link*/
    $('#page_navigation .active').removeClass('active');
    $('span[longdesc=' + page_num + ']').addClass('active');

    //update the current page input field
    $('#current_page').val(page_num);
}

//end paging

function imageExists(image_url) {

    var http = new XMLHttpRequest();

    http.open('HEAD.html', image_url, false);
    http.send();

    return http.status != 404;

}
function refgg(id, app) {
    if (id == 0) {
        if (window.location.protocol != "index.html") {
            window.location.href = "../login/index.html";
        }
        else {
            window.location.href = "../login/indexbfa4.html?returnurl=/phan-phoi-game/";
        }
    }
    else {
        window.open('/phan-phoi/game-gate/' + app + '/', '_blank');
    }
}

