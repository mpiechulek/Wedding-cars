//jshint esversion:6
import {openMenu,closeMenu } from './components/ham-menu.js';

const icon = document.getElementById('ham-icon');
const close = document.getElementById('close-btn');
const hamLinks = document.querySelectorAll('.ham-link');
const scrollBtn = document.getElementById('arrow-icon');

//==============================================================================

//clicking on the hamburger menu icon shows the hidden menu
icon.addEventListener('click',()=>{
    openMenu();
});

//clicking on the x mark hides the menu
close.addEventListener('click',()=>{
    closeMenu();
});

//clcicking on the link in the hidden menu, closes the menu
hamLinks.forEach(function(elem) {
    elem.addEventListener("click", () =>{
        console.log('Click');closeMenu();
    });
});

//when scrolling the window the arrow button shows
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

// When the user clicks on the button, scroll to the top of the document
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
