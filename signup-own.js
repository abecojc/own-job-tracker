
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
    if(!validateEmpty(username) &&
    !validateEmpty(email) &&
    !validateEmpty(password) &&
    !validateEmpty(password2)){

        validateIsEmail(email)
        validateMinLength (password)
        validateMinLength (password2)
        validatePassMatch(password,password2)
    }


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
