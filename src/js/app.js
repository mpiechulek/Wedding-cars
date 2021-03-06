//jshint esversion:6
import { openMenu, closeMenu } from './components/ham-menu.js';
import { translator } from './components/translate.js';
import { imgSlider } from './components/auto-slide.js';

const icon = document.getElementById('ham-icon');
const close = document.getElementById('close-btn');
const hamLinks = document.querySelectorAll('.ham-link');
const scrollBtn = document.getElementById('arrow-icon');
const check = document.getElementById('check');
const checkbox = document.getElementById('checkbox');

//==============================================================================

//clicking on the hamburger menu icon shows the hidden menu
icon.addEventListener('click', () => {
    openMenu();
});

//clicking on the x mark hides the menu
close.addEventListener('click', () => {
    closeMenu();
});

//clcicking on the link in the hidden menu, closes the menu
hamLinks.forEach(function(elem) {
    elem.addEventListener("click", () => {
        console.log('Click');
        closeMenu();
    });
});

//when scrolling the window the arrow button shows
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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

check.addEventListener("click", () => {
    if(checkbox.checked === true){
        checkbox.value="Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w powyższym formularzu w celu [CEL ZBIERANIA DANYCH] przez [DANE FIRMY] oraz przez podmioty trzecie";
    }
});


translator();
imgSlider();
