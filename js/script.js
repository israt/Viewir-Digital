var limitOpacity;
var win = $(window);
var wind;

var home_instagram;
var home_instagram_content;
var home_instagram_elt;

var picWidthMax = 375;
var marginCarouselElt = 56;

 
$(document).ready(function() {
	initHome();
	resizeStructure();

	$(window).resize(function() {
		resizeStructure();
	});

    $(function () { 
        
        $('.sub-menu').hide();
        $('.menu-butt').click(function(e) {
            if ($(this).siblings('.sub-menu').is(':visible')) {
                //$('#sub-menu').slideToggle(0);
                $(this).siblings('.sub-menu').toggle();
                e.stopPropagation();
                e.preventDefault();
                $('#overlay').css({'display' : 'none'});
            }else{
                $(this).siblings('.sub-menu').toggle();
                e.stopPropagation();
                e.preventDefault();
                $('#overlay').css({'display' : 'block'});
            }
        });
        
        $('.sub-menu ul li a').click(function() {
            $(this).parent().parent().parent('.sub-menu').toggle();
            $('#overlay').toggle();
        });
        
        $(document).click(function(e) {         
            if ($('.sub-menu').is(':visible')) {
                $('#overlay').hide();;
                $('.sub-menu').hide();
                e.preventDefault();
            }
        }); 
    });

    $(function() {
        if ($(window).width() > 1280) {
            $(window).scroll(function() {
                if($(this).scrollTop() != 0) {
                    $('#scrolltop').fadeIn();   
                } else {
                    $('#scrolltop').fadeOut();
                }
            });
     
            $('#scrolltop').click(function() {
                $('body,html').stop().animate({scrollTop:0},800);
            }); 
        }
    });

  	// resize pic
    initInstagramPicSize();

    slideInstagram();
    company_img_ele.hover(function() {
        company_imgs_content.clearQueue();
        company_imgs_content.stop();
    }, function() {
        slideInstagram();
    });

    
    var controller = new ScrollMagic();

    /* === HEADER SCROLL === */
    var headerTween = new TimelineMax();

        headerTween.add([
            TweenMax.fromTo("#header", 0.6, {opacity:1}, {opacity:0}),
            TweenMax.fromTo("header.ani", 0.5, {top:-81}, {top:0, delay:0.6})
        ]);

    var headerScene = new ScrollScene({triggerElement: ".header-trigger"})
        .setTween(headerTween)
        .addTo(controller)
        .triggerHook(0.25);

    if ($(window).width() > 1100) {
        /* === ABOUT SCROLL === */
        var aboutTextTween = new TimelineMax();

            aboutTextTween.add([
                TweenMax.fromTo("#about-dnt1 .left", 0.9, {opacity:0}, {opacity:1}),
                TweenMax.fromTo("#about-dnt1 .right", 0.9, {opacity:0}, {opacity:1})
            ]);

        var aboutTextScene = new ScrollScene({triggerElement: "#about-dnt1 .h2", reverse: false})
            .setTween(aboutTextTween)
            .addTo(controller);

        var profileTween = new TimelineMax();

            profileTween.add([
                TweenMax.fromTo("#about-dnt2 .profile.left", 0.9, {top: -100, opacity: 0}, {top: 0, opacity: 1}),
                TweenMax.fromTo("#about-dnt2 .profile.right", 0.9, {top: -100, opacity: 0}, {top: 0, opacity: 1, delay: 0.2})
            ]);

        var profileScene = new ScrollScene({triggerElement: "#about-dnt2 .profile", reverse: false})
            .setTween(profileTween)
            .addTo(controller);

        $.each( $('#services-dnt1 .services-wrapper .service'), function( index, element ) 
        {
          var
               serviceTween = TweenMax.fromTo(element, 0.7, {opacity: 0}, {opacity: 1,  ease: Back.easeIn}),
               scene = new ScrollScene({triggerElement: element, reverse: false})
                    .setTween(serviceTween)
                    .triggerHook("onEnter")
                    .addTo(controller);
        });
    }

});

function resizeStructure() {
    limitOpacity = win.height()/2.5;
}


function initInstagramPicSize() {
    var nbPic = parseInt(wind.width() / picWidthMax) + 1,
        widthPic = wind.width() / nbPic,
        heightPic = widthPic / 1.02;

    company_img_ele.width(widthPic);
    company_img_ele.height(heightPic);

    company_imgs.height(heightPic);
    company_imgs_content.width(company_img_ele.length*widthPic);
}

function slideInstagram() {
    var timeElt = 40000;
    var timeSlide = (company_img_ele.length - wind.width()/company_img_ele.width())*timeElt;
    company_imgs_content.animate({left: -(company_imgs_content.width()-wind.width())},  timeSlide, "linear", function() {
        company_imgs_content.fadeOut(function() {
            company_imgs_content.css("left", 0);
            company_imgs_content.fadeIn();
            slideInstagram();
        })
    });
}

function initHome() {
    wind = $(window);
    company_imgs = $(".company-imgs");
    company_imgs_content = $(".company-imgs-content");
    company_img_ele = $(".company-img-ele"); 
}