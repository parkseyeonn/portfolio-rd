$(document).ready(function(){
	var window_h;
	
    $('#header .gnb_pc>ul>li').on('mouseenter focusin',function(){
        $('#header .gnb_pc>ul>li').removeClass('on');
        $(this).addClass('on');
    });
    $('#header .gnb_pc>ul>li').on('mouseleave',function(){
        $('#header .gnb_pc>ul>li').removeClass('on');
	});
	
	$('#header .gnb_pc .tab ul li:last-child').on('focusout',function(){
		$('#header .gnb_pc>ul>li').removeClass('on');
	});
	
	$('#header .gnb_mobile .btn_open').on('click',function(){
		$('#header .gnb_mobile .menu_group').animate({right: 0},300);
		$('#header .gnb_mobile .gnb_kbg').fadeIn(300);
	});
	
	$('#header .gnb_mobile .menu_group>ul>li>a').on('click',function(){
		$('#header .gnb_mobile .menu_group>ul>li').removeClass('on');
		$('#header .gnb_mobile .menu_group>ul>li>ul>li').removeClass('on');
		$('#header .gnb_mobile .menu_group>ul>li>ul>li>ul').slideUp();
		$(this).parent().addClass('on');
	});
	
	$('#header .gnb_mobile .menu_group>ul>li>ul>li>a').on('click',function(){
		$('#header .gnb_mobile .menu_group>ul>li>ul>li').removeClass('on');
		$('#header .gnb_mobile .menu_group>ul>li>ul>li>ul').slideUp();
		$(this).parent().addClass('on');
		$(this).next().slideDown(500);
	});

	$('#header .gnb_mobile .menu_group .btn_close').on('click',function(){
		$('#header .gnb_mobile .menu_group').animate({right: '-90%'},300);
		$('#header .gnb_mobile .gnb_kbg').fadeOut(300);
	});
	
	menu_resize();
	$(window).resize(function(){
		menu_resize();
	});
	function menu_resize(){
		window_h = $(window).height();
		$('#header .gnb_mobile .menu_group').height(window_h);
		$('#header .gnb_mobile .menu_group>ul>li>ul').height(window_h);
	}
});
