(function global() {
  const $ = window.$;
    $('.navbar-nav .nav-link').click(function(){
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    })
    
    $('.dropdown').hover(function(){ 
      $('.dropdown-toggle', this).trigger('click'); 
    });
    
    $('.testimonial-slider').owlCarousel({
        nav:false,
        items:2,
        dots: false,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                margin:10,
                items:1
            },
            767:{  
                margin:20, 
                items:2
            },
            991:{
                margin:40,
                items:3
            }
        }
    })
})();



