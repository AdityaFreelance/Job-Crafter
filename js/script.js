// Sticky Header
window.onscroll = function () { stickyHeader() };

var header = document.querySelector(".sticky-header");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
// Header button collapse
document.addEventListener("DOMContentLoaded", function() {
    const navbarToggleBtn = document.querySelector(".navbar-toggler");

    navbarToggleBtn.addEventListener("click", function() {
        this.classList.toggle("activeBtn");
    });
});



// location strip
$('.locationSlider-container ul').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
});

// Upcoming Batches slider
$(document).ready(function () {
    $('.upcoming-batches').slick({
        dots: true,
        arrows:false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 676,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    var dotButtons = document.querySelectorAll('.slick-dots li button');
    dotButtons.forEach(function (button) {
        button.innerHTML = '';
    });
    var carosuelButton = document.querySelectorAll('button.slick-arrow');
    carosuelButton.forEach(function (button) {
        button.innerHTML = '';
    })
});