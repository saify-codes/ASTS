var toggle_btn = document.querySelector("#toggle__btn");
var nav_list_items = document.querySelectorAll(".nav__list__item");
var nav_list = document.querySelector(".nav__list");
var icons = document.querySelector(".navbar .social__media__icons");
// var widget = document.querySelector(".widget");
var header = document.querySelector("header");

toggle_btn.addEventListener("click", () => {
  nav_list_items.forEach((_ele) => {
    _ele.classList.toggle("nav__list__item__show");
  });
  nav_list.classList.toggle("nav__list__show");
  header.classList.toggle("fixed__nav")
  icons.classList.toggle('show__icon')
  toggle_btn
  .children
  .item(0)
  .classList
  .toggle('fa-xmark')
});

window.addEventListener('scroll',()=>{
    if(scrollY > 300 && !header.classList.contains("fixed__nav")){
        // widget.style.display="none";
        header.classList.add("fixed__nav__scroll")
    }    
    else{
        // widget.style.display="flex";
        header.classList.remove("fixed__nav__scroll")
    }
    if(scrollY > 500){
      $('.scroll__top').addClass('scroll__show')
    }    
    else{
      $('.scroll__top').removeClass('scroll__show')
    }


})
