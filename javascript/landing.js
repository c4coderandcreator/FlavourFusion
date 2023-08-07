/*====================Landing Page and Navbar Code by Navuuu====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== Scroll Top ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*==================== Scroll Reveal Animation ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.home__data, .home__img, 
           .order-landing__data,
           .footer__content`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.food-fact__img, .send__content`, {
    origin: 'left'
})

sr.reveal(`.food-fact__data, .send__img`, {
    origin: 'right'
})

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
