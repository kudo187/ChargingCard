$(document).ready(function () {

    $(window).load(function () {
        /* SLIDESHOW */
        var Indexcarousel = $("#adsSlider");
        Indexcarousel.carouFredSel({
            width: "100%",
            height: "auto",
            responsive: true,
            pagination: {
                container: "#adsSliderWrapper .paginator",
                anchorBuilder: function (nr, item) {
                    return '<a class="navItem ib"></a>';
                }
            },
            auto: {
                timeoutDuration: 2000,
                delay: 1000
            },
            scroll: {
                pauseOnHover: true,
                items: 1,
                duration: 350,
                fx: 'scroll'
            },
            swipe: {
                onTouch: true,
                onMouse: false
            },
            items: {
                visible: {
                    min: 1,
                    max: 1
                }
            },
            onCreate: function () {
                $(window).on('resize', function () {
                    Indexcarousel.parent().add(Indexcarousel).height(Indexcarousel.children().first().height());
                }).trigger('resize');
            }
        });
        $("#adsSlider li").css("display", "block");
        /* END OF SLIDESHOW */

    });
});