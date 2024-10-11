$(document).ready(function(){
    // Open menu mobile
    var btnOpenMobile = $('.btn-open-mobile');
    var menuMobile = $('#menu-mobile');
    var closeMenuMobile = $('.main-nav-mobile__close');

    btnOpenMobile.on('click', controlsMobileMenu);

    closeMenuMobile.on('click', () => {
        controlsMobileMenu();
    })

    function controlsMobileMenu() {
        if (btnOpenMobile.attr('aria-expanded') == 'false') {
            // It’s currently closed, so open it
            btnOpenMobile.attr('aria-expanded', true);
            menuMobile.attr('aria-hidden', false);
        } else {
            // It’s currently open, so close it
            btnOpenMobile.attr('aria-expanded', false);
            menuMobile.attr('aria-hidden', true);
        }
    }

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