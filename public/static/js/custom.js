


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
 
    if (scroll >= 100) {
        $("header").addClass("darkHeader");
    } else {
        $("header").removeClass("darkHeader");
    }
 }); 
 $(document).ready(function(){
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


    jQuery('.alltabsyel ul li a').on('click', function() {
      var id =  jQuery(this).attr("data-id");
              jQuery('.learning-historytab').css('display','none');
               jQuery('#'+id).css('display','block');
               jQuery('.alltabsyel ul li a, .learning-historytab').removeClass('active');         
               jQuery(this).addClass('active');            
   
   
     });



  }); 

  

  
    
////////////////////


