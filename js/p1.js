(function($){
$(document).ready(function(){
// READY 

    /* 프로젝트 헤더 색 변경  */
    var page = $(".page-container");
    var headerM = $(".header-menu-links a");
    var headerL = $(".header-wrap a");
    var cover = $(".cover");
    var $menuP1 = $(".menu-p1 > a"),
        $menuA1 = $(".menu-a1 > a");


    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll >= page.offset().top) {
            console.log("도달");
            headerM.css({
                "color" : "#000"
            });
            $menuP1.mouseenter(function(){
                $menuP1.stop().animate({
                    color: "#F0D738"
                }, 300, "easeInOutQuad");
            });
            $menuP1.mouseleave(function(){
                $menuP1.stop().animate({
                    color: "#000000"
                }, 300, "easeInOutQuad");
            });
            $menuA1.mouseenter(function(){
                $menuA1.stop().animate({
                    color: "#F0D738"
                }, 300, "easeInOutQuad");
            });
            $menuA1.mouseleave(function(){
                $menuA1.stop().animate({
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
            $menuP1.mouseenter(function(){
                $menuP1.stop().animate({
                    color: "#F0D738"
                }, 300, "easeInOutQuad");
            });
            $menuP1.mouseleave(function(){
                $menuP1.stop().animate({
                    color: "#ffffff"
                }, 300, "easeInOutQuad");
            });
            $menuA1.mouseenter(function(){
                $menuA1.stop().animate({
                    color: "#F0D738"
                }, 300, "easeInOutQuad");
            });
            $menuA1.mouseleave(function(){
                $menuA1.stop().animate({
                    color: "#ffffff"
                }, 300, "easeInOutQuad");
            });
            headerL.html("<img src='./images/logo_w.png' alt='logo_w'>");
        }
    });

});
})(jQuery);