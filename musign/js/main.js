//메인메뉴의 움직이는 바
$('.gnb li a').mouseenter(function(){
    let bar=$(this).position().left;
    //.position():jquery 메서드 중 하나로, 요소의 위치정보(top,left)를 반환한다.
   
    console.log(bar)
    let widnum=$(this).width();
   // $('.bar').animate({실행문},시간)
   $('.bar').animate({
    'left':bar + "px",
   'width':widnum + "px",
   'opacity':1,
    },300/* 3초 */)
})


//전체 애니메이션 ----  jQuery Scrolla - Custom settings 
$('.animate').scrolla({
    // default
    mobile: false, // 모바일버전에서 활성화 --> true
    once: false, // 스크롤시 한번 또는 여러번 실행 --> 한번 실행은 true
    animateCssVersion: 4 //  animate.css 버전 (3 or 4)
});



// path의 총길이 (px단위)를 알아내기
let pathH=document.querySelector('.st0')
let pathHeight = pathH.getTotalLength();
console.log(pathHeight)




//menuOpen
$('.menuOpen .open').click(function(e){
 e.preventDefault();
 $('.menuOpen .menuWrap').addClass('on')
})


$('.menuOpen .close').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
   })





// service 영역시 배경컬러 바꾸기
$(window).scroll(function(){
    let scrollTop=$(this).scrollTop(); // $(this) --> window
    console.log(scrollTop);
    let offset=$('.service').offset().top; //service영역의 top이 viewpor의 top에 위치하는 지점
    //==> 전체문서에서 service 영역 전까지의 높이값을 추출

    if(scrollTop>offset){   /* 위에서 부터 현재높이 값 */
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
})