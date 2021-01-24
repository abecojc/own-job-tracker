
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCk3Eni5C7tY-k_4MVLvrtSgTU3gvyGmf0",
    authDomain: "own-job-tracker.firebaseapp.com",
    projectId: "own-job-tracker",
    storageBucket: "own-job-tracker.appspot.com",
    messagingSenderId: "873534015254",
    appId: "1:873534015254:web:53adf9f10d79a940e73237"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Declaring variables
const regForm = document.querySelector('#form')

const username = document.querySelector('#username')

const email = document.querySelector('#email')

const password = document.querySelector('#password')

const password2 = document.querySelector('#password-2')

// Function to execute when 'Register Now' button is clicked
regForm.addEventListener('submit', function (e) {
    e.preventDefault()

//calling validating functions
    if(!validateEmpty(username)){

    }
    validateEmpty(email)
    validateEmpty(password)
    validateEmpty(password2)

    validateIsEmail(email)
    validateMinLength (password)
    validateMinLength (password2)
    validatePassMatch(password,password2)
    //validateEmail(email)
})

// checking if input field is empty or not
function validateEmpty(input) {
    console.log(input.value)
    // declaration
    const inputName = input.name
    //for empty value
    if (input.value ==='') {
        //functions for error or success
        showError(input,`❌ ${inputName}  field is empty`)
    } else{
        showSuccess(input,`✅ ${inputName} is entered`)
    }
}

// connect js to html code
function showError(input, msg){
    // uses styling from tailwind.css file
    input.nextElementSibling.innerHTML = `<small class="error">${msg}</small>`
}

//connect js to html cod
function showSuccess(input,msg) {
    input.nextElementSibling.innerHTML =`<small class="success">${msg}</small>`

}

function validatePassMatch (password, password2) {
    validateEmpty(password,password2)
    if (password.value!=='' && password.value===password2.value){
        showSuccess(password2,` Match `)
    }else {
        showError(password2,'Error! Please re-enter the password')
    }
}

function validateIsEmail (email) {
    validateEmpty(email)
    if (validateEmail(email)===true) { // return true
        showSuccess(email,`Success`)
    } else {
        showError(email, `"${email.value}" is not a valid email`)
    }
}

// check if email is true or false
function validateEmail(email) {
    const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let results = result.test(String(email.value).toLowerCase())
    console.log('test',results)
    return results
}

//
function validateMinLength (input) {
    console.log(input.value.length)
    const inputName = input.name

    if (input.value.length < 4 && input.value===password.value){
        showError(input, `${inputName} is too short`)
    } else {
        showSuccess(input,`${inputName} is long enough`)
    }
}
