$(document).ready(function(){
	$('#header .gnb_pc>ul>li').on('mouseenter focusin',function(){
		$('#header .gnb_pc>ul>li>.tab').hide();
		$('#header .gnb_pc>ul>li').removeClass('on');
		$(this).children('.tab').show();
		$(this).addClass('on');
	});

	$('#header .gnb_pc>ul>li').on('mouseleave',function(){
		$('#header .gnb_pc>ul>li>.tab').hide();
		$('#header .gnb_pc>ul>li').removeClass('on');
	});
	
	
	$('#header .gnb_pc .tab ul li:last-child').on('focusout',function(){
		$('#header .gnb_pc>ul>li>.tab').hide();
		$('#header .gnb_pc>ul>li').removeClass('on');
	});
	  
	/*mobile menu*/
	$('#header .gnb_mobile .btn_open').on('click',function(){
		$('#header .gnb_mobile .menu_group').height($(document).height());
		$('#header .gnb_mobile .menu_group').animate(
			{right:0}, 500
		);
		$('#header .gnb_mobile .gnb_kbg').fadeIn();
	});
	$('#header .gnb_mobile .menu_group .menu>li>a').on('click',function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
			$(this).next().slideUp();
		} else {
			$('#header .gnb_mobile .menu_group .menu>li').removeClass('on');
			$('#header .gnb_mobile .menu_group .menu>li>ul').slideUp();
			$(this).next().slideDown();
			$(this).parent().addClass('on');
		}
	});
	$('#header .gnb_mobile .menu_group .btn_close').on('click',function(){
		$('#header .gnb_mobile .menu_group').animate(
			{right:'-90%'}, 500
		);
		$('#header .gnb_mobile .gnb_kbg').hide();
	});
});
