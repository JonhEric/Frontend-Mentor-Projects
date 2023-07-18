const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".navlinks-container");

hamburger.addEventListener('click', () =>{
    console.log('ok');
    mobileMenu.classList.toggle('open');
})