import "./nav.js"
import "./dropdown.js"

$(document).ready(function(){
    let carousel = $(".work__section .owl-carousel")
    carousel.owlCarousel({
        responsive:{
            0:{
              items:1,
              loop:true
            },
            600:{
              items:2,
              loop:true
            },
            1024:{
              items:3,
              loop:true
            }
          }
    });
    $('#next').click(()=>{
        carousel.trigger("next.owl.carousel");
    })
    $('#prev').click(()=>{
        carousel.trigger("prev.owl.carousel");
    })
    $('.play__btn').click(_ele=>{
        $('video')
        .attr('controls','true')
        .trigger('play')
        _ele.target.style.display="none"
    })
    $('video').on("pause",_ele=>{
        _ele.target.removeAttribute('controls')
        $('.play__btn').css("display","block")
    })
    $('#service_btn').click(function(){
      let popup = $('<div class="popup">Request Submitted</div>')
      $(this).css('pointer-events','none')
      $(this).toggleClass('btn__spinner')
      setTimeout(()=>{
        $(this).removeClass('btn__spinner')
        $(this).addClass('btn__check__mark')
        setTimeout(()=>{
          $(this).removeClass('btn__check__mark')
          $(this).css('pointer-events','all')
          $(document.body).append(popup)
          popup.one('animationend',()=>{
            popup.remove()
          })
        },1000)
      },3000)
    })
    let reviews = $(".testemonial__section .owl-carousel")
    reviews.owlCarousel({
        responsive:{
            0:{
              items:1,
              loop:true,
              dots: false,
              autoplay:true,
              autoplayTimeout:5000
            }
          }
    });
    $('#next__review').click(()=>{
      reviews.trigger("next.owl.carousel");
  })
  
    new Waypoint({
        element: $('.team__section')[0],
        handler: function(direction) {
            $('.team__section .image').addClass("animate__fadeInUp").css("opacity",1)
            $('.team__section .content').addClass("animate__fadeInRight").css("opacity",1)
        },
        offset: '50%'
    })
    new Waypoint({
        element: $('.video__section')[0],
        handler: function(direction) {
          $('.video__section')
          .addClass("animate__flipInX")
          .css("opacity",1)
        },
        offset: '50%'
    })
    new Waypoint({
        element: $('.technique__section')[0],
        handler: function(direction) {
          $('.technique__section .image')
          .addClass("animate__fadeInLeft")
          .css("opacity",1)
          $('.technique__section .content h1')
          .addClass("animate__fadeInUp")
          .css("opacity",1)
          $('.technique__section .content p')
          .addClass("animate__fadeInUp")
          .css("opacity",1)
          $('.technique__section .content ul')
          .addClass("animate__fadeInUp")
          .css("opacity",1)

        },
        offset: '50%'
    })

  $('.scroll__top').click(()=>{
    scrollTo({top: 0, behavior: 'smooth'});
  })
});