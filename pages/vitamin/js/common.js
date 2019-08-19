$(document).ready(function(){
	var window_h;
	var index;
	
	$('#header .button_wrap .menu_open').on('click',function(){
		$('#header #gnb').animate({left:0},500);
	});

	$('#header #gnb .menu_close').on('click',function(){
		$('#header #gnb').animate({left:'-80%'},500);
	});
	
	$('#header #gnb .menu li a').on('mouseenter',function(){
		index = $(this).parent().index()+1;
		$('#header #gnb').removeClass();
		$('#header #gnb .menu li a').removeClass();
		$('#header #gnb').addClass('bg'+index);
		$('#header #gnb .menu li a').not(this).addClass('off');
	});
	
	$('#header #gnb .menu li a').on('mouseleave',function(){
		$('#header #gnb').removeClass();
	});

	$('.curtain').addClass('on');
	$('.visual').addClass('on');
	menu_size();
	$(window).resize(function(){
		menu_size();
	});
	$(window).scroll(function(){
	});
	
	function menu_size(){
		window_h = $(window).height();
		$('#header #gnb').height(window_h);
		$('.visual .box').height(window_h);
	}

	
});
