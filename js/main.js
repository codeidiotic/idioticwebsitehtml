(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);

const socialMediaChannels = [
    {
        'name': 'Facebook',
        'className': 'text-primary'
    },
    {
        'name': 'Instagram',
        'className': 'text-primary'
    },
    {
        'name': 'Twitter',
        'className': 'text-primary'
    },
    {
        'name': 'Youtube',
        'className': 'text-danger'
    }
];
let dynamicTextCounter = 0;
let printingWord = "";
const letter_typing_speed = 500;

document.addEventListener('DOMContentLoaded', pageLoadComplete);

function pageLoadComplete(){
    if(window.location.pathname.indexOf("index") > -1){
        changeRunningText();
        createBrandsShowcaseSlider();
    }
}

function changeRunningText(){
    let dynamicTextEle = document.getElementById("dynamicText");
    dynamicTextEle.innerText = "";
    printingWord = socialMediaChannels[dynamicTextCounter]['name'];
    dynamicTextEle.className = 'fw-bold ' + socialMediaChannels[dynamicTextCounter]['className'];
    // dynamicTextEle.className = 'fw-bold text-primary';
    typeWord();
    dynamicTextCounter++;
    if(dynamicTextCounter == socialMediaChannels.length){
        dynamicTextCounter = 0;
    }
    setTimeout(changeRunningText, (printingWord.length * letter_typing_speed + letter_typing_speed));
}

function typeWord(){
    let dynamicTextEle = document.getElementById("dynamicText");
    if(dynamicTextEle.innerText.length !== printingWord.length){
        dynamicTextEle.innerText += printingWord[dynamicTextEle.innerText.length];
        setTimeout(typeWord, letter_typing_speed);
    }
}

function createBrandsShowcaseSlider(){
    let slick_properties = {
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 6,
        slidesToScroll: 3,
        loop: true
    };
    // $(".brands-showcase").slick(slick_properties);
}