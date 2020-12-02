(function($){
$(document).ready(function(){
// READY 

    /* 프로젝트 헤더 색 변경  */
    var page = $(".page-container");
    var headerM = $(".header-menu-links a");
    var headerL = $(".header-wrap a");
    var cover = $(".cover");
    var $menuP4 = $(".menu-p4 > a"),
        $menuA4 = $(".menu-a4 > a");

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll >= page.offset().top) {
            console.log("도달");
            headerM.css({
                "color" : "#000"
            });
            $menuP4.mouseenter(function(){
                $menuP4.stop().animate({
                    color: "#ffc000"
                }, 300, "easeInOutQuad");
            });
            $menuP4.mouseleave(function(){
                $menuP4.stop().animate({
                    color: "#000000"
                }, 300, "easeInOutQuad");
            });
            $menuA4.mouseenter(function(){
                $menuA4.stop().animate({
                    color: "#ffc000"
                }, 300, "easeInOutQuad");
            });
            $menuA4.mouseleave(function(){
                $menuA4.stop().animate({
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
            $menuP4.mouseenter(function(){
                $menuP4.stop().animate({
                    color: "#ffc000"
                }, 300, "easeInOutQuad");
            });
            $menuP4.mouseleave(function(){
                $menuP4.stop().animate({
                    color: "#ffffff"
                }, 300, "easeInOutQuad");
            });
            $menuA4.mouseenter(function(){
                $menuA4.stop().animate({
                    color: "#ffc000"
                }, 300, "easeInOutQuad");
            });
            $menuA4.mouseleave(function(){
                $menuA4.stop().animate({
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
    var $black = $(".black");
    var $t1 = $(".t1");

    $t1.click(function(){
        $black.show();
    });

});
})(jQuery);