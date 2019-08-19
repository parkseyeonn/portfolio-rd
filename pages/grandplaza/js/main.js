$(document).ready(function(){
	/*visual - reserve -calendar*/
	var status_calendar;
	$('.visual .reserv .check').on('click',function(){
		status_calendar = $(this).find(".pop_calendar").hasClass("hasDatepicker");
		if(status_calendar == true){
			$(this).find(".pop_calendar").empty();
			$(this).find(".pop_calendar").removeClass("hasDatepicker");
		}else{
			$(this).find(".pop_calendar").datepicker({
				dateFormat: 'yy.mm.dd',
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				dayNamesMin: ['일','월','화','수','목','금','토'] ,
				dayNamesMin: ['일','월','화','수','목','금','토'],
				showMonthAfterYear: true,
				yearSuffix: ''
			});
			if($(window).width() <= 640){
				$('.visual .reserv .check .pop_calendar').width($(window).width()*0.9);
			}
		}
    });
	/*event*/
	$('.event .popup ul li a').on('mouseenter',function(){
		$('.event .event_bg').addClass('on');
	});
	$('.event .popup ul li a').on('mouseleave',function(){
		$('.event .event_bg').removeClass('on');
	});
	/*tour*/
	$('.tour ul li a').on('mouseenter',function(){
		$(this).parent().addClass('on');
	});
	$('.tour ul li a').on('mouseleave',function(){
		$('.tour ul li').removeClass('on');
	});
	/*animate*/
	var scrolling;
	$(window).load(function(){
		scroll_check();
	});
	
	$(window).scroll(function(){
		scroll_check();
	});
	
	function scroll_check(){
		scrolling = $(window).scrollTop();
		
		if(scrolling >= 0){
			$('.visual').addClass('on');
		}
	}
});
