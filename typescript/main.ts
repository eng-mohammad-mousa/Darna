declare var $:any;
declare var AOS:any;

let 
    arrow = document.getElementById('up-arrow') as HTMLElement,
    logo = document.getElementById('logo') as HTMLImageElement,
    nav = document.getElementById('nav') as HTMLImageElement,
    forms = <NodeListOf<Element>>document.querySelectorAll('.needs-validation');


// First Load Check Logo
if (window.pageYOffset > 0) {
    // Logo Animation
    logo.classList.remove('start');
    nav.style.cssText = "background:#0C0C0C !important";
}

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 0) {
        // Up Arrow
        arrow.style.opacity = "1";
        arrow.style.transform = "translateX(0%)";
        // Nav
        nav.style.backgroundColor = "#0C0C0C";
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

$(".nav-link").on("click", function (): void {
    $("#nav-container").collapse("hide");
});
  
$(window).on("scroll", function (): void {
    $("#nav-container").collapse("hide");
});
  

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
.forEach(function (form) {
    form.addEventListener('submit', function (event:any) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
    }, false)
})

AOS.init({
    duration: 1000,
    delay: 250,
    offset: 0
})

$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:5
        },
        768:{
            items:8
        }
    }
})

$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        }
    }
});

// Up Arrow
arrow.addEventListener("click", function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
});

