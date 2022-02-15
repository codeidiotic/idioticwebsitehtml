const socialMediaChannels = [
    {
        'name': 'Facebook',
        'className': 'facebook-color'
    },
    {
        'name': 'Instagram',
        'className': 'instagram-color'
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
    }
}

function changeRunningText(){
    let dynamicTextEle = document.getElementById("dynamicText");
    dynamicTextEle.innerText = "";
    printingWord = socialMediaChannels[dynamicTextCounter]['name'];
    dynamicTextEle.className = 'fw-bold ' + socialMediaChannels[dynamicTextCounter]['className'];
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

function scrollToInfluencerSignupForm(){
    let signup_form_element = document.getElementById("signupForm");
    signup_form_element.scrollIntoView({
        behavior: "smooth"
    });
}

function toggleFaq(index){
    let element = document.getElementById("faqAnswer_" + index);
    let elementImage = document.getElementById("faqIcon_" + index);
    element.classList.toggle("hide-element");
    if(element.classList.contains("hide-element")){
        elementImage.src = "../images/icons/arrow-down.svg";
    }
    else{
        elementImage.src = "../images/icons/arrow-up.svg";
    }
}