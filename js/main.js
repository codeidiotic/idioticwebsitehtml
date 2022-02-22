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
        'className': 'text-light'
    },
    {
        'name': 'Instagram',
        'className': 'text-light'
    },
    {
        'name': 'Twitter',
        'className': 'text-light'
    },
    {
        'name': 'Youtube',
        'className': 'text-light'
    }
];
let dynamicTextCounter = 0;
let printingWord = "";
const letter_typing_speed = 300;

document.addEventListener('DOMContentLoaded', pageLoadComplete);

function pageLoadComplete(){
    if(window.location.pathname.indexOf("index") > -1){
        // changeRunningText();
        // createBrandsShowcaseSlider();
    }

    if(window.location.pathname.indexOf("influencer") > -1){
        createInfluencerSlider();
    }
}

function changeRunningText(){
    let dynamicTextEle = document.getElementById("dynamicText");
    dynamicTextEle.innerText = socialMediaChannels[dynamicTextCounter]['name'];
    printingWord = socialMediaChannels[dynamicTextCounter]['name'];
    // dynamicTextEle.className = 'fw-bold ' + socialMediaChannels[dynamicTextCounter]['className'];
    // typeWord();
    dynamicTextCounter++;
    if(dynamicTextCounter == socialMediaChannels.length){
        dynamicTextCounter = 0;
    }
    setTimeout(changeRunningText, 3000);
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
        centerMode: true,
        infinite: true,
        centerPadding: '30px',
        slidesToShow: 3,
        speed: 500,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerPadding: '10px',
                slidesToShow: 1
            }
        }]
    };
    $(".brands-showcase").slick(slick_properties);
}

function formModeSelected(){
    let selectMenu = document.getElementById('form-mode');
    let detail_container = document.getElementById('brand-detail');
    let influencer_profile_link = document.getElementById('influencer-profile-link');
    let influencer_channel_name = document.getElementById('influencer-channel-name');
    if(selectMenu.value == '1'){
        // brand
        detail_container.classList.remove('d-none');
        influencer_profile_link.classList.add('d-none');
        influencer_channel_name.classList.add('d-none');
    }
    else{
        // influencer
        detail_container.classList.add('d-none');
        influencer_profile_link.classList.remove('d-none');
        influencer_channel_name.classList.remove('d-none');
    }
}

function createInfluencerSlider(){
    let slider_properties = {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    };
    $(".networks-card-container").slick(slider_properties);
}