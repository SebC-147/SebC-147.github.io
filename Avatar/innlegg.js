function setup() {
    var config = {
        apiKey: "AIzaSyCMy3FBp4ppM3XvIOxNmo06ZBy1yjPHiEg",
        authDomain: "webchat-787a6.firebaseapp.com",
        databaseURL: "https://webchat-787a6.firebaseio.com",
        projectId: "webchat-787a6",
        storageBucket: "webchat-787a6.appspot.com",
        messagingSenderId: "337200762092"
      };
      firebase.initializeApp(config);
      let divInnlegg = document.getElementById("innlegg");
      
    let ref = firebase.database().ref("innlegg");
      
    function visInnlegg(snapshot) {
        let medlemNr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
        <div>
            <ul>
                <li>${info.fornavn} :
                <li>${info.melding}
            </ul>
        </div>
        `;
    }
}