

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

let uiConfig = {
    signInOptions : [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: "search-own.html"
}

ui.start('#login-ui',uiConfig)


//google auth provider
let provider = new firebase.auth.GoogleAuthProvider()

let usernames = document.querySelector('#user')

let user
let logIn = document.querySelector('#login-ui')

usernames.innerHTML = `
<span class="bg-white "> Welcome ${window.localStorage.setItem('loggedInUser',user)}</span>`

logIn.addEventListener('click',()=>{
    googleSignInPopup(provider)

   console.log(googleSignInPopup)

})

 function googleSignInPopup(provider) {
  firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)

            user = result.user
            console.log(user)

            window.localStorage.setItem('loggedInUser', user)

        //
        // }).catch((error) => {
        //
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // var email = error.email;
        // var user = error.user;


    })}

//


   // }).catch((error) => {
   //
   //      var errorCode = error.code;
   //      var errorMessage = error.message;
   //      var email = error.email;
   //      var user = error.user;

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

