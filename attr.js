let circles = document.querySelectorAll(".circle");
let center = document.querySelector(".center");
let reset = document.querySelector(".resetbtn");
let color;
circles.forEach(el => {
    el.addEventListener("click", function(){
        color = el.style.backgroundColor;
        center.style.backgroundColor = color;
    });
});
reset.addEventListener("click", function(){
    center.style.backgroundColor = "white";
});
// circle task UP!!!!!!!!!!





// password task DOWN!!!!!!!!!!
// general variables START
let icon = document.querySelector(".icon");
let input = document.querySelector("input");
let passTop = document.querySelector(".pass-top");
let passBott = document.querySelector(".pass-text");
let eye = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>`;
let crossEye = `<svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
<path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
<path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
</svg>`;
let redColor = "rgb(253, 78, 81)";
let blueColor = "rgb(27, 121, 206)";
// general variables END

// events on elements START
// event for icon change START
icon.addEventListener("click", function(){
    let x = icon.getAttribute("data-x");
    if (x == 0){
        this.innerHTML = eye;
        icon.setAttribute("data-x", "1");
        x = icon.getAttribute("data-x");
        input.setAttribute("type", "text");
    }else{
        this.innerHTML = crossEye;
        icon.setAttribute("data-x", "0");
        x = icon.getAttribute("data-x");
        input.setAttribute("type", "password");
    }
});
// event for icon change END

// event for password check START
input.addEventListener("input", function(){
    // input event variables START
    let val = this.value;
    let checkCap = false;
    let checkLow = false;
    let checkNum = false;
    let checkSym = false;
    // input event variables END
    // if else statement for whole logic START
    if (val.length == 0){
        // default settings for form!!!
        passBott.style.color = `${blueColor}`;
        input.style.borderBottomColor = `${blueColor}`;
        passTop.style.color = `${blueColor}`;
        icon.style.color = `${blueColor}`;
    }else if(val.length < 8){
        // case when charachters number is lower than minimum!!!
        passBott.innerHTML = `Min. 8 characters whit at least one capital letter, a number and a special character`;
        passBott.style.color = `${redColor}`;
        input.style.borderBottomColor = `${redColor}`;
        passTop.style.color = `${redColor}`;
        icon.style.color = `${redColor}`;
    }else if(val.length >= 8){
        // case when minimum is done!!
        // for loop is for checking capslock, number and symbol (checks with char Codes)!!!
        for (let i = 0; i < val.length; i++) {
            const el = val[i];
            if (el.charCodeAt() <= 90 && el.charCodeAt() >= 65){
                checkCap = true;
            }else if(el.charCodeAt() >= 97 && el.charCodeAt() <= 122){
                checkLow = true;
            }else if(el.charCodeAt() >= 48 && el.charCodeAt() <= 57){
                checkNum = true;
            }else if(el.charCodeAt() >= 33){
                checkSym = true;
            }
        }
        if (checkCap && checkLow && checkNum && checkSym){
            // case when everything is correct!!!
            passBott.innerHTML = `Your password passed! Password rules are not meant to be broken!`;
            passBott.style.color = `${blueColor}`;
            input.style.borderBottomColor = `${blueColor}`;
            passTop.style.color = `${blueColor}`;
            icon.style.color = `${blueColor}`;
        }
    }
    // if else statement for whole logic END
});
// event for password check END!!!
// events on elements END!!!



