const  features = document.querySelector('.features-menu');
const  company = document.querySelector('.company-menu');
const  arrowsFeatures = document.querySelector('.arrow1');
const  arrowsCompany = document.querySelector('.arrow2');
const submenuFeatures = document.querySelector('ul.sub-features');
const submenuCompany = document.querySelector('ul.sub-company');

features.addEventListener('click', () => {
    if (submenuFeatures.classList.contains('close')){
        arrowsFeatures.setAttribute("src", "images/icon-arrow-up.svg");
        submenuFeatures.classList.toggle("close");
        submenuCompany.classList.add("close");

    }else{
        arrowsFeatures.setAttribute("src", "images/icon-arrow-down.svg");
        submenuFeatures.classList.toggle("close");

    }    
});

company.addEventListener('click', () => {
    if (submenuCompany.classList.contains('close')){
        arrowsCompany.setAttribute("src", "images/icon-arrow-up.svg");
        submenuCompany.classList.toggle("close");
        submenuFeatures.classList.add("close");

    }else{
        arrowsCompany.setAttribute("src", "images/icon-arrow-down.svg");
        submenuCompany.classList.toggle("close");
    }    
});

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
})
   