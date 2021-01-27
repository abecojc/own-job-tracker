const firebaseConfig = {
    apiKey: "AIzaSyCk3Eni5C7tY-k_4MVLvrtSgTU3gvyGmf0",
    authDomain: "own-job-tracker.firebaseapp.com",
    projectId: "own-job-tracker",
    storageBucket: "own-job-tracker.appspot.com",
    messagingSenderId: "873534015254",
    appId: "1:873534015254:web:53adf9f10d79a940e73237"
}
const firestore = firebase.firestore()
// const info = firestore.collection("userInfo")

firebase.initializeApp(firebaseConfig)

const info = firestore.collection("userInfo")

form.addEventListener('submit',async (e)=>{
    e.preventDefault()

    let email = emails.value
    let password = passwords.value

    console.log(email)
    console.log(password)

    await info.doc().set({
        email: email,
        password: password
    })
    console.log(info.doc().value)

        .then(()=>{
            console.log('info saved')
        })
        .catch((error)=>{
            console.log(error)
        })
})
//