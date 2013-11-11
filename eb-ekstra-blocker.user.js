// ==UserScript==
// @name           EB Ekstra
// @version        1.0
// @namespace      
// @author         Ikky
// @description    Blocking ekstra on ekstrabladet.dk
// @include        http://ekstrabladet.dk/*
// @include        https://ekstrabladet.dk/*
// ==/UserScript==
re();

function re () {
    var elements = document.getElementsByClassName('widgetcontainer');
    for(var i=0; i<elements.length; i++) { 
        elements[i].style.display='none';
    }

    var elements = document.getElementsByClassName('df-img-skin-premium');
    for(var i=0; i<elements.length; i++) { 
        elements[i].parentNode.style.display='none';
    }

    var elements = document.getElementsByClassName('overlay-ekstra');
    for(var i=0; i<elements.length; i++) { 
    elements[i].parentNode.parentNode.parentNode.parentNode.style.display='none';
    }
}
