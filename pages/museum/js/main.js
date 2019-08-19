$(document).ready(function(){
	var tit_bg_w;
	var scrolling;
    
    tit_bg_cal($('.program .tit h2'));
	tit_bg_cal($('.check .box .notice .title h3'));
	tit_bg_cal($('.check .box .calendar1 .title h3'));
	$(window).resize(function(){
		tit_bg_cal($('.program .tit h2'));
		tit_bg_cal($('.check .box .notice .title h3'));
		tit_bg_cal($('.check .box .calendar1 .title h3'));

	});

	function tit_bg_cal(center){
		tit_bg_w = center.width()*0.9;
		center.prev().width(tit_bg_w);
		tit_bg_w = -(parseInt(tit_bg_w/2))+15;
		center.prev().css('margin-left',tit_bg_w);
	}
	
	/*calendar*/
	$('.check .box .calendar2').datepicker({
		dateFormat: 'yy.mm.dd',
		monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
		dayNamesMin: ['일','월','화','수','목','금','토'] ,
		dayNamesMin: ['일','월','화','수','목','금','토'],
		showMonthAfterYear: true,
		yearSuffix: '',
		todayHighlight: true,
		activeHighlight: true,
	});

	scrollAnimation();
	$(window).scroll(function(){
		scrollAnimation();
	});

	function scrollAnimation(){
		scrolling = $(window).scrollTop();
		if(scrolling> 1000){
			$('.program .list ul li').addClass('on');
		}
	}

	$('.check .box .calendar3 ul li a').on('mouseenter',function(){
		$('.check .box .calendar3').addClass('on');
	});

	$('.check .box .calendar3 ul li a').on('mouseleave',function(){
		$('.check .box .calendar3').removeClass('on');
	});
});