$(document).ready(function(){
    var window_h = $(window).height();
	var window_w = $(window).width();
	var scrollValue;
    
	resize_ctn();
    $(window).resize(function(){
		resize_ctn();
    });
    $('.visual .navigation ul li').on('mouseenter',function(){
        $(this).addClass('on');
    });
    $('.visual .navigation ul li').on('mouseleave',function(){
        $(this).removeClass('on');
    });
	
    $('.restaurant .board li button').on('click',function(){
        $('.restaurant .board li').removeClass('on');
        $(this).parent().addClass('on');
    });

	function resize_ctn(){
		window_h = $(window).height();
		window_w = $(window).width();
		if(window_w >1100){
			$('.visual .popup ul li .visual_img').height(window_h);
			$('.product .container ul li a').on('click',function(){
				$(this).parent().addClass('active');
				$('.product .content_bg').addClass('on');
				$('.product .ctn_close').addClass('on');
				return false;
			});
			$('.product .ctn_close').on('click',function(){
				$('.product .container ul li').removeClass('active');
				$('.product .content_bg').removeClass('on');
				$('.product .ctn_close').removeClass('on');
			});
		} else {
			$('.visual .popup ul li .visual_img').height(400);
			$('.product .container ul li a').on('click',function(){
				$(this).next().show();
			});	
			$('.product .container ul li .content').on('click',function(){
				$(this).hide();
			});	
		} 
		
	}
});