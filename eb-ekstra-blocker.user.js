// ==UserScript==
// @name         JA
// @namespace    http://www.cloud-people.dk/
// @version      1.0
// @description  Every day is champagn day at cloud-valley
// @author       RA
// @match        http://www.erdetfredag.dk/
// @grant        none
// ==/UserScript==


window.addEventListener('load', function() {

    var elem = document.getElementById("answer");
    elem.innerHTML = "Det er Cloud-champagne dag!";

}, false);
