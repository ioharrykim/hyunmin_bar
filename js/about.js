(function($) {
    $(document).ready(function() {
        // READY

    var about = $(".profile > div"); // 어바웃 페이지 할당
    var changeT = $(".profile .change-text"); // 바뀔 텍스트

        // 각 섹션에 도착했을 때. 
      $(window).scroll(function() {
        var wScroll = $(this).scrollTop();

        if(wScroll >= about.eq(0).offset().top) {
            console.log("0도달");
            changeT.html("<h1>공감하는 개발자</h1>");
        }
        if(wScroll >= about.eq(1).offset().top) {
            console.log("1도달");
            changeT.html("<h1>공감하는 개발자</h1>");
        }
        if(wScroll >= about.eq(2).offset().top) {
            console.log("2도달");
            changeT.html("<h1>Less is More</h1>");
        }
        if(wScroll >= about.eq(3).offset().top) {
            console.log("3도달");
            changeT.html("<h1>축구에 미친 사람</h1>");
        }
        if(wScroll >= about.eq(4).offset().top) {
            console.log("4도달");
            changeT.html("<h1>걷는 것보다 뛰는걸<br>좋아하는 러너</h1>");
        }
        if(wScroll >= about.eq(5).offset().top) {
            console.log("5도달");
            changeT.html("<h1>도전하는 모험가</h1>");
        }
        if(wScroll >= about.eq(6).offset().top) {
            console.log("6도달");
            changeT.html("<h1>멈추지 않는 프로</h1>");
        }
        if(wScroll >= about.eq(7).offset().top) {
            console.log("7도달");
            changeT.html("<h1>CONTACT</h1>");
            $(".end-line").css({
              "transform" : "scaleX(0)",
              "transition" : "all ease 1s 1s"
            })
            $(".footer").css({
              "opacity" : "100",
              "transform" : "translateY(-30vh)",
              "transition" : "all ease 1s 1s"
            });
        }

        // #f0d738
    var $resumeB = $(".resume");
    var $resumeT = $(".resume h3");

    $resumeB.click(function(){
        window.open("https://github.com/juventuslandia/hyunmin_bar/raw/main/resume_kimhyunmin.pdf");
    });
    $resumeB.mouseenter(function(){
        $resumeB.stop().animate({
            backgroundColor: "#f0d738",
        }, 500, "easeInOutQuad");
        $resumeT.stop().animate({
            color: "#ffffff",
        }, 500, "easeInOutQuad");
    });
    $resumeB.mouseleave(function(){
        $resumeB.stop().animate({
            backgroundColor: "#ffffff",
        }, 500, "easeInOutQuad");
        $resumeT.stop().animate({
            color: "#202020",
        }, 500, "easeInOutQuad");
    });



      });
    });
})(jQuery);