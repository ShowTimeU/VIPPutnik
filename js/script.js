function openNav(event) {
    event.stopPropagation();
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.6)";
    document.getElementById("main-2").style.backgroundColor = "rgba(0,0,0,0.6)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.backgroundColor = "unset";
    document.getElementById("main-2").style.backgroundColor = "unset";
}

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-S0ZDB4CRH4');

function init() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
            vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
        }
    }
}
window.onload = init;

$(function () {
    $(window).load(function () {
        $('#divLoader').fadeOut('slow');
    })
})