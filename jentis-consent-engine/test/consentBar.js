const consentBar = document.querySelector(".consent-bar");
const buttons = document.getElementsByClassName('btn');


for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', cookiesAreSet)
}
function cookiesAreSet(event)
{
    let clickedButton = event.target;
    console.log(clickedButton.value);
    localStorage.setItem("CookieConsentBarDisplayed", true)
    consentBar.classList.remove("active");
}

setTimeout(() => {
    if(!localStorage.getItem("CookieConsentBarDisplayed"))
    {
        consentBar.classList.add("active");
    }
}, 1000);