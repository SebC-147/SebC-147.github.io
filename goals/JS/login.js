function setup() {
    let inpEmail = document.getElementById("email");
    let inpPass = document.getElementById("pass");
    let btnLogin = document.getElementById("login");
    let btnSignup = document.getElementById("signup");
    let divMessage = document.getElementById("message");

    btnLogin.addEventListener("click", login);
    btnSignup.addEventListener("click", signup);

    //Logger inn brukeren
    function login() {
        let email = inpEmail.value;
        let pass = inpPass.value;
        let auth = firebase.auth();
        let promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => divMessage.innerHTML = e.message);
    }

    //Oppretter en konto til brukeren og logger den inn
    function signup() {
        let email = inpEmail.value;
        let pass = inpPass.value;
        let auth = firebase.auth();
        let promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => divMessage.innerHTML = e.message);
    }

    //En listener som ser etter endringer i innloggings statusen
    firebase.auth().onAuthStateChanged(firebaseUser => {
        var user = firebase.auth().currentUser;
        if (user != null) {
            window.location.href = "../HTML/main.html";
            console.log("Logged in!");
        }
    })

}
