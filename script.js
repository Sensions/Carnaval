let openBurger = document.querySelector(".header-burger");
let menu = document.querySelector(".header-menu-mobile");
// let body = document.querySelector("body")
// console.log(body)
openBurger.addEventListener('click', function(e){
 menu.classList.add('header-menu-mobile-active');
 document.body.classList.add("overlay");
})
let closeBurger = document.querySelector(".header-close-mobile")
closeBurger.addEventListener('click', ()=>{
    menu.classList.remove('header-menu-mobile-active');
    document.body.classList.remove("overlay"); 
})
// Клік по документу
  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".header-menu-mobile") &&
      !e.target.closest(".header-burger") &&
      menu.classList.contains("header-menu-mobile-active")
    ) {
        menu.classList.remove('header-menu-mobile-active');
        document.body.classList.remove("overlay"); 
    }
  });

let header = document.getElementById('header')
window.onscroll = function(){
  if(window.pageYOffset > 400){
      header.classList.add('header-menu-scrolled')
  }else{
      header.classList.remove('header-menu-scrolled') 
  }
}


$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
  });
  
