let 
    arrow = document.getElementById('up-arrow') as HTMLElement,
    logo = document.getElementById('logo') as HTMLImageElement,
    nav = document.getElementById('nav') as HTMLImageElement;


// First Load Check Logo
if (window.pageYOffset > 0) {
    // Logo Animation
    logo.classList.remove('start');
    nav.style.cssText = "background:#161616 !important";
}

window.addEventListener("scroll", function() {
    
    if (window.pageYOffset > 0) {
        // Up Arrow
        arrow.style.opacity = "1";
        arrow.style.transform = "translateX(0%)";
        // Nav
        nav.style.backgroundColor = "#161616";
        // Logo Animation
        logo.classList.remove('start');

    } else {
        // Up Arrow
        arrow.style.opacity = "0";
        arrow.style.transform = "translateX(200%)";
        // Nav
        nav.style.backgroundColor = "#0000";
        // Logo Animation
        logo.classList.add('start');
       
    }
});


// Up Arrow
arrow.addEventListener("click", function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
});