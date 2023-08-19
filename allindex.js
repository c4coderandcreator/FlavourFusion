//Let me know you are making any change in the below code : Anay 

const targetDiv = document.getElementById("allaboutus");
const about = document.getElementById("allab");
const alhome = document.getElementById("home-btn");
const targetItem = document.querySelector(".l-main");
const targetFoot = document.querySelector(".footer");
const targetMenu = document.querySelector(".menu-naima");
const targetMenu2 = document.getElementById("menu-btn");
const targetOrder = document.querySelector(".order-landing");
const targetOrder2 = document.getElementById("aboutLink");
const orderHistory = document.querySelector(".ahead");
const anorderlink = document.querySelector(".anorderlink");
const homelink = document.querySelector(".home");
const homelink2 = document.querySelector(".food-fact");
const mediaQuery = window.matchMedia('(max-width: 868px)');



    about.onclick = function () {
          targetDiv.style.display = "block";
      };
    about.onclick = function () {
            targetItem.style.display = "none";
            targetFoot.style.display = "block";
            targetMenu.style.display = "none";
            targetDiv.style.display = "block"; 
            orderHistory.style.display = "none";
          };
    alhome.onclick = function () {
            targetDiv.style.display = "none";
            targetFoot.style.display = "block";
            orderHistory.style.display = "none";
            homelink.style.display = "block";
            homelink2.style.display = "block";
          };
    targetMenu2.onclick = function () {
            targetDiv.style.display = "none";
            targetFoot.style.display = "block";
            orderHistory.style.display = "none";
    };
    targetOrder2.onclick = function() {
        targetOrder.style.display = "block";
        targetItem.style.display = "block";
        targetMenu.style.display = "none";
        targetDiv.style.display = "none";
        orderHistory.style.display = "none";
    };
  anorderlink.onclick = function () {
  orderHistory.style.display = "block";
  targetItem.style.display = "none";
 }
 if (mediaQuery.matches) {
  orderHistory.style.marginTop = '15%';
  orderHistory.style.display = 'flex';
  
} else {
  orderHistory.style.marginTop = '10%';
}