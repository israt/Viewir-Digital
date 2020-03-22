$(document).ready(function() {

    $(window).scroll(function(){
        var st = $(this).scrollTop();
        var limitTop = $("#dnt-part1").height();
        if($("#dnt-part1").length !== 0) {

            if (st <= limitOpacity) {
                $('#dnt-part1-content').css({ 'opacity' : (1 - st/limitOpacity) });
            }       
        }

    });

    $(function() {
        $( ".tabs" ).tabs();
    });

    
    var controller = new ScrollMagic();

    if ($(window).width() > 1100) {
        var homeTabTween = new TimelineMax();

        homeTabTween.add([
            TweenMax.fromTo("#dnt-part2 .tabs .left", 0.9, {opacity:0}, {opacity:1}),
            TweenMax.fromTo("#dnt-part2 .tabs .right", 0.9, {opacity:0}, {opacity:1, delay: 0.2})
        ]);

        var homeTabScene = new ScrollScene({triggerElement: "#dnt-part2 h3", reverse: false})
            .setTween(homeTabTween)
            .addTo(controller);

        var homeCardsTween = new TimelineMax();
        var homeCardsTween = TweenMax.staggerFromTo(".item-link", 0.4, {'margin-top':'-20px', opacity: 0}, {'margin-top':'0px', opacity: 1,  ease: Back.easeIn}, 0.1);

        var homeCardsScene = new ScrollScene({triggerElement: "#dnt-part3", reverse: false})
             .setTween(homeCardsTween)
             .addTo(controller);

        var homeWorkTween = new TimelineMax();

        homeWorkTween.add([
            TweenMax.fromTo("#dnt-part4 .grid figure.left", 0.9, {opacity: 0}, {opacity: 1}),
            TweenMax.fromTo("#dnt-part4 .grid figure.right", 0.9, {opacity: 0}, {opacity: 1, delay: 0.2})
        ]);

        var homeWorkScene = new ScrollScene({triggerElement: "#dnt-part4",  reverse: false})
            .setTween(homeWorkTween)
            .addTo(controller);

        var homeTestimTween = new TimelineMax();

        homeTestimTween.add([
            TweenMax.fromTo("#dnt-part5 .container", 2, {opacity:0}, {opacity:1})
        ]);

        var homeTestimScene = new ScrollScene({triggerElement: "#dnt-part5", reverse: false})
            .setTween(homeTestimTween)
            .addTo(controller);

        var homeClientTween = new TimelineMax();

        homeClientTween.add([
            TweenMax.fromTo("#dnt-part6 .container", 0.9, {opacity: 0}, {opacity: 1})
        ]);

        var homeClientScene = new ScrollScene({triggerElement: "#dnt-part6",  reverse: false})
            .setTween(homeClientTween)
            .addTo(controller);
    }

});