


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

 


  }); 

  


////////////////////


