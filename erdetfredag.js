// ==UserScript==
// @name           er det fredag
// @version        1.0
// @namespace      
// @grant          none
// @author         RA
// @description    Every day is champagn day at cloud-valley
// @include         http://www.erdetfredag.dk/*
// ==/UserScript==

window.addEventListener('load', function() {

    var elem = document.getElementById("answer");
    elem.innerHTML = "Det er Cloud-champagne dag!";

}, false);
