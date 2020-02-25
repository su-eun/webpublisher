// main.js


$(document).ready(function () {

  // fullPage-bg
  var myFullpage = new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage'],
    sectionsColor: ['#c7d0621c', '#c7d0621c', '#c7d0621c', '#c7d0621c', '#c7d0621c', '#c7d0621c', '#c7d0621c'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third and last page']
  });

  // web-circle
  $('.html').circleProgress({
    value: 0.80,
    fill: { gradient: [['#e55629', 1], ['pink', 1]], gradientAngle: Math.PI / 4 }
  });
  $('.css').circleProgress({
    value: 0.70,
    fill: { gradient: [['#29acdc', 1], ['pink', 1]], gradientAngle: Math.PI / 4 }
  });
  $('.jq').circleProgress({
    value: 0.60,
    fill: { gradient: [['#e5a328', 1], ['pink', 1]], gradientAngle: Math.PI / 4 }
  });
});

// 페이지 스크롤 함수
function goto_scroll(move_top) {
  $("html,body")
    .stop()
    .animate({ scrollTop: move_top + "px" }, 800);
}

$(function () {
  // gnb 이벤트
  var link = document.querySelectorAll("#gnb a");
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
      var top = document.querySelector(link[i].hash).offsetTop;
      goto_scroll(top);
      // 인디케이터 업데이트
      update_pager(i);
    });
  }

  // 우측 인디케이터 이벤트
  $("#pager li a").click(function () {
    $("#pager li").removeClass("on");
    $(this).parent().addClass("on");
    var top = $(this.hash).offset().top;
    goto_scroll(top);
  });

  // 인디케이터 업데이트 함수
  function update_pager(page_num) {
    console.log(page_num);
    $("#pager li").removeClass("on");
    $('#pager li')
      .eq(page_num)
      .addClass("on");
  }

  // scroll 이벤트
  var s = $('section').length;
  var sec_top_y = [];
  for (var i = 0; i < s; i++) {
    sec_top_y[i] = $('section').eq(i).offset().top;
    console.log(sec_top_y)
  }

  $(window).scroll(function () {
    var top = $(this).scrollTop();
    if (top >= sec_top_y[0]) {
      update_pager(0);
    }
    if (top >= sec_top_y[1]) {
      update_pager(1);
    }
    if (top >= sec_top_y[2]) {
      update_pager(2);
    }

  })


}); // end $


// 모바일에서 스크롤이 맨 위일때 배경 지우기
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('#main_header h1').addClass('nav_bg');
    } else {
      $('#main_header h1').removeClass('nav_bg');
    }
  });
});


$(function () {

  // toggle gnb 메뉴
  $('#toggle').click(function () {
    $('.nav_group').toggleClass('show');
  });


  /*** SNS slider ***/
  // bx slider option
  var settings1 = {
    minSlides: 5,
    maxSlides: 5,
    moveSlides: 1,
    slideWidth: 1920,
  };

  var settings2 = {
    minSlides: 2,
    maxSlides: 2,
    moveSlides: 1,
    slideWidth: 1920,
  };

  // 최초 실행시 화면 크기별 슬라이더 칼럼수 설정
  var width = window.innerWidth;
  var slider;

  // 이미지 로드 채크
  imagesLoaded(document.querySelector('.slider'), function () {
    console.log('all images are loaded');
    // 화면 크기가 768 보다 크면 setting1 아니면 setting2
    (width > 767) ?
      slider = $('#sns .slider').bxSlider(settings1) :
      slider = $('#sns .slider').bxSlider(settings2)
  });

  // 창크기 변화시 슬라이더 설정 변경
  $(window).resize(function () {
    width = window.innerWidth;

    if (width > 767) {
      slider.reloadSlider(settings1);
    } else {
      slider.reloadSlider(settings2);
    }
  });


}); // $end jquery
