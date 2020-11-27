(function($){
$(document).ready(function(){
// READY 

    /* 프로젝트 헤더 색 변경  */
    var page = $(".page-container");
    var headerM = $(".header-menu-links a");
    var headerL = $(".header-wrap a");
    var cover = $(".cover");
    var $menuP5 = $(".menu-p5 > a"),
        $menuA5 = $(".menu-a5 > a");

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll >= page.offset().top) {
            console.log("도달");
            headerM.css({
                "color" : "#000"
            });
            $menuP5.mouseenter(function(){
                $menuP5.stop().animate({
                    color: "#277043"
                }, 300, "easeInOutQuad");
            });
            $menuP5.mouseleave(function(){
                $menuP5.stop().animate({
                    color: "#000000"
                }, 300, "easeInOutQuad");
            });
            $menuA5.mouseenter(function(){
                $menuA5.stop().animate({
                    color: "#277043"
                }, 300, "easeInOutQuad");
            });
            $menuA5.mouseleave(function(){
                $menuA5.stop().animate({
                    color: "#000000"
                }, 300, "easeInOutQuad");
            });
        }
        if(wScroll >= cover.offset().top && wScroll <= page.offset().top) {
            console.log("아웃");
            headerM.css({
                "color" : "#277043"
            });
            $menuP5.mouseenter(function(){
                $menuP5.stop().animate({
                    color: "#ffffff"
                }, 300, "easeInOutQuad");
            });
            $menuP5.mouseleave(function(){
                $menuP5.stop().animate({
                    color: "#277043"
                }, 300, "easeInOutQuad");
            });
            $menuA5.mouseenter(function(){
                $menuA5.stop().animate({
                    color: "#ffffff"
                }, 300, "easeInOutQuad");
            });
            $menuA5.mouseleave(function(){
                $menuA5.stop().animate({
                    color: "#277043"
                }, 300, "easeInOutQuad");
            });
        }
    });

});
})(jQuery);