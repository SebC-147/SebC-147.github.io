var mainApp = {};

(function () {
  var firebase = app_firbase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      uid = user.uid;
    } else {
      window.location.replace("login.html");
      uid = null;
    }
  });
  function logOut() {
    firebase.auth().signOut();
  }

  mainApp.logOut = logOut;
})()