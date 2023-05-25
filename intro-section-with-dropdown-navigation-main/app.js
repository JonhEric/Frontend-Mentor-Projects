const  features = document.querySelector('.features-menu');
const  company = document.querySelector('.company-menu');
const  arrowsFeatures = document.querySelector('.arrow1');
const  arrowsCompany = document.querySelector('.arrow2');
const submenuFeatures = document.querySelector('ul.sub-features');
const submenuCompany = document.querySelector('ul.sub-company');

features.addEventListener('click', () => {
    submenuFeatures.classList.toggle("none");
    if (submenuFeatures.classList.contains('none')){
    arrowsFeatures.setAttribute("src", "images/icon-arrow-down.svg");
    }else{
    arrowsFeatures.setAttribute("src", "images/icon-arrow-up.svg");
    }
})
company.addEventListener('click', () => {
    submenuCompany.classList.toggle("none");
    if (submenuCompany.classList.contains('none')){
        arrowsCompany.setAttribute("src", "images/icon-arrow-down.svg");
        }else{
        arrowsCompany.setAttribute("src", "images/icon-arrow-up.svg");
        }
})


const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('menu');

hamburger.addEventListener('click', () => {
    overlay.classList.toggle('close');
    menu.classList.toggle('close');
    hamburger.classList.toggle('open');
})
   