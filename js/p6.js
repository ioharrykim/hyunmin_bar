(function($){
$(document).ready(function(){
// READY 

    /* 프로젝트 헤더 색 변경  */
    var page = $(".page-container");
    var headerM = $(".header-menu-links a");
    var headerL = $(".header-wrap a");
    var cover = $(".cover");
    var $menuP6 = $(".menu-p6 > a"),
    $menuA6 = $(".menu-a6 > a");

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll >= page.offset().top) {
            console.log("도달");
            headerM.css({
                "color" : "#000"
            });
            $menuP6.mouseenter(function(){
                $menuP6.stop().animate({
                    color: "#A6192E"
                }, 300, "easeInOutQuad");
            });
            $menuP6.mouseleave(function(){
                $menuP6.stop().animate({
                    color: "#000000"
                }, 300, "easeInOutQuad");
            });
            $menuA6.mouseenter(function(){
                $menuA6.stop().animate({
                    color: "#A6192E"
                }, 300, "easeInOutQuad");
            });
            $menuA6.mouseleave(function(){
                $menuA6.stop().animate({
                    color: "#000000"
                }, 300, "easeInOutQuad");
            });
            headerL.html("<img src='./images/logo.png' alt='logo'>");
        }
        if(wScroll >= cover.offset().top && wScroll <= page.offset().top) {
            console.log("아웃");
            headerM.css({
                "color" : "#A6192E"
            });
            $menuP6.mouseenter(function(){
                $menuP6.stop().animate({
                    color: "#ffffff"
                }, 300, "easeInOutQuad");
            });
            $menuP6.mouseleave(function(){
                $menuP6.stop().animate({
                    color: "#A6192E"
                }, 300, "easeInOutQuad");
            });
            $menuA6.mouseenter(function(){
                $menuA6.stop().animate({
                    color: "#ffffff"
                }, 300, "easeInOutQuad");
            });
            $menuA6.mouseleave(function(){
                $menuA6.stop().animate({
                    color: "#A6192E"
                }, 300, "easeInOutQuad");
            });
            headerL.html("<img src='./images/logo_w.png' alt='logo_w'>");
        }
    });

});
})(jQuery);