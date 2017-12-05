function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCthPxx8s3CuhednBrAOaSZpx8BXOq6Gt0",
        authDomain: "civcountries-123.firebaseapp.com",
        databaseURL: "https://civcountries-123.firebaseio.com",
        projectId: "civcountries-123",
        storageBucket: "civcountries-123.appspot.com",
        messagingSenderId: "36669970269"
    };
    firebase.initializeApp(config);

    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("kunde");

    function visKunder(snapshot) {
        let kundenr =snapshot.val();
        divListe.innerHTML += `
        <div>${land.capital}</div>
        `;
    }

   ref.on("child_added", visKunder);
}