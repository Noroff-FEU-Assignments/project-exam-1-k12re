import errorMsg from "./error.js";

const pageUrl = "https://autotech.kenthore.no/wp-json/wp/v2/pages";
const pageContainer = document.querySelector(".page")
const name = document.querySelector(".name");
const nameReq = document.querySelector("#name-req");
const nameReqOk = document.querySelector(".name-req-ok");
const email = document.querySelector(".email");
const emailReq = document.querySelector("#email-req");
const emailReqOk = document.querySelector(".email-req-ok");
const subject = document.querySelector(".subject");
const subjectReq = document.querySelector("#subject-req");
const subjectReqOk = document.querySelector(".subject-req-ok");
const textarea = document.querySelector(".textarea");
const textareaReq = document.querySelector("#textarea-req");
const textareaReqOk = document.querySelector(".textarea-req-ok");
const contactForm = document.querySelector(".contact-form");
const form = document.querySelector("form")
const messageContainer = document.querySelector(".submission");

async function callContact() {
    try {
        const response = await fetch(pageUrl);
        const results = await response.json();
    
         pageContainer.innerHTML = "";
    
         pageContainer.innerHTML += `<h1 class="h1">${results[0].title.rendered}</h1>
                                    <p>${results[0].content.rendered}</p>`
    } catch {
        const error = errorMsg("error", "ERROR");
        pageContainer.innerHTML = error;
    }
};

callContact();

function checkMail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const mailPattern = regEx.test(email);
    return mailPattern;
};

function validateInput(event) {

    event.preventDefault();

    if(name.value.length > 1) {
        nameReq.style.display = "none";
    } else {
        nameReq.style.display = "block";
    };

    if(checkMail(email.value) === true) {
        emailReq.style.display = "none";
    } else {
        emailReq.style.display = "block";
    };

    if(subject.value.length > 7) {
        subjectReq.style.display = "none";
    } else {
        subjectReq.style.display = "block";
    }

    if(textarea.value.length > 24) {
        textareaReq.classList.add("req");
    } else {
        textareaReq.classList.remove("req");
    }
};

name.onkeyup = function() {
    if(name.value.length > 1) {
        nameReqOk.style.display = "block"
    } else {
        nameReqOk.style.display = "none"
    };
};

email.onkeyup = function() {
    if(checkMail(email.value)) {
        emailReqOk.style.display = "block"
    } else {
        emailReqOk.style.display = "none"
    };
};

subject.onkeyup = function() {
    if(subject.value.length > 7) {
        subjectReqOk.style.display = "block"
    } else {
        subjectReqOk.style.display = "none"
    };
};

textarea.onkeyup = function() {
    if(textarea.value.length > 24) {
        textareaReqOk.style.display = "block"
    } else {
        textareaReqOk.style.display = "none"
    };
};


function submitForm(event) {

    messageContainer.innerHTML = ``;
    
    event.preventDefault();
 
    if (checkInputs(name.value, 1) && (email.value, true) && (subject.value, 8) && textarea.value, 25) {
        messageContainer.innerHTML = `<div class="message">Your message has been sent<div>`;
        form.reset();
    } else {
        messageContainer.innerHTML = `<div class="error">Please insert valid info<div>`;
    };
};

function checkInputs(value, length) {
    if(value.trim().length >= length) {
        return true;
    } else {
        return false;
    }
}

contactForm.addEventListener("submit", validateInput);
contactForm.addEventListener("submit", submitForm);