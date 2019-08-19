$(document).ready(function(){
    var window_h = $(window).height();
	var scrollValue;
    $('#header .menu_btn').on('click',function(){
        $(this).toggleClass('open');
        if($(this).hasClass('open')){
            $('#header .gnb').animate({right:0},500,'swing');
        } else{
            $('#header .gnb').animate({right:'-80%'},500);
        }
    });
	
	$('#header .gnb ul li a').on('click',function(){
		$('#header .gnb ul li').removeClass('on');
		$(this).parent().addClass('on');
	});

	resize_ctn();
    $(window).resize(function(){
		resize_ctn();
    });
	header_scroll();
	$(window).scroll(function(){
		header_scroll();
	});
   
	function header_scroll(){
		scrollValue = $(window).scrollTop();
		if(scrollValue > 0){
			$('#header').addClass('scroll');
		} else {
			$('#header').removeClass('scroll');
		}
	}
	function resize_ctn(){
		window_h = $(window).height();
		$('#header .gnb').height(window_h);
	}
});
