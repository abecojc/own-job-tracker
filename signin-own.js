
let emails = document.querySelector('#email')

let passwords = document.querySelector('#password')

const signIn = document.querySelector('#submit')

//const info = firestore.collection("userInfo")

signIn.addEventListener('click',(e)=>{
    e.preventDefault()

        let email = emails.value
        let password = passwords.value

        console.log(email)
        console.log(password)

        info.doc().set({
            email: email,
            password: password
        })
        .then(()=>{
            console.log('info saved')
        })
        .catch((error)=>{
            console.log(error)
        })
    })





