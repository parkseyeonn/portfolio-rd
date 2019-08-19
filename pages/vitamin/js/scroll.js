$(document).ready(function(){
	var move = 400; /* 스크롤을 할때 추가로 스크롤 될 값 (즉, 값이 크면 더 많이 스크롤 됨) */
	var time = 1000;
	var obj_name = $(".layout");
	var obj_h = obj_name.height();
	var window_h = $(window).height();
	var obj_top = 0;
	var scroll_value;
	var scrolling = $(window).scrollTop();
	$(window).resize(function(){
		window_h = $(window).height();
	});
	$(window).load(function(){
		obj_h = obj_name.height();
	});
	$("html, body").on("mousewheel DOMMouseScroll", function scroll_check(e){
		var E = e.originalEvent;
		var delta = 0;
		if (E.detail) {
			delta = E.detail * -40;
		}else{
			delta = E.wheelDelta;
		}
		$("html, body").off("mousewheel DOMMouseScroll");
		$("html, body").on("mousewheel DOMMouseScroll", function(e){
			e.preventDefault();
			e.stopPropagation();
			return false;
		},function(){passive: false});
		
		if(delta > 0){//위로 스크롤
			obj_top = obj_top + move;
		}else{//아래로 스크롤
			obj_top = obj_top - move;
		}
		if(obj_top>0){
			obj_top = 0;
		}
		if(obj_top<-(obj_h-window_h)){
			obj_top = -(obj_h-window_h);
		}
		obj_name.animate({
			top : obj_top
		}, time, "easeOutCirc", function(){$("html, body").off();$("html, body").on("mousewheel DOMMouseScroll", scroll_check); $("html, body").stop();});
		on_class();
		
	});
	
	$('#header #gnb .menu li a').on('click',function(){
		var menu_index = $(this).parent().index();
		if(menu_index == 0){
			obj_top = 0;
		}else if(menu_index == 1){
			obj_top = -800;
		}else{
			obj_top = -5800;
		}
		obj_name.animate({
			top : obj_top
		}, 500);
		$('#header #gnb').animate({left:'-80%'},500);
		on_class();
	});
	
	$('#footer .top').on('click',function(){
		obj_top=0;
		obj_name.animate({
			top : obj_top
		}, 500);
		on_class_delete();
	});

	function on_class(){
		if(obj_top < -400 && obj_top >-1800){
			$('.product .pro1').addClass('on');
			scroll_moving($('.product .pro1'));
		}
		if(obj_top < -1600 && obj_top >-2800){
			$('.product .pro2').addClass('on');
			scroll_moving($('.product .pro2'));
		}
		if(obj_top < -2800 && obj_top >-4200){
			$('.product .pro3').addClass('on');
			scroll_moving($('.product .pro3'));
		}
		if(obj_top < -4000 && obj_top >-5500){
			$('.product .pro4').addClass('on');
			scroll_moving($('.product .pro4'));
		}
		if(obj_top < -5000){
			$('.brand img').addClass('on');
		}
		if(obj_top < -5400){
			$('.brand').addClass('on');
		}

	}
	function on_class_delete(){
		$('.product .pro1').removeClass('on');
		$('.product .pro2').removeClass('on');
		$('.product .pro3').removeClass('on');
		$('.product .pro4').removeClass('on');
		$('.brand img').removeClass('on');
		$('.brand').removeClass('on');
	}

	function scroll_moving(pro){
		if(pro.index()<6){
			scroll_value = -(obj_top*0.5);
		} else{
			scroll_value = (obj_top*0.5);
		}
		pro.find('strong').css('transform','translate('+scroll_value+'px, 0)');
	}
	
	
});
