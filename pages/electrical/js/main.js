$(document).ready(function(){
	var noticeMenu = $('.notice .tab_notice>ul>li');
	var thisIndex;

	noticeMenu.on('mouseenter focusin',function(){
		noticeMenu.removeClass('on');
		$(this).addClass('on');
	});

	$('.business ul li').on('mouseenter',function(){
		$('.business ul li').removeClass();
		thisIndex = $('.business ul li').index(this);
		$('.business ul li').addClass(function(index){
			if(thisIndex == index){
				return 'on';
			} else{
				return 'off';
			}
		});
	});

	$('.business ul li').on('mouseleave',function(){
		$('.business ul li').removeClass();
	});
});