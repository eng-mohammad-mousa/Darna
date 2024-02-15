"use strict";
let arrow = document.getElementById('up-arrow'), logo = document.getElementById('logo'), nav = document.getElementById('nav'), forms = document.querySelectorAll('.needs-validation');
if (window.pageYOffset > 0) {
    logo.classList.remove('start');
    nav.style.cssText = "background:#0C0C0C !important";
}
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
        arrow.style.opacity = "1";
        arrow.style.transform = "translateX(0%)";
        nav.style.backgroundColor = "#0C0C0C";
        logo.classList.remove('start');
    }
    else {
        arrow.style.opacity = "0";
        arrow.style.transform = "translateX(200%)";
        nav.style.backgroundColor = "#0000";
        logo.classList.add('start');
    }
});
(function () {
    'use strict';
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();
arrow.addEventListener("click", function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
});
