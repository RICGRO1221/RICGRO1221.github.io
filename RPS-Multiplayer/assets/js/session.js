// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDkWzRlYp7CQHUw3qyZZVHlTV94HIuq_RA",
    authDomain: "aid-code-bootcamp.firebaseapp.com",
    databaseURL: "https://aid-code-bootcamp.firebaseio.com",
    projectId: "aid-code-bootcamp",
    storageBucket: "aid-code-bootcamp.appspot.com",
    messagingSenderId: "573331983600"
  };


  firebase.initializeApp(config);

$('.log-btn').on('click', function(){
  signInWithEmailandPassword();
});


function submitCreateAccount() {
  var displayName = document.querySelector('#entry-displayname');
  var email = document.querySelector('#entry-email');
  var password = document.querySelector('entry-password');

  firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .then(function(user) {
      //add the displayName
      user.updateProfile({displayName: displayName.value});
    });
}


function signInWithEmailandPassword() {
  var email = document.querySelector("#email");
  var password = document.querySelector('#password');

  firebase.auth().signInWithEmailandPassword(email.value, password.value);
}


function googleSignin(googleUser) {
  var credential = firebase.auth.GoogleAuthProvider.credential({
      'idToken': googleUser.GoogleAuthResponse().id_token
  });
  
  firebase.auth().signInWithCredential(credential);
}


firebase.auth().onAuthStateChanged(onAuthStateChangedListener);

function authStateChangeListener(user) {
  //signin
  if(user) {
    //do login operations...
    Chat.onlogin();
    Game.onlogin();
  } else {//signout
    window.location.reload();
  }
}















// FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);

