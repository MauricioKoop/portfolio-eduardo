$(document).ready(function(){
    var swiper = new Swiper(".testimonials__swiper", {
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Swipper Tools
    var swiper = new Swiper(".swiper-tools", {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: true,
        loop: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            400: {
                slidesPerView: 2
            },
            // when window width is >= 480px
            500: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // Swipper Work Tools
    var swiper = new Swiper(".work-tools__swiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: false,
        loop: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            500: {
                slidesPerView: 3
            },
            // when window width is >= 480px
            700: {
                slidesPerView: 4
            },
            800: {
                slidesPerView: 5
            }
        }
    });
})