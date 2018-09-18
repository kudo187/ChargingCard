$(function () {
    loadDatepicker(".jdate");
    loadTable();

    var dpicker = 0;
    function loadDatepicker(element) {
        $(element).datepicker({
            showOn: 'both'
            , buttonImage: '/Skin/images/icons/date.gif'
            , buttonImageOnly: true
            , dateFormat: 'dd/mm/yy'
            , clearText: ''
            , firstDay: 1
            , dayNames: ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy']
            , dayNamesMin: ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy']
            , dayNamesShort: ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy']
            , monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
            , monthNamesShort: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
            , changeMonth: true
            , changeYear: true
            , yearRange: '1950:2120'
            , gotoCurrent: true
            , onSelect: function (dateText, inst) {

            }
            , beforeShow: function (input, inst) {
                dpicker = 0;
            }
            , onChangeMonthYear: function (year, month, inst) {
                dpicker++;
                var currdate = new Date(year, month - 1, inst.selectedDay);
                $('#' + inst.id).datepicker('setDate', currdate);

            }
        });
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
                    for (i = 1; i <= substr.length; i++)
                        $(".table tr[class='total'] td:eq(" + substr[i] + ")").html("");
                }
            }
        }

        $(".table tr[class!='total'][class!='header']:odd").addClass("split");

        $(".decimal").keyup(function () {
            $(this).val(FormatNumeric($(this).val().replace(/,/g, '')));
        });

        // xu ly enter button default
        $(".formdata").each(function (index) {
            $(this).addClass("formdata-evt" + index);
            $('button[type=submit].default, input.default', $(this)).addClass("default-evt" + index);
        });
        $(".formdata").each(function (index) {
            var frm = "formdata-evt" + index;
            var btn = "default-evt" + index;
            var obj = $(this);
            $("." + frm + " input,." + frm + " select").bind("keydown", function (event) {
                var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
                if (keycode == 13) { // keycode for enter key
                    //alert(btn);
                    //return false;
                    // force the 'Enter Key' to implicitly click the Update button
                    $('button[type=submit].' + btn + ', input.' + btn).click();
                    return false;
                } else {
                    return true;
                }
            });
        });

    }
});
// thaidx
jQuery.fn.ForceNumericOnly =
function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            if (e.shiftKey || e.ctrlKey || e.altKey) { // if shift, ctrl or alt keys held down
                e.preventDefault();         // Prevent character input
            }
            else {
                var key = e.charCode || e.keyCode || 0;
                return (
                key == 8 ||                     // backspace
                key == 9 ||                     // tab
                key == 46 ||                    // delete        
                (key >= 35 && key <= 40) ||     // arrow keys/home/end
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));      // number on keypad
            }
        });
    });
};

$.extend({
    getUrlVars: function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    }
});

FormatNumeric = function (val) { val += ''; x = val.split('.'); x1 = x[0]; x2 = x.length > 1 ? ',' + x[1] : ''; var rgx = /(\d+)(\d{3})/; while (rgx.test(x1)) { x1 = x1.replace(rgx, '$1' + ',' + '$2'); } return x1 + x2; }
function ReadNumber(value, targetId) {
    while (value.indexOf(".") > -1)
        value = value.replace(".", "");
    numberString = '';
    try {
        var so = new Array('không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín');
        var hang = new Array('', 'nghìn', 'triệu', 'tỉ');
        var IaN = true;
        var i, j, donvi, chuc, tram, str;

        str = '';
        if (value == '0') { numberString = 'không'; }
        else {
            i = value.length;
            if (i == 0) { str = ''; }
            else {
                j = 0;
                while (i > 0) {
                    donvi = parseInt(value.substring(i - 1, i));
                    if (isNaN(donvi)) {
                        value = value.replace(value.substring(i - 1, i), '');
                        IaN = false;
                    }

                    i = i - 1;
                    if (i > 0) {
                        chuc = parseInt(value.substring(i - 1, i));
                        if (isNaN(chuc)) {
                            value = value.replace(value.substring(i - 1, i), '');
                            IaN = false;
                        }
                    }
                    else {
                        chuc = -1;
                    }
                    i = i - 1;
                    if (i > 0) {
                        tram = parseInt(value.substring(i - 1, i));
                        if (isNaN(tram)) {
                            value = value.replace(value.substring(i - 1, i), '');
                            IaN = false;
                        }
                    }
                    else {
                        tram = -1;
                    }
                    i = i - 1;
                    if (donvi > 0 | chuc > 0 | tram > 0 | j == 3) {
                        str = hang[j] + ' ' + str;
                    }
                    j = j + 1;
                    if (j > 3) {
                        j = 1;
                    }
                    if (donvi == 1 & chuc > 1) {
                        str = 'mốt' + ' ' + str;
                    }
                    else {
                        if (donvi == 5 & chuc > 0) {
                            str = 'lăm' + ' ' + str;
                        }
                        else if (donvi > 0) {
                            str = so[donvi] + ' ' + str;
                        }
                    }
                    if (chuc < 0) {
                        break;
                    }
                    else {
                        if (chuc == 0 & donvi > 0) {
                            str = 'lẻ' + ' ' + str;
                        }
                        else if (chuc == 1) {
                            str = 'mười' + ' ' + str;
                        }
                        else if (chuc > 1) {
                            str = so[chuc] + ' ' + 'mươi' + ' ' + str;
                        }
                    }
                    if (tram < 0) {
                        break;
                    }
                    else {
                        if (tram > 0 | chuc > 0 | donvi > 0) {
                            str = so[tram] + ' ' + 'trăm' + ' ' + str;
                        }
                    }
                }
            }

            if (IaN) {
                numberString = str;
            }
        } //end if input equal 0
    }
    catch (Error) {
        numberString = "Không là số";
    }
    numberString = numberString.replace(numberString.substring(0, 1), numberString.substring(0, 1).toUpperCase());
    target = document.getElementById(targetId);
    if (target)
        target.innerHTML = numberString + " đồng";
}