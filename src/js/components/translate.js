//jshint esversion:8

const headerTxt = document.getElementById('hi');
const contentTxt = document.getElementById('con');
const footerTxt = document.getElementById('fot');

document.getElementById('CZ').addEventListener('click',() => {
    headerTxt.textContent = language.cz.welcome;
    contentTxt.textContent = language.cz.welcome;
    footerTxt.textContent = language.cz.welcome;
});

document.getElementById('PL').addEventListener('click',() => {
    headerTxt.textContent = language.pl.welcome;
    contentTxt.textContent = language.pl.welcome;
    footerTxt.textContent = language.pl.welcome;
});
