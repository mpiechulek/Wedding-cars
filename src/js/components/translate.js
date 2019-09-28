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
const textGal = document.getElementById('GalleryDescription');
const textPrice = document.getElementById('PriceDescription');
const textCon = document.getElementById('ContactDescription');

//form
const formName = document.getElementById('name');
const formForname = document.getElementById('forname');
const formTextArea = document.getElementById('textarea');
const formButton= document.getElementById('form-btn');

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

const siteName = document.getElementById('adress-name');

//==============================================================================

export const translator = () => {
    document.getElementById('PL').addEventListener('click', () => {
        headerMain.textContent = language.pl.heading;
        headerUs.textContent = language.pl.Us.UsHead;
        headerGal.textContent = language.pl.Gal.GalHead;
        headerPrice.textContent = language.pl.Price.PriceHead;
        headerCon.textContent = language.pl.Con.ConHead;

        //content text
        textUs.textContent = language.pl.Us.UsTxt;
        textGal.textContent = language.pl.Gal.GalTxt;
        textPrice.textContent = language.pl.Price.PriceTxt;
        textCon.textContent = language.pl.Con.ConTxt;

        //navigation
        for (let i = 0; i < navUs.length; i++) {
           navUs[i].textContent = language.pl.nav.navUS;
           navGal[i].textContent = language.pl.nav.navGal;
           navPrice[i].textContent = language.pl.nav.navPrice;
           navCon[i].textContent = language.pl.nav.navCon;
         }

        //price tabell
        tab11.textContent = language.pl.Price.tabel.tab11;
        tab12.textContent = language.pl.Price.tabel.tab12;
        tab13.textContent = language.pl.Price.tabel.tab13;
        tab14.textContent = language.pl.Price.tabel.tab14;
        tab15.textContent = language.pl.Price.tabel.tab15;

        //form
        formName.placeholder = language.pl.Con.form.inputFirstName;
        formForname.placeholder = language.pl.Con.form.inputSecondName;
        formButton.textContent = language.pl.Con.form.button;
        formTextArea.textContent = language.pl.Con.form.txt;

        siteName.textContent = language.pl.heading;

    });

    //=========================================================================

    document.getElementById('CZ').addEventListener('click', () => {
        headerMain.textContent = language.cz.heading;
        headerUs.textContent = language.cz.Us.UsHead;
        headerGal.textContent = language.cz.Gal.GalHead;
        headerPrice.textContent = language.cz.Price.PriceHead;
        headerCon.textContent = language.cz.Con.ConHead;

        //content text
        textUs.textContent = language.cz.Us.UsTxt;
        textGal.textContent = language.cz.Gal.GalTxt;
        textPrice.textContent = language.cz.Price.PriceTxt;
        textCon.textContent = language.cz.Con.ConTxt;

        //navigation
        for (let i = 0; i < navUs.length; i++) {
           navUs[i].textContent = language.cz.nav.navUS;
           navGal[i].textContent = language.cz.nav.navGal;
           navPrice[i].textContent = language.cz.nav.navPrice;
           navCon[i].textContent = language.cz.nav.navCon;
         }

        //price tabell
        tab11.textContent = language.cz.Price.tabel.tab11;
        tab12.textContent = language.cz.Price.tabel.tab12;
        tab13.textContent = language.cz.Price.tabel.tab13;
        tab14.textContent = language.cz.Price.tabel.tab14;
        tab15.textContent = language.cz.Price.tabel.tab15;

        //form
        formName.placeholder = language.cz.Con.form.inputFirstName;
        formForname.placeholder = language.cz.Con.form.inputSecondName;
        formButton.textContent = language.cz.Con.form.button;
        formTextArea.textContent = language.cz.Con.form.txt;

        siteName.textContent = language.cz.heading;
    });
};
