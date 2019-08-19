$(document).ready(function(){
	var ul_margin_left;
	var document_h;
		
	$('#header .gnb_pc>ul>li').on('mouseenter',function(){
		$('#header .gnb_pc>ul>li').removeClass('on');
		$(this).addClass('on');
		ul_margin_left = -($('#header .gnb_pc>ul>li.on>ul').width()/2);
		$('#header .gnb_pc>ul>li.on>ul').css('margin-left',ul_margin_left + 'px');
		$('#header .gnb_pc>ul>li.on>ul').css('left','50%');
		$(this).children('ul').show();
		$('#header .gnb_bg').show();
		$('#header').addClass('on');
	});
	
	$('#header .gnb_pc>ul>li').on('mouseleave',function(){
		$('#header .gnb_pc>ul>li').removeClass('on');
		$(this).children('ul').hide();
		$('#header .gnb_bg').hide();
		$('#header').removeClass('on');
	});
	
	$('#header .gnb_pc>ul>li').on('focusin',function(){
		$('#header .gnb_pc>ul>li').removeClass('on');
		$('#header .gnb_pc>ul>li>ul').hide();
		$(this).addClass('on');
		ul_margin_left = -($('#header .gnb_pc>ul>li.on>ul').width()/2);
		$('#header .gnb_pc>ul>li.on>ul').css('margin-left',ul_margin_left + 'px');
		$('#header .gnb_pc>ul>li.on>ul').css('left','50%');
		$(this).children('ul').show();
		$('#header .gnb_bg').show();
		$('#header').addClass('on');
	});
	
	$('#header .gnb_pc>ul>li>ul>li:last-child>ul>li:last-child').on('focusout',function(){
		$('#header .gnb_pc>ul>li').removeClass('on');
		$('#header .gnb_pc>ul>li>ul').hide();
		$('#header .gnb_bg').hide();
		$('#header').removeClass('on');
  });
	
	$('#header .gnb_mobile .btn_open').on('click',function(){
		document_h = $(document).height();
		$('#header .gnb_mobile .menu_group').animate({right:0},500);
		$('#header .gnb_mobile .menu_group').height(document_h);
		$('#header .gnb_mobile .menu_group .menu_m>li>ul').height(document_h);
		
		$('#header .gnb_kbg').fadeIn(300);
	});
	$('#header .gnb_mobile .menu_group .menu_m>li>a').on('click',function(){
		$('#header .gnb_mobile .menu_group .menu_m>li').removeClass('on');
		$(this).parent().addClass('on');
	});
	
	$('#header .gnb_mobile .menu_group .menu_m>li>ul>li>a').on('click',function(){
		if($(this).parent().hasClass('on')){
			$(this).next().slideUp();
			$(this).parent().removeClass('on');
		} else{
			$('#header .gnb_mobile .menu_group .menu_m>li>ul>li').removeClass('on');
			$('#header .gnb_mobile .menu_group .menu_m>li>ul>li>ul').slideUp();
			$(this).next().slideDown(300);
			$(this).parent().addClass('on');
		}
	});
	
	$('#header .gnb_mobile .menu_group	.bnt_close').on('click',function(){
		$('#header .gnb_mobile .menu_group').animate({right:'-90%'},500);
		$('#header .gnb_kbg').hide();
	});


});
