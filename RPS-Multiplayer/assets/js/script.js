

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