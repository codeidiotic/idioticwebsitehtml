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

document.addEventListener('DOMContentLoaded', pageLoadComplete);

function pageLoadComplete(){
    changeRunningText();
}

function changeRunningText(){
    let dynamicTextEle = document.getElementById("dynamicText");
    dynamicTextEle.innerText = socialMediaChannels[dynamicTextCounter]['name'];
    dynamicTextEle.className = 'fw-bold ' + socialMediaChannels[dynamicTextCounter]['className'];
    dynamicTextCounter++;
    if(dynamicTextCounter == socialMediaChannels.length - 1){
        dynamicTextCounter = 0;
    }
    setTimeout(changeRunningText, 5000);
}