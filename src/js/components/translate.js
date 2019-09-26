//jshint esversion:8
import { language } from "./text.js";

//headers
const headerMain = document.getElementById('hed-1');
const headerUs = document.getElementById('AboutHead');
const headerGal = document.getElementById('GalleryHead');
const headerPrice = document.getElementById('PriceHead');
const headerCon = document.getElementById('ContactHead');

//content text
const textUs = document.getElementById('AboutDescription');
const textGal1 = document.getElementById('GalleryDescription1');
const textprice = document.getElementById('PriceDescription');
const textcon = document.getElementById('ContactDescription');

//navigation
const navUs = document.querySelectorAll('.nav-us');
const navGal = document.querySelectorAll('.nav-gal');
const navPrice = document.querySelectorAll('.nav-price');
const navCon = document.querySelectorAll('.nav-cont');

//price tabell
const tab11 = document.getElementById('tab-11');
const tab12 = document.getElementById('tab-12');
const tab13 = document.getElementById('tab-13');
const tab14 = document.getElementById('tab-14');
const tab15 = document.getElementById('tab-15');

const tabModel = document.getElementById('tab-model');
const tabPrice_1h = document.getElementById('tab-price-1h');
const tabPrice_3h = document.getElementById('tab-price-3h');
const tabPrice_24h = document.getElementById('tab-price-24h');
const tab_km = document.getElementById('tab-price-km');

//==============================================================================

export const translator = () => {
    document.getElementById('PL').addEventListener('click', () => {
        headerMain.textContent = language.pl.heading;
    });

    document.getElementById('CZ').addEventListener('click', () => {
        headerMain.textContent = language.cz.heading;
    });
};
