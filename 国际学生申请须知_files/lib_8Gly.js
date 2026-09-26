$(function () {
    function tabs(tabTit, on, tabCon) {
        $(tabTit).children().hover(function () {
            $(this).addClass(on).siblings().removeClass(on);
            var index = $(tabTit).children().index(this);
            $(tabCon).children().eq(index).show().siblings().hide();
        });
    };
    tabs(".tab-hd", "active", ".tab-bd");
    tabs(".tab-hd2", "active", ".tab-bd2");
});
$('.menuBtn').append('<b></b><b></b><b></b>');
$('.menuBtn').click(function(event) {
    $(this).toggleClass('open');
    $('.nav').stop().slideToggle();
});
var _winw = $(window).width();
    $('.nav .v1').click(function() {
        if ($(this).siblings('.sub').length) {
            $(this).parents('li').siblings('li').find('.sub').stop().slideUp();
            $(this).siblings('.sub').stop().slideToggle();
            return false;
        }
    });
$(".navp i").each(function() {
    $(this).click(function() {
        $(this).parent().parent().siblings().find('.subNavm').slideUp();
        $(this).parent().parent().siblings().removeClass('on');
        $(this).parent().parent().toggleClass('on');
        $(this).parent().next().slideToggle();
    })
})
$(".menu-btn").click(function() {
    $('html').toggleClass('drawerMenu-open');
    $('.mobNav').slideToggle();
    $(".sermob").fadeOut()
})
$(function() {
    $('.toSearch2').click(function(e) {
        console.log(1);
        $(".sermob").fadeIn();
        $('html').removeClass('drawerMenu-open');
        $('.mobNav').slideUp();
    });
    $('.sermob .close').click(function() {
        $(".sermob").fadeOut()
    })
})
$(function() {
	 var windowWidth = $(window).width();
    if(windowWidth <= 414){
    }
	if(windowWidth <= 1024){
			(function(){
	$('.side_accord li').mouseover(function(){
		if(!$(this).hasClass('curr')){
			$('.side_accord li').removeClass('curr');
			$(this).addClass('curr');
			$('.side_accord li').each(function(index){
				if($(this).hasClass('curr')){
					$('.bg').fadeOut(300);
					$('.bg:eq(' + index + ')').fadeIn(500);
				}
			});
			$('.curr').stop().animate({
				width: 510
			}, 500, 'linear');
			$('.side_accord li').not('.curr').stop().animate({
				width: 170
			}, 500, 'linear');
		}
	});
})()
    }
	if(windowWidth <= 1366){
		(function(){
	$('.side_accord li').mouseover(function(){
		if(!$(this).hasClass('curr')){
			$('.side_accord li').removeClass('curr');
			$(this).addClass('curr');
			$('.side_accord li').each(function(index){
				if($(this).hasClass('curr')){
					$('.bg').fadeOut(300);
					$('.bg:eq(' + index + ')').fadeIn(500);
				}
			});
			$('.curr').stop().animate({
				width: 600
			}, 500, 'linear');
			$('.side_accord li').not('.curr').stop().animate({
				width: 200
			}, 500, 'linear');
		}
	});
})()
    }
if(windowWidth <= 1920){
		(function(){
	$('.side_accord li').mouseover(function(){
		if(!$(this).hasClass('curr')){
			$('.side_accord li').removeClass('curr');
			$(this).addClass('curr');
			$('.side_accord li').each(function(index){
				if($(this).hasClass('curr')){
					$('.bg').fadeOut(300);
					$('.bg:eq(' + index + ')').fadeIn(500);
				}
			});
			$('.curr').stop().animate({
				width: 824
			}, 500, 'linear');
			$('.side_accord li').not('.curr').stop().animate({
				width: 284
			}, 500, 'linear');
		}
	});
})()
    }
if(windowWidth > 1920){
		(function(){
	$('.side_accord li').mouseover(function(){
		if(!$(this).hasClass('curr')){
			$('.side_accord li').removeClass('curr');
			$(this).addClass('curr');
			$('.side_accord li').each(function(index){
				if($(this).hasClass('curr')){
					$('.bg').fadeOut(300);
					$('.bg:eq(' + index + ')').fadeIn(500);
				}
			});
			$('.curr').stop().animate({
				width: 824
			}, 500, 'linear');
			$('.side_accord li').not('.curr').stop().animate({
				width: 284
			}, 500, 'linear');
		}
	});
})()}
})
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: -100,
            mobile: false,
            live: true
        });
        wow.init();
    };
function myNav() {
    $('.nav li').bind('mouseenter', function () {
        $(this).addClass('on');
    });
    $('.nav li').bind('mouseleave', function () {
        $(this).removeClass('on');
    });
}