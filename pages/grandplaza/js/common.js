$(document).ready(function(){
	/*pc menu*/
    $('#header .gnb_pc>ul>li').on('mouseenter focusin',function(){
        $('#header .gnb_pc>ul>li').removeClass('on');
        $('#header .gnb_pc>ul>li>ul').show();
        $('#header .gnb_pc .gnb_bg').show();
        $(this).addClass('on');
    });
    $('#header .gnb_pc>ul').on('mouseleave',function(){
        $('#header .gnb_pc>ul>li').removeClass('on');
        $('#header .gnb_pc>ul>li>ul').hide();
        $('#header .gnb_pc .gnb_bg').hide();
    });

    $('#header .gnb_pc>ul>li:last-child>ul>li:last-child').on('focusout',function(){
		$('#header .gnb_pc>ul>li').removeClass('on');
		$('#header .gnb_pc>ul>li>ul').hide();
		$('#header .gnb_pc .gnb_bg').hide();
    });
    /*pc header*/
    $('#header').on('mouseenter',function(){
        $('#header').addClass('on');
    });

    $('#header').on('mouseleave',function(){
        $('#header').removeClass('on');
    });
	
	/*pc header scroll*/
    var scrolling;
    scroll_check();

    $(window).scroll(function(){
        scroll_check();
    });

    function scroll_check(){
        scrolling = $(window).scrollTop();
        if(scrolling>0){
            $('#header').addClass('scroll');
        } else {
            $('#header').removeClass('scroll');
        }
    }
	/*mobile menu*/
	$('#header .gnb_mobile .btn_open').on('click',function(){
		var d_height = $(document).height();
		$('#header .gnb_mobile .menu_group').height(d_height);
		$('#header .gnb_mobile .menu_group').animate({right:0},500);
		$('#header .gnb_mobile .gnb_kbg').fadeIn();
	});
	$('#header .gnb_mobile .menu_group .btn_close').on('click',function(){
		$('#header .gnb_mobile .menu_group>ul>li>ul').slideUp();
		$('#header .gnb_mobile .menu_group>ul>li').removeClass('on');
		$('#header .gnb_mobile .menu_group').animate({right:'-70%'},500);
		$('#header .gnb_mobile .gnb_kbg').fadeOut();
	});
	$('#header .gnb_mobile .menu_group>ul>li>a').on('click',function(){
		if($(this).parent().hasClass('on')){
			$(this).next().slideUp();
			$(this).parent().removeClass('on');
		} else{
			$('#header .gnb_mobile .menu_group>ul>li>ul').slideUp();
			$('#header .gnb_mobile .menu_group>ul>li').removeClass('on');
			$(this).parent().addClass('on');
			$(this).next().slideDown();
		}
	});

});	
