$(document).ready(function(){
	
	/* PREVIEW CMND IMAGE UPLOAD */
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$(".cmnd-img[rel='" + input.getAttribute("id") + "']").attr("src", e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	
	$(".cmnd-input").change(function(){
		readURL(this);
	});
	
	$(".cmnd-img").click(function(){
		$("#" + $(this).attr("rel")).click();
	});
	/* END OF PREVIEWING CMND IMAGE UPLOAD */
	
	/* CLICK CHON NGAN HANG */
	$(".BlockBank a").click(function(){
		if ($("#infoGoldCharge").length != 0) {
			$("#infoGoldCharge .bankName").val($(this).attr("data-name"));
			$("#infoGoldCharge").show();
			$("html, body").stop().animate({scrollTop: $("#infoGoldCharge").offset().top}, 400);
		} else if ($("#napTienMatSection").length != 0){
			$("#napTienMatSection .bankName").val($(this).attr("data-name"));
			$("#napTienMatSection").show();
			$("html, body").stop().animate({scrollTop: $("#napTienMatSection").offset().top - 15}, 400);
		} else if ($("#muaTheGate").length != 0){
			$("#muaTheGate .cardCost").val($(this).attr("data-cost"));
			$("#muaTheGate").show();
			$("html, body").stop().animate({scrollTop: $("#muaTheGate").offset().top - 30}, 400);
		}
	});
	/* END CLICK CHON NGAN HANG */
	
	/* MUA NHIEU THE */
	/** XOA **/


	/* END MUA NHIEU THE */
	

	
	/* CHON/BO TAT CA TOGGLE */
	$(".table .checkAll").click(function(){
		if ($(this).prop('checked'))
			$(this).closest(".table").find(".myCheckbox").prop('checked', true);
		else
			$(this).closest(".table").find(".myCheckbox").prop('checked', false);
	});
	
	$(".table .myCheckbox").click(function(){
		var myCheckedCheckbox = $(this).closest(".table").find(".myCheckbox:checked");
		var myCheckbox = $(this).closest(".table").find(".myCheckbox");
		if (myCheckedCheckbox.length == myCheckbox.length)
			$(this).closest(".table").find(".checkAll").prop('checked', true);
		else
			$(this).closest(".table").find(".checkAll").prop('checked', false);
	});
	
	/* INIT NICE SCROL */
	if ($(".transactionBox .list").length != 0)
		$(".transactionBox .list").niceScroll({cursoropacitymax: 0.4, cursorwidth: 6});
	/* END */
	
	/* DATEPICKER */
	if ($(".datepicker").length != 0)
		$(".datepicker").datepicker({
			autoclose: true,
			todayBtn: true,
			language: "vi",
		});
	/* END OF DATEPICKER */
	
	
	/* INIT TOOLTIP
	$(".gTooltip").tooltip(); */
	/* TOOLTIP ENDS */
	
	/* SCROLL TO MOBILE CONTENT */
	$(window).load(function(){
		if ($(window).width() < 975){
			if ($(".BlockContent").length != 0){
				$("html, body").animate({scrollTop: ($(".BlockContent").offset().top - 5)}, 200);
			}
		}
	});
    /* END */




    //devide detech
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	    $('body').addClass('smartphone');
	} else {
	    $('body').addClass('pc');
	}

	//var ToggleMenu = document.querySelector("#toggle-menu-main");
	//var ToggleMenu1 = document.querySelector(".nav-login-d");
	//    ToggleMenu.onclick = function () {
	//    ToggleMenu.classList.toggle('on');
	//    ToggleMenu1.classList.toggle('on');
    //};

	$("#toggle-menu-main").click(function () {
	    // $(this).toggleClass('on');
	    var target = $(this).attr("aria-expanded");
	    if($(this).attr("aria-expanded") == 'false') {
	        //$("#" + target).attr("disabled", false);
	        $(this).addClass('on');
	    } else {
	        // $("#" + target).attr("disabled", true);
	        $(this).removeClass('on');
	    }
	 
	   // $('.nav-login-d').toggleClass("on");
	});

	
	
});