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
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-S0ZDB4CRH4');