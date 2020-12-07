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

/* MENU */
var $menuP = $(".menu-p > a"),
    $menuA = $(".menu-a > a");

$menuP.mouseenter(function(){
    $menuP.stop().animate({
        color: "#F0D738"
    }, 300, "easeInOutQuad");
});
$menuP.mouseleave(function(){
    $menuP.stop().animate({
        color: "#000000"
    }, 300, "easeInOutQuad");
});
$menuA.mouseenter(function(){
    $menuA.stop().animate({
        color: "#F0D738"
    }, 300, "easeInOutQuad");
});
$menuA.mouseleave(function(){
    $menuA.stop().animate({
        color: "#000000"
    }, 300, "easeInOutQuad");
});

// p1 - HANGSUNG 
var $menuP1 = $(".menu-p1 > a"),
    $menuA1 = $(".menu-a1 > a");

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
// p3 - Star is Born
var $menuP3 = $(".menu-p3 > a"),
    $menuA3 = $(".menu-a3 > a");

$menuP3.mouseenter(function(){
    $menuP3.stop().animate({
        color: "#ffffff"
    }, 300, "easeInOutQuad");
});
$menuP3.mouseleave(function(){
    $menuP3.stop().animate({
        color: "#DBA731"
    }, 300, "easeInOutQuad");
});
$menuA3.mouseenter(function(){
    $menuA3.stop().animate({
        color: "#ffffff"
    }, 300, "easeInOutQuad");
});
$menuA3.mouseleave(function(){
    $menuA3.stop().animate({
        color: "#DBA731"
    }, 300, "easeInOutQuad");
});
// p4 - Cheongmidong
var $menuP4 = $(".menu-p4 > a"),
    $menuA4 = $(".menu-a4 > a");

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
// p5 - IOHYUNMINKIM
var $menuP5 = $(".menu-p5 > a"),
    $menuA5 = $(".menu-a5 > a");

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
// p5 - IOHYUNMINKIM
var $menuP6 = $(".menu-p6 > a"),
    $menuA6 = $(".menu-a6 > a");

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
// p7 - Artworks
var $menuP7 = $(".menu-p7 > a"),
    $menuA7 = $(".menu-a7 > a");

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

/* 이미지 이동 */ 
setTimeout(function(){
    $(".images-container").css({
        "opacity" : "1",
        "transition" : "all 1 ease"
    });
},4000);

/* 마우스 호버시 이미지 멈춤 */
var $img1 = $(".images1"),
    $img2 = $(".images2"),
    $img1_1 = $(".images1-1"),
    $img2_1 = $(".images2-1");



$(".images-container").mouseover(function(){
    $img1.css({
        "animation-play-state" : "paused"
    });
    $img2.css({
        "animation-play-state" : "paused"
    });
    $img1_1.css({
        "animation-play-state" : "paused"
    });
    $img2_1.css({
        "animation-play-state" : "paused"
    });
});
$(".images-container").mouseout(function(){
    $img1.css({
        "animation-play-state" : "running"
    });
    $img2.css({
        "animation-play-state" : "running"
    });
    $img1_1.css({
        "animation-play-state" : "running"
    });
    $img2_1.css({
        "animation-play-state" : "running"
    });
});


/* 이미지 */

    // $("#sketch").mousemove(function(e){
    //     $('.follow').css({'top': e.clientY - 20, 'left': e.clientX - 20});
    // });


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
        $(".p1").stop().animate({
            backgroundColor: "#08B681",
            color: "#404040"
        }, 500, "easeInOutQuad");
    });
    $(".p1").mouseleave(function(){
        $(".p1").stop().animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });
    $(".p2").mouseenter(function(){
        $(".p2").stop().animate({
            backgroundColor: "#FDD9DC",
            color: "#ffffff"
        }, 500, "easeInOutQuad");
    });
    $(".p2").mouseleave(function(){
        $(".p2").stop().animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });
    $(".p3").mouseenter(function(){
        $(".p3").stop().animate({
            backgroundColor: "#1b1b1b",
            color: "#DBA731"
        }, 500, "easeInOutQuad");
    });
    $(".p3").mouseleave(function(){
        $(".p3").stop().animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });
    $(".p4").mouseenter(function(){
        $(".p4").stop().animate({
            backgroundColor: "#1FAFFF",
            color: "#ffc000"
        }, 500, "easeInOutQuad");
    });
    $(".p4").mouseleave(function(){
        $(".p4").stop().animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });
    $(".p5").mouseenter(function(){
        $(".p5").stop().animate({
            backgroundColor: "#DADADA",
            color: "#277043"
        }, 500, "easeInOutQuad");
    });
    $(".p5").mouseleave(function(){
        $(".p5").stop().animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });
    $(".p6").mouseenter(function(){
        $(".p6").stop().animate({
            backgroundColor: "#212322",
            color: "#A6192E"
        }, 500, "easeInOutQuad");
    });
    $(".p6").mouseleave(function(){
        $(".p6").stop().animate({
            backgroundColor: "none",
            color: "#000000"
        }, 500, "easeInOutQuad");
    });
    $(".p7").mouseenter(function(){
        $(".p7").stop().animate({
            backgroundColor: "#5018e9",
            color: "#fc8ce3"
        }, 500, "easeInOutQuad");
    });
    $(".p7").mouseleave(function(){
        $(".p7").stop().animate({
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

    /* 프로젝트 이동 */
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
    $(".pp1").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p1-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink1();
    });
    $(".pp2").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p2-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink2();
    });
    $(".pp3").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p3-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink3();
    });
    $(".pp4").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p4-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink4();
    });
    $(".pp5").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p5-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink5();
    });
    $(".pp6").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p6-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink6();
    });
    $(".pp7").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p7-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease-out 1s"
        });
        delayLink7();
    });


    $(".next.pp6").mouseenter(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".next.pp6").mouseleave(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    $(".next.pp1").mouseenter(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".next.pp1").mouseleave(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    $(".next.pp2").mouseenter(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".next.pp2").mouseleave(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    $(".next.pp3").mouseenter(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".next.pp3").mouseleave(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    $(".next.pp5").mouseenter(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".next.pp5").mouseleave(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    $(".next.pp7").mouseenter(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".next.pp7").mouseleave(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    $(".next.pp4").mouseenter(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".next.pp4").mouseleave(function(event){
        event.preventDefault();
        $(".ne").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".next-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    




    $(".prev.pp7").mouseenter(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp7").mouseleave(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp4").mouseenter(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp4").mouseleave(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp6").mouseenter(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp6").mouseleave(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp1").mouseenter(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp1").mouseleave(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp2").mouseenter(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp2").mouseleave(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp3").mouseenter(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp3").mouseleave(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp5").mouseenter(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "50px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 1
        }, 500, "easeInOutQuad");
    });
    $(".prev.pp5").mouseleave(function(event){
        event.preventDefault();
        $(".pr").stop().animate({
            width: "0px"
        }, 500, "easeInOutQuad");
        $(".prev-title").stop().animate({
            opacity: 0
        }, 500, "easeInOutQuad");
    });
    
    
    
});
})(jQuery);