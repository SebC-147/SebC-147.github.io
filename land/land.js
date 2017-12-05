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
    let ref = firebase.database().ref("nations");

    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.capital}
             <li>${info.title} ${info.leader}
             <li> Perks
                <ul>
                    <li> Money: ${info.perk.money}
                    <li> Move: ${info.perk.move}
                    <li> War: ${info.perk.war}
                    <li> Science: ${info.perk.science}
                </ul>
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visLand);

}