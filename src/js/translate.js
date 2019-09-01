//jshint esversion:8

let headerTxt = document.getElementById('hi');
let contentTxt = document.getElementById('con');
let footerTxt = document.getElementById('fot');

document.getElementById('cz').addEventListener('click',() => {
    headerTxt.textContent = language.cz.welcome;
    contentTxt.textContent = language.cz.welcome;
    footerTxt.textContent = language.cz.welcome;
});

document.getElementById('pl').addEventListener('click',() => {
    headerTxt.textContent = language.pl.welcome;
    contentTxt.textContent = language.pl.welcome;
    footerTxt.textContent = language.pl.welcome;
});
