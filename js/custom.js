$(function () {
  "use strick"


  $(".backtotop i").on('click', function () {
    $("html,body").animate({
      scrollTop: 0
    }, 1200)
  })

  $(window).on('scroll', function () {
    let scrolling = $(this).scrollTop()

    if (scrolling > 20) {
      $(".backtotop i").fadeIn(500)
    } else {
      $(".backtotop i").fadeOut(500)
    }

    if (scrolling > 50) {
      $(".menu").addClass("menu_ex")
    } else {
      $(".menu").removeClass("menu_ex")
    }
  })




  // all counter js
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });




  // engineers slick js

  $('.engi_slider_main').slick({
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    nextArrow: ".sa_next",
    prevArrow: ".sa_prev",
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });




    $("#boxscroll2").niceScroll({
      cursorcolor: "#18A7B9",
      horizrailenabled:false,
      boxzoom: true,
      touchbehavior: true,
      dblclickzoom:true,
      smoothscroll:true,


  });




})