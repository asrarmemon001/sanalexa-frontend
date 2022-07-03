


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
 
    if (scroll >= 100) {
        $("header").addClass("darkHeader");
    } else {
        $("header").removeClass("darkHeader");
    }
 });  
 

 

 $(document).ready(function(){

  $(".customdp").click(function() {  //use a class, since your ID gets mangled
    $(this).toggleClass("active");      //add the class to the clicked element
  });

    $(".collapsebutton").click(function(){
      $(this).toggleClass("opentoggle");
      alert('sssss');
    });

    $(".girditem a.girdfilter").click(function(){
      $(".girdsestem").removeClass("viewlist");
      $(".girdsestem").addClass("active");
    });

    $(".girditem a.viewfilter").click(function(){
      $(".girdsestem").removeClass("active");
      $(".girdsestem").addClass("viewlist");
    });

    $('.pharmaceutical-boxslide').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    })
  
  }); 

  

  
    
////////////////////


