var app_firbase = {};
(function(){


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBUurfxvzdT5NBrVndYfOd02Hvphw0XDEA",
    authDomain: "dji-supply.firebaseapp.com",
    databaseURL: "https://dji-supply.firebaseio.com",
    projectId: "dji-supply",
    storageBucket: "dji-supply.appspot.com",
    messagingSenderId: "587796609555"
  };
  firebase.initializeApp(config);

  app_firbase = firebase;
})()