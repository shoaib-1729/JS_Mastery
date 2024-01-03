// handlers functions declarations (that will be called, when events are triggered)

// define handleSlider() function
// task : input slider slide karne par value change karega password length ki, yaani password length ko UI par display karega


// initial values
// No password is generated initially
let password = "";
// password length is 10 initially
let passwordLength = 10;
// kitne checkboxes checked hai uska track bhi rakhna padega (usi ke basis pr hum password generate karege)
let checkCount = 0;
// fetch the slider input element (fetching the elements using 'custom attributes' defined to them' explore more from google that how to etch elements using their resp. custom attributes )
let inputSlider = document.querySelector("[input-slider]");
// fetch the password length element
let passwordData = document.querySelector("[password-data]")
    // call the handleSlider() function to display the initial password value
handleSlider()




function handleSlider() {
    // initially, set the slider value equal to password length
    inputSlider.value = passwordLength;
    // initially, set the password length to password data element
    passwordData.textContent = passwordLength;
    // set the bg-color property of slider (ki jitna password length hai, bss wahi tak color fill ho)
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength - min) / (max - min) * 100) + "% 100%"
}


// setIndicator(color) function
// task : indicator ka bg-color 'color' ke equal kar dega

// fetching the strength-Indicator element
let strengthIndicator = document.querySelector("[strength-indicator]")

function setIndicator(color) {
    // bg color
    strengthIndicator.style.backgroundColor = color;
    // shadow
    strengthIndicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

// make indicator bg-color 'grey' initially
setIndicator('#ccc');
// function getRandInteger(min, max) gives a random integer from min to max
function getRandInteger(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
}

// function getUpperCase(), getLowerCase(), getNumber(), getSymbol() to get single random character

// getUpperCase() function (generates random character from 'A to 'Z')
function getUpperCase() {
    // call the random integer function which will you a random number 65 (ascii value of 'A' ) and 91 (ascii value of 'Z'), then convert the random char codes generated to the respective characters 
    return String.fromCharCode(getRandInteger(65, 91))
}

// getLowerCase() function (generates random character from 'a to 'z')
function getLowerCase() {
    // call the random integer function which will you a random number 97 (ascii value of 'a' ) and 123 (ascii value of 'z'), then convert the random char codes generated to the respective characters 
    return String.fromCharCode(getRandInteger(97, 123))
}

// getNumber() function (generates a random number, that is random digits from '1' to '9')
function getNumber() {
    return getRandInteger(0, 9)
}


// getSymbol() function (generates a random index from string of symbols, then fetches that symbol on the basis of index generated
// symbol string
let symbols = "~!@#$%^&()_+-=/*{}[]./<>,;:'?"

function getSymbol() {
    // get the random index
    let randIndex = getRandInteger(0, symbols.length);
    // fetch the symbol (here, you can also use CharAt() method as well to fetch the character from string)
    return symbols[randIndex];
}

// function calcStrength()
// task: password ki strength calculate karega, strength ke hisaab se indicator ka color determine hoga

// fetching all the checkboxes
let upperCaseCheck = document.querySelector("#upperCase");
let lowerCaseCheck = document.querySelector("#lowerCase");
let numbersCheck = document.querySelector("#numbers");
let symbolsCheck = document.querySelector("#symbols");

function calcStrength() {
    // there can be many logics for determining that the generated password is either strong or weak, this is one of them
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if (upperCaseCheck.checked) hasUpper = true;
    if (lowerCaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;

    // change bg color of the indicator on the basis of strong, normal and weak (logic will vary)
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#ff0");
    } else {
        setIndicator('#f00');
    }
}

// copyContent() function 
// task : function for copying the content to clipboard (enabled when the user clicks on copy icon after the generating the password)

// fetch the copy msg element (jo copy karne ke baad visible hoga)
let copyMsg = document.querySelector('[data-copyMsg]')
    // fetch the input text field
const passwordField = document.querySelector('[data-passwordDisplay]')
async function copyContent() {
    // use the method navigator.clipboard.writeText() for copying to clipboard, since writeText() returns a promise consume it using async-await or then()
    // in case of async-await, handling error using try catch block
    try {
        await navigator.clipboard.writeText(passwordField.value);
        copyMsg.innerText = "Copied";

    } catch (error) {
        copyMsg.innerText = "Failed";
    }

    // copy icon ka display active karo (add 'active' class defined in css)
    copyMsg.classList.add('active');

    // copied text, ek baar click karne par apne aap hidden ho jaata hai 2 sec k baad (use setTimeout to achieve this)
    setTimeout(function() {
        // css se active wali class ko remove kardo 2 sec ke baad
        copyMsg.classList.remove('active');
    }, 2000)

}

// when the password is generated, shuffle it (shuffle isiliye kyuki checkboxes se andaza lag sakta h password ka jaise agar uppercase, lowercase wale checkboxes checked hai toh password ke pehle 2 characters uppercase aur lowercase letters hi hoge , jo checkboxes checked hai use priority milegi aur woh letters password mei pehle aayege)
// use 'Fisher Yates Method' to shuffle the password (do a google search)

// shufflePassword(array) function (ye ek array leta hai, to password wali string ko array mei convert karke pass karna padega)
// task : to shuffle the password (use 'Fisher Yates' algo to shuffle the password)
function shufflePassword(array) {
    // Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    // console.log('Shuffled Array: ' + array);
    // console.log(array.length);
    return array.join("");
}

// handleCheckBoxChange() function
// task : function jo checkboxes ke checked hone pr, 'checkCount' variable (defined globally) ko update karega

// fetch all the checkboxes
let allCheckBoxes = document.querySelectorAll(' input[type="checkbox"] ')

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBoxes.forEach(checkbox => {
        if (checkbox.checked)
            checkCount++
    });
    // corner case (agar zyada checkbox check kar diye password length kam se)
    // hum jo project bana rahe hai, uske hisaab se ye corner case hai, corner cases depend karta hai ki aapka project kaise kaam karta hai?
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        // to display the updated password length to teh UI
        handleSlider();
    }
}
// jab bhi checkbox check ya uncheck ho function handleCheckBoxChange() function call karo
allCheckBoxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})

// adding event listeners (pass the reference to the functions created above, inside the function handler while handling the events)

// slider element
inputSlider.addEventListener('input', function(e) {
    passwordLength = e.target.value;
    handleSlider();
});

// copy button element
// fetch copy button element 
const copyBtn = document.querySelector('[copy-btn]')
copyBtn.addEventListener('click', function() {
    // when password is generated, tabhi copyContent() wala function run hoga
    if (passwordLength > 0) {
        copyContent();
    }
})

// generate button element par
// fetch the element
const generateBtn = document.querySelector('.generate-btn');
// add event listener
generateBtn.addEventListener('click', function() {

    // agar koi bhi checkbox checked nahi hai, tab password generate matt karo
    if (checkCount == 0) {
        return;
    }
    // agar check count smaller ho password length se
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        // since password length is updated, call handleSlider() to display it to the UI
        handleSlider();
    }
    // After checking these conditions, start generating the password
    // naya password add hoga, to old password hata do
    password = ""
        // check karo ki kaun kaun se checkboxes checked hai, unko password string mei pehle add karo
    let funcArr = [];
    if (upperCaseCheck.checked) {
        // push the function to the funcArr
        funcArr.push(getUpperCase);
    }
    if (lowerCaseCheck.checked) {
        // push the function to the funcArr
        funcArr.push(getLowerCase);
    }
    if (numbersCheck.checked) {
        // push the function to the funcArr
        funcArr.push(getNumber);
    }
    if (symbolsCheck.checked) {
        // push the function to the funcArr
        funcArr.push(getSymbol);
    }
    // console.log("Function pushed.'")


    // now add the priority characters in the password string, jinke checkboxes checked hai
    // compulsory addition
    funcArr.forEach(func => {
            password += func();
        })
        // console.log('Password After Compulsory Addition: ' + password);
        // console.log("Compulsory Addition Done.'")

    // remaining addition
    let remPassLen = passwordLength - funcArr.length
    for (let i = 0; i < remPassLen; i++) {
        // call any function randomly from funcArr, and add it to the password for remaining password characters
        let randIndex = getRandInteger(0, funcArr.length)
        password += funcArr[randIndex]();
    }
    // console.log('Password After Remaining Addition: ' + password);
    // console.log("Remaining Addition Done.'")
    // when password is ready, shuffle it
    // console.log('Array from password: ' + Array.from(password))
    password = shufflePassword(Array.from(password));
    // console.log('Shuffling Done.')
    // console.log('Final Password After Shuffling: ' + password + "Length:" + password.length);

    // since password is updated, display it to the UI
    passwordField.value = password;
    // console.log('UI Addition Done.')
    // after displaying the password in the UI, calculate the strength of it
    calcStrength();

})