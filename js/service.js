import "./nav.js";
import "./dropdown.js";

$(document).ready(function () {
  let reviews = $(".testemonial__section .owl-carousel");
  reviews.owlCarousel({
    responsive: {
      0: {
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
      },
    },
  });
  $("#next__review").click(() => {
    reviews.trigger("next.owl.carousel");
  });
  $('.accordian button').click((e)=>{
    console.log(e.currentTarget.children[0].classList.toggle('accordian__btn__rotate'))
    e.currentTarget.parentElement.nextElementSibling.classList.toggle('accordian__content__show')
    // ele = e.currentTarget
    // $('.accordian .accordian__content').toggleClass('accordian__content__show')
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
  $(".scroll__top").click(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  });
});

