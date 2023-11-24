let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');


menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-bars');
    navbar.classList.toggle('active');

};


function login(){
  let log = document.querySelector(".login");
  log.style.display="block"
}

function about(){
  let about = document.querySelector(".");
  about.style.display="block"
}

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".food-slider", {
    grabCursor:true,
    loop:true,
    centeredSliders:true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        0: {
          slidesPerView: 1, 
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      },
    
});

var swiper = new Swiper(".menu-slider", {
    grabCursor: true,
    loop: true,
    autoHeight: true,
    centeredSliders: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});