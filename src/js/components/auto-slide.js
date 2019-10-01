//jshint esversion:6

let slideIndex = 1;
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-netx');
const imgSlide = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("slide-btn");
//==============================================================================

function showDivs(n) {

    if (n > imgSlide.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = imgSlide.length;
    }

    for (let i = 0; i < imgSlide.length; i++) {
        imgSlide[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" gallery-button-blue", "");
    }

    imgSlide[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " gallery-button-blue";
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

//==============================================================================
showDivs(slideIndex);
//==============================================================================

export const imgSlider = () => {

    prevBtn.addEventListener('click', () => {
        plusDivs(-1);
    });

    nextBtn.addEventListener('click', () => {
        plusDivs(1);
    });

    for (let i = 0; dots.length > i; i++) {
        dots[i].addEventListener('click', () => {
            for (let j = 0; j < imgSlide.length; j++) {
                imgSlide[j].style.display = "none";
            }
            imgSlide[i].style.display = "block";
        });
    }

};
