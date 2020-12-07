(function($){
$(document).ready(function(){
// READY 

    /* 프로젝트 헤더 색 변경  */
    var page = $(".page-container");
    var headerM = $(".header-menu-links a");
    var headerL = $(".header-wrap a");
    var cover = $(".cover");
    var $menuP7 = $(".menu-p7 > a"),
        $menuA7 = $(".menu-a7 > a");

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll >= page.offset().top) {
            console.log("도달");
            headerM.css({
                "color" : "#000"
            });
            $menuP7.mouseenter(function(){
                $menuP7.stop().animate({
                    color: "#ffc000"
                }, 300, "easeInOutQuad");
            });
            $menuP7.mouseleave(function(){
                $menuP7.stop().animate({
                    color: "#000000"
                }, 300, "easeInOutQuad");
            });
            $menuA7.mouseenter(function(){
                $menuA7.stop().animate({
                    color: "#ffc000"
                }, 300, "easeInOutQuad");
            });
            $menuA7.mouseleave(function(){
                $menuA7.stop().animate({
                    color: "#000000"
                }, 300, "easeInOutQuad");
            });
            headerL.html("<img src='./images/logo.png' alt='logo'>");
        }
        if(wScroll >= cover.offset().top && wScroll <= page.offset().top) {
            console.log("아웃");
            headerM.css({
                "color" : "#fff"
            });
            $menuP7.mouseenter(function(){
                $menuP7.stop().animate({
                    color: "#ffc000"
                }, 300, "easeInOutQuad");
            });
            $menuP7.mouseleave(function(){
                $menuP7.stop().animate({
                    color: "#ffffff"
                }, 300, "easeInOutQuad");
            });
            $menuA7.mouseenter(function(){
                $menuA7.stop().animate({
                    color: "#ffc000"
                }, 300, "easeInOutQuad");
            });
            $menuA7.mouseleave(function(){
                $menuA7.stop().animate({
                    color: "#ffffff"
                }, 300, "easeInOutQuad");
            });
            headerL.html("<img src='./images/logo_w.png' alt='logo_w'>");
        }
    });

    /* 블렌드 */
    var $blend = $(".cover-blend > img");

    setTimeout(function(){
        $blend.stop().animate({
            opacity: 1
        }, 2000, "easeInOutQuad")
    }, 2000);

    /* 레이어 팝업 */
    var $blackA1 = $(".black.a1");
    var $blackA2 = $(".black.a2");
    var $blackA3 = $(".black.a3");
    var $blackA4 = $(".black.a4");
    var $blackA5 = $(".black.a5");
    var $blackA6 = $(".black.a6");
    var $blackA7 = $(".black.a7");
    var $blackA8 = $(".black.a8");
    var $blackA9 = $(".black.a9");
    var $blackA10 = $(".black.a10");
    var $w1 = $(".w1");
    var $w2 = $(".w2");
    var $w3 = $(".w3");
    var $w4 = $(".w4");
    var $w5 = $(".w5");
    var $w6 = $(".w6");
    var $w7 = $(".w7");
    var $w8 = $(".w8");
    var $w9 = $(".w9");
    var $w10 = $(".w10");
    var $t1 = $(".t1");
    var $t2 = $(".t2");
    var $t3 = $(".t3");
    var $t4 = $(".t4");
    var $t5 = $(".t5");
    var $t6 = $(".t6");
    var $t7 = $(".t7");
    var $t8 = $(".t8");
    var $t9 = $(".t9");
    var $t10 = $(".t10");
    var $closeBtn = $(".close-button");

    $t1.click(function(){
        $blackA1.show();
    });
    $t2.click(function(){
        $blackA2.show();
    });
    $t3.click(function(){
        $blackA3.show();
    });
    $t4.click(function(){
        $blackA4.show();
    });
    $t5.click(function(){
        $blackA5.show();
    });
    $t6.click(function(){
        $blackA6.show();
    });
    $t7.click(function(){
        $blackA7.show();
    });
    $t8.click(function(){
        $blackA8.show();
    });
    $t9.click(function(){
        $blackA9.show();
    });
    $t10.click(function(){
        $blackA10.show();
    });
    $w1.click(function(){
        $blackA1.show();
    });
    $w2.click(function(){
        $blackA2.show();
    });
    $w3.click(function(){
        $blackA3.show();
    });
    $w4.click(function(){
        $blackA4.show();
    });
    $w5.click(function(){
        $blackA5.show();
    });
    $w6.click(function(){
        $blackA6.show();
    });
    $w7.click(function(){
        $blackA7.show();
    });
    $w8.click(function(){
        $blackA8.show();
    });
    $w9.click(function(){
        $blackA9.show();
    });
    $w10.click(function(){
        $blackA10.show();
    });
    $closeBtn.click(function(){
        $blackA1.hide();
        $blackA2.hide();
        $blackA3.hide();
        $blackA4.hide();
        $blackA5.hide();
        $blackA6.hide();
        $blackA7.hide();
        $blackA8.hide();
        $blackA9.hide();
        $blackA10.hide();
    });
    $closeBtn.mouseenter(function(){
        $closeBtn.stop().animate({
            backgroundColor: "#e7cf3c"
        }, 300, "easeInOutQuad");
    });
    $closeBtn.mouseleave(function(){
        $closeBtn.stop().animate({
            backgroundColor: "#000000"
        }, 300, "easeInOutQuad");
    });

    /* 이미지 넘기기 */
    $(".prev-btn").mouseenter(function(){
        $(".prev-btn").stop().animate({
            backgroundColor: "#e7cf3c"
        }, 300, "easeInOutQuad");
    });
    $(".prev-btn").mouseleave(function(){
        $(".prev-btn").stop().animate({
            backgroundColor: "#rgba(255, 255, 255, 0.4)"
        }, 300, "easeInOutQuad");
    });
    $(".next-btn").mouseenter(function(){
        $(".next-btn").stop().animate({
            backgroundColor: "#e7cf3c"
        }, 300, "easeInOutQuad");
    });
    $(".next-btn").mouseleave(function(){
        $(".next-btn").stop().animate({
            backgroundColor: "#rgba(255, 255, 255, 0.4)"
        }, 300, "easeInOutQuad");
    });


    /* a2 청미동 */
    $(".next-btn.a2-n1").click(function(event){
        $(".next-btn.a2-n1").css({"display":"none"});
        $(".next-btn.a2-n2").css({"display":"flex"});
        $(".a2-1").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuint");
        $(".a2-2").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuint");
    });
    $(".next-btn.a2-n2").click(function(event){
        $(".next-btn.a2-n2").css({"display":"none"});
        $(".next-btn.a2-n1").css({"display":"flex"});
        $(".a2-2").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuint");
        $(".a2-1").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuint");
    });
    /* a7 내 안의 또 다른 나 */
    $(".next-btn.a7-n1").click(function(event){
        $(".next-btn.a7-n1").css({"display":"none"});
        $(".next-btn.a7-n2").css({"display":"flex"});
        $(".a7-1").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuint");
        $(".a7-2").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuint");
    });
    $(".next-btn.a7-n2").click(function(event){
        $(".next-btn.a7-n2").css({"display":"none"});
        $(".next-btn.a7-n1").css({"display":"flex"});
        $(".a7-2").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuint");
        $(".a7-1").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuint");
    });
    /* a10 9Ennergram */
    $(".next-btn.a10-n1").click(function(event){
        $(".next-btn.a10-n1").css({"display":"none"});
        $(".next-btn.a10-n2").css({"display":"flex"});
        $(".a10-1").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuint");
        $(".a10-2").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuint");
    });
    $(".next-btn.a10-n2").click(function(event){
        $(".next-btn.a10-n2").css({"display":"none"});
        $(".next-btn.a10-n1").css({"display":"flex"});
        $(".a10-2").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuint");
        $(".a10-1").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuint");
    });
    /* a8 World Champions Passport */
    $(".next-btn.a8-n1").click(function(event){
        $(".next-btn.a8-n1").css({"display":"none"});
        $(".next-btn.a8-n2").css({"display":"flex"});
        $(".a8-1").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuint");
        $(".a8-2").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuint");
    });
    $(".next-btn.a8-n2").click(function(event){
        $(".next-btn.a8-n2").css({"display":"none"});
        $(".next-btn.a8-n3").css({"display":"flex"});
        $(".a8-2").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuint");
        $(".a8-3").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuint");
    });
    $(".next-btn.a8-n3").click(function(event){
        $(".next-btn.a8-n3").css({"display":"none"});
        $(".next-btn.a8-n4").css({"display":"flex"});
        $(".a8-3").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuint");
        $(".a8-4").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuint");
    });
    $(".next-btn.a8-n4").click(function(event){
        $(".next-btn.a8-n4").css({"display":"none"});
        $(".next-btn.a8-n5").css({"display":"flex"});
        $(".a8-4").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuint");
        $(".a8-5").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuint");
    });
    $(".next-btn.a8-n5").click(function(event){
        $(".next-btn.a8-n5").css({"display":"none"});
        $(".next-btn.a8-n6").css({"display":"flex"});
        $(".a8-5").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuint");
        $(".a8-6").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuint");
    });
    $(".next-btn.a8-n6").click(function(event){
        $(".next-btn.a8-n6").css({"display":"none"});
        $(".next-btn.a8-n1").css({"display":"flex"});
        $(".a8-6").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuint");
        $(".a8-1").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuint");
    });
    


});
})(jQuery);