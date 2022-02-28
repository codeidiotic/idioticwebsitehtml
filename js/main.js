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
        createInfluencerSlider();
    }

    if(window.location.pathname.indexOf("influencer") > -1){
        createInfluencerSlider();
        createBrandsShowcaseSlider();
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
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    $(".influencers-brands-showcase-slider").slick(slick_properties);
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
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, 
        {
            breakpoint: 510,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    };

    if(window.location.pathname.indexOf("index") > -1){
        $(".influencers-showcase").slick(slider_properties);
    }
    else{
        slider_properties.arrows = false;
        slider_properties.autoplaySpeed = 1000;
        $(".networks-card-container").slick(slider_properties);
    }
}

function campaignDelivarableChecked(){
    let campaign_deliverable = document.querySelector('input[name="campaign_deliverable"]:checked').value;
    let campaign_textarea = document.getElementById("campaign_description");
    console.log(campaign_deliverable);
    let message = "Let the influencer know what kind of promotion that you want to engage them for.";
    switch(campaign_deliverable){
        case "option1":
            console.log('in option1');
            message = "I want Influencer to do 1 Instagram Post and 1 Twitter Post for PQR Brand";
            campaign_textarea.value = message;
            break;
        case "option2":
            console.log('in option2');
            message = "I want Influencer to Re-Share the content posted by on their Facebook Page";
            campaign_textarea.value = message;
            break;
        case "option3":
            console.log('in option3');
            message = "I want Influencer to come and watch showroom opening and go live on Instagram";
            campaign_textarea.value = message;
            break;
        case "option4":
            console.log('in option4');
            campaign_textarea.value = "";
            campaign_textarea.placeholder = message;
            break;
    }
}