let menu=document.querySelector("#dish");
let navbar=document.querySelector('.navbar');

let section=document.querySelectorAll("section");
let navlinks=document.querySelectorAll('header .navbar a');

window.onscroll=()=>{

}
var swiper=new Swiper(".home-slider",{
    spaceBetween:200,
    centeredSlides:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true,
});
var swiper=new Swiper(".review-slider",{
    spaceBetween:190,
    centeredSlides:true,
    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },
    loop:true,
});