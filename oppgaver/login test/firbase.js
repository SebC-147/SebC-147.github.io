var app_firbase = {};
(function(){


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBxBiUHNm_9_REoXUl0mLtP0ZxT2Sm2qNY",
    authDomain: "login-test-f467d.firebaseapp.com",
    databaseURL: "https://login-test-f467d.firebaseio.com",
    projectId: "login-test-f467d",
    storageBucket: "login-test-f467d.appspot.com",
    messagingSenderId: "347819634120"
  };
  firebase.initializeApp(config);

  app_firbase = firebase;
})()