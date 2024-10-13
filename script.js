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

    // close mobile menu
    let navMobileLink = $('.main-nav-mobile__link');
    let mainNavLink = $('.main-nav__link');

    function scrollToSection(linksOfMenu){
        $.each(linksOfMenu, (index, element) => {
            let link = $(element);
    
            link.on('click', (e) => {
                e.preventDefault();
                let curretnLink = $(e.target);
                let hrefCurrentLink = curretnLink.attr('href');
                let elSection = $(hrefCurrentLink);
                let elSectionTop = elSection.offset().top;
                let elNodeName = $(curretnLink).parent().parent().parent()[0].nodeName;
                console.log(elNodeName);
    
                $('html, body').animate({
                    scrollTop: elSectionTop
                }, 800);
                
                // Depois de scrollar fecha o menu mobile se for o menu mobile que estiver sendo interagido com o usuário
                if(elNodeName != "HEADER"){
                    controlsMobileMenu();
                }
            })
        })
    }

    scrollToSection(navMobileLink);
    scrollToSection(mainNavLink);

    // Esconde a barra de navegação quando houver scroll down, exibe com scrollUp
    let prevScroll = 0;
    const header = $('.main-nav');

    $(window).on('scroll', () => {
        let currentScroll = window.scrollY;
        if(prevScroll > currentScroll){
            header.css('top', '0');
        }else{
            header.css('top', '-100px');
        }
        prevScroll = currentScroll;
    })

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