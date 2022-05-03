$(document).ready(function() {
 $(".mob-menu span").click(function(){
    $(".main-menu").slideToggle();
   });

   $('.filterkey li ').click( function(){
      if ( $(this).hasClass('current') ) {
          $(this).removeClass('current');
      } else {
          $('.filterkey li .current').removeClass('current');
          $(this).addClass('current');    
      }
  });

  $('.packegeSlider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    items:3,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }


    }
  });
  $('.coursesSlider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    items:4,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })


  $(".mideel-mene ul li a.humb").click(function(){
    $(".mideel-mene").toggleClass("open");
  });
 
  $(".mideel-mene ul.list-menu").click(function(){
    $(".mideel-mene").removeClass("open");
  });


  $('.varymenu li a.sarchi').click(function(){
    $('.search-form-main').toggleClass('active-search');
    $('.search-form-main .search-field').focus();
});





$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
 
    if (scroll >= 100) {
        $("header").addClass("darkHeader");
    } else {
        $("header").removeClass("darkHeader");
    }
 });




 AOS.init();




});