(function($){
$(document).ready(function(){
// READY 

/* 로딩 */
$(".index-loading").css({
    "transform" : "translateX(0)",
    "transition" : "all 1s ease 4s",
    "opacity" : "0"
});
setTimeout(function(){
    $(".index-loading").remove();
},5000);


/* WELCOME */
setTimeout(function(){
    $(".text-area").fadeIn();
},5000);

/* 이미지 이동 */ 
setTimeout(function(){
    $(".images-container").css({
        "opacity" : "1",
        "transition" : "all 1 ease"
    });
},4000);
// function imageOpa() {

// }
$(".images-container").mouseover(function(){
    $(".images1").css({
        "animation-play-state" : "paused"
    });
    $(".images1-1").css({
        "animation-play-state" : "paused"
    });
    $(".images2").css({
        "animation-play-state" : "paused"
    });
    $(".images2-1").css({
        "animation-play-state" : "paused"
    });
});
$(".images-container").mouseout(function(){
    $(".images1").css({
        "animation-play-state" : "running"
    });
    $(".images1-1").css({
        "animation-play-state" : "running"
    });
    $(".images2").css({
        "animation-play-state" : "running"
    });
    $(".images2-1").css({
        "animation-play-state" : "running"
    });
});


/* 이미지 */

    $("#sketch").mousemove(function(e){
        $('.follow').css({'top': e.clientY - 20, 'left': e.clientX - 20});
    });


/* 로딩 */
    function delayLink1() {
        setTimeout(function(){
            location.href = "./p1.html";
        },1000);
    }
    function delayLink2() {
        setTimeout(function(){
            location.href = "./p2.html";
        },1000);
    }
    function delayLink3() {
        setTimeout(function(){
            location.href = "./p3.html";
        },1000);
    }
    function delayLink4() {
        setTimeout(function(){
            location.href = "./p4.html";
        },1000);
    }
    function delayLink5() {
        setTimeout(function(){
            location.href = "./p5.html";
        },1000);
    }
    function delayLink6() {
        setTimeout(function(){
            location.href = "./p6.html";
        },1000);
    }
    function delayLink7() {
        setTimeout(function(){
            location.href = "./p7.html";
        },1000);
    }
    $(".p1").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p1-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink1();
    });
    $(".p2").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p2-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink2();
    });
    // $(".p2").click(function(event){
    //     event.preventDefault();
    //     $(".header").fadeOut(500);
    //     $(".wave-container").css({
    //         "opacity" : "100",
    //         "transform" : "translateY(2000)",
    //         "transform" : "scaleY(2000)",
    //         "transition" : "all ease-out 1s"
    //     });
    //     delayLink2();
    // });
    $(".p3").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p3-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink3();
    });
    $(".p4").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p4-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink4();
    });
    $(".p5").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p5-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink5();
    });
    $(".p6").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p6-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink6();
    });
    $(".p7").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p7-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink7();
    });


    /* 프로젝트 마우스 호버 */ 
    $(".p1").mouseenter(function(){
        $(".p1").animate({
            backgroundColor: "#08B681",
            color: "#404040"
        }, 500, "easeInOutQuad");
    });
    $(".p1").mouseleave(function(){
        $(".p1").animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });
    $(".p2").mouseenter(function(){
        $(".p2").animate({
            backgroundColor: "#FDD9DC",
            color: "#ffffff"
        }, 500, "easeInOutQuad");
    });
    $(".p2").mouseleave(function(){
        $(".p2").animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });
    $(".p3").mouseenter(function(){
        $(".p3").animate({
            backgroundColor: "#1b1b1b",
            color: "#DBA731"
        }, 500, "easeInOutQuad");
    });
    $(".p3").mouseleave(function(){
        $(".p3").animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });
    $(".p4").mouseenter(function(){
        $(".p4").animate({
            backgroundColor: "#1FAFFF",
            color: "#ffc000"
        }, 500, "easeInOutQuad");
    });
    $(".p4").mouseleave(function(){
        $(".p4").animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });
    $(".p5").mouseenter(function(){
        $(".p5").animate({
            backgroundColor: "#DADADA",
            color: "#277043"
        }, 500, "easeInOutQuad");
    });
    $(".p5").mouseleave(function(){
        $(".p5").animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });
    $(".p6").mouseenter(function(){
        $(".p6").animate({
            backgroundColor: "#212322",
            color: "#A6192E"
        }, 500, "easeInOutQuad");
    });
    $(".p6").mouseleave(function(){
        $(".p6").animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });
    $(".p7").mouseenter(function(){
        $(".p7").animate({
            backgroundColor: "#5018e9",
            color: "#fc8ce3"
        }, 500, "easeInOutQuad");
    });
    $(".p7").mouseleave(function(){
        $(".p7").animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });




    /* 페이드인 아웃 */

    function coverFadeIn(){
        setTimeout(function(){
            $(".cover-container").fadeIn(1000);
            $(".header").fadeIn(1000);
        }, 3000);
    }
    function titleFadeToggle(){
        $(".loading-title").fadeIn(2000);
        $(".loading-title").fadeOut(1000);
        coverFadeIn();
    }
    titleFadeToggle();
    
    
    
});
})(jQuery);