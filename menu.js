/* ------------ MenuPage By Naima -------------*/
// Page hide and show
var home_btn = document.querySelector("#home-btn"),
menu_btn = document.querySelector("#menu-btn"),
main = document.querySelector(".l-main"),
menu_naima = document.querySelector(".menu-naima");

menu_btn.addEventListener("click", function(){
    main.style.display="none";
    menu_naima.style.display="block";
    home_btn.classList.remove("active-link");
    menu_btn.classList.add("active-link");
})
home_btn.addEventListener("click", function(){
    menu_naima.style.display="none";
    main.style.display="block";
    menu_btn.classList.remove("active-link");
    home_btn.classList.add("active-link");
})

// Summer Sale
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Menu Buttons


// Menu Items
