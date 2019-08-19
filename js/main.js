$(document).ready(function(){
    const controller = new ScrollMagic.Controller();

    const main__bg = $('.main-page__bg');
    const main__img = $('.main-page__img');
    const main__name = $('.main-page__img small');
    const main__h1 = $('.main-page__img h1');
    const nav__btn = $('.navigation__btn');
    const nav__menu = $('.navigation__menu');
    const nav__li = $('.navigation__menu ul li a');
    const item_imgs = $('.picture a')

    const mainTl= new TimelineMax();
    const menuTl = new TimelineMax({paused: true});
    const skillTl = new TimelineMax();
    const itemTl = new TimelineMax();

    mainTl.fromTo(
        main__img, 1.2, {height: '0%'}, {height:'60%', ease:Power2.easeInOut}
    ).fromTo(
        main__img, 1.2, {width: '100%'}, {width:'80%', ease:Power2.easeInOut}
    ).fromTo(
        main__bg, 1, {width:0},{width:'100%', ease:Power2.easeInOut} , '-=1'
    ).fromTo(
        main__h1, 1, {opacity:0}, {opacity:1, ease:Power2.easeInOut}
    ).fromTo(
        main__name, 1, {opacity:0}, {opacity:1, ease:Power2.easeInOut} ,'-=.5'
    );
   
    menuTl.to(
       nav__menu, 1, {width:'100%'}
    ).to(
       $('.btn-one'), .7, {rotation:45,y:8,ease:Power2.easeInOut} ,'-=1.4'
    ).to(
       $('.btn-two'), .1, {width:0},'-=1'
    ).to(
       $('.btn-three'), .7, {rotation:-45,y:-8,ease:Power2.easeInOut}, '-=1.4'
    ).staggerFrom(
       nav__li, 1.1, {x: 50, opacity:0, ease:Power2.easeOut} , .2, '-=1'
    ).reverse();
   
    $(nav__btn).on('click', function(){
       menuTl.reversed(!menuTl.reversed());
    });
   
    $(nav__li).on('click', function(e){
        menuTl.reversed(!menuTl.reversed());
        if(this.hash !== ''){
           e.preventDefault();
           const hash = this.hash;
           $('html, body').animate({
               scrollTop: $(hash).offset().top
           }, 800);
        }
    });

    skillTl.to(
        '.skill_bg', 1, {width:'100%'}
    ).fromTo(
        '#skill h2', 1, {x:-50, opacity:0}, {x:0, opacity:1, ease:Power2.easeOut}, '-=.5'
    ).staggerFrom(
        '#skill ul li', 1, {x: 100, opacity:0, ease:Power2.easeOut} , .3, '-=.5'
    );

    const sceneSK = new ScrollMagic.Scene({
        triggerElement: '#skill',
        triggerHook: 0.9,
    })
        .setTween(skillTl).on('start', function (event) {
            skillTl.time(0)
        })
        .addTo(controller);
    
    for(let i=0; i<item_imgs.length; i++){
        new ScrollMagic.Scene({
            triggerElement: item_imgs[i],
            triggerHook:.6      
        })
            .setClassToggle(item_imgs[i],'visible')
            .addTo(controller);  
    }
});