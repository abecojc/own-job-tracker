

const provider = new firebase.auth.GoogleAuthProvider();

let usernames = document.querySelector('#user-name')

let user;
usernames.innerHTML = `Welcome${window.localStorage.setItem('loggedInUser',user.f_name)}`

let logIn = document.querySelector('#login')
logIn.addEventListener(()=>googleSignInPopup)

function googleSignInPopup(provider) {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
             user = result.user
            window.localStorage.setItem('loggedInUser', user.f_name)

    })}



// }).catch((error) => {
//
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     var email = error.email;
//     var credential = error.credential;
//

// function googleSignInPopup(provider) {
//     // [START auth_google_signin_popup]
//     firebase.auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//             /** @type {firebase.auth.OAuthCredential} */
//             var credential = result.credential;
//
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             // ...
//         }).catch((error) => {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//     })}

