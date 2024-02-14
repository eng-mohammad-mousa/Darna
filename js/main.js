"use strict";
let arrow = document.getElementById('up-arrow'), logo = document.getElementById('logo'), nav = document.getElementById('nav');
if (window.pageYOffset > 0) {
    logo.classList.remove('start');
    nav.style.cssText = "background:#161616 !important";
}
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
        arrow.style.opacity = "1";
        arrow.style.transform = "translateX(0%)";
        nav.style.backgroundColor = "#161616";
        logo.classList.remove('start');
    }
    else {
        arrow.style.opacity = "0";
        arrow.style.transform = "translateX(200%)";
        nav.style.backgroundColor = "#0000";
        logo.classList.add('start');
    }
});
arrow.addEventListener("click", function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
});
