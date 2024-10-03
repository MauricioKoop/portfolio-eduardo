$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

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
        pagination: {
            el: ".swiper-tools-pagination",
            clickable: true,
        },
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
})