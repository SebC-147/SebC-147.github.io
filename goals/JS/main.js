let email;
let home;

function setup() {
    let logout = document.getElementById("logout");
    let goals = document.getElementById("containerGoals");
    let btnDaily = document.getElementById("setDaily");
    let inpDaily = document.getElementById("dailyGoal");
    let divDaily = document.getElementById("daily");
    let checklist = document.getElementById("dailyList");

    let goal;
    let dailyArray;

    //Referanse til dailyArray


    let types = ["day", "week", "month", "year"];

    //Henter inn brukeren og målene
    firebase.auth().onAuthStateChanged(firebaseUser => {
        var user = firebase.auth().currentUser;
        if (user) {
            name = user.displayName;
            email = user.email;
            uid = user.uid;
        } else console.log("Ingen bruker")
        setName(email);
        let firestore = firebase.firestore();
        let docRef = firestore.collection("users").doc(`${uid}`);
        docRef.get().then(function (doc) {
            dailyArray = doc.data().dailyGoals;
            updateGoals(dailyArray)
        });
    });

    //Viser edit knappen
    goals.addEventListener("mouseover", e => {
        let t = e.target;
        if (t.classList.contains("goals")) {
            let divID = document.getElementById(t.id);
            let edit = divID.querySelector(".icon");
            edit.hidden = false;
            divID.addEventListener("mouseleave", e => {
                edit.hidden = true;
            });
        } else return;
    });

    //Viser editoren av mål
    goals.addEventListener("click", e => {
        let t = e.target;
        for (let i = 0; i < types.length; i++) {
            if (types[i] === t.id) {
                goal = t.id;
                visEditor(goal);
            } else return;
        }

        function visEditor(e) {
            let goal = `${e}Editor`;
            let editor = document.getElementById(goal);
            if (editor.hidden === false) {
                editor.hidden = true;
            } else {
                editor.hidden = false;
            }
        }
    });

    //Lager nye mål i daily
    btnDaily.addEventListener("click", e => {
        let goal = inpDaily.value;
        let dailyLength = dailyArray.length
        if (dailyLength >= 6) {
            console.log("For mange mål!")
        } else {
            var user = firebase.auth().currentUser.uid;
            let firestore = firebase.firestore();
            let docRef = firestore.collection("users").doc(`${user}`);
            docRef.update({
                dailyGoals: firebase.firestore.FieldValue.arrayUnion(goal)
            }).then(function () {
                console.log("Saved!");
                docRef.get().then(function (doc) {
                    dailyArray = doc.data().dailyGoals;
                    checklist.innerHTML = "";
                    updateGoals(dailyArray);
                });
            }).catch(function (error) {
                console.log("Error with save", error);
            })
        }
    });

    //Setter inn målene til brukeren
    function updateGoals() {
        for (let i = 0; i < dailyArray.length; i++) {
            checklist.innerHTML += `
                <li class="list" id="daily${i}">${dailyArray[i]}</li>
                `
        };
    };

    //Sletter mål
    divDaily.addEventListener("click", e => {
        let t = e.target;
        if (t.classList.contains("list")) {
            let div = document.getElementById(t.id);
            let finished = div.innerText;
            console.log(finished);
            var user = firebase.auth().currentUser.uid;
            let firestore = firebase.firestore();
            let docRef = firestore.collection("users").doc(`${user}`);
            docRef.update({
                dailyGoals: firebase.firestore.FieldValue.arrayRemove(`${finished}`)
            }).then(function () {
                console.log("Deleted!");
                docRef.get().then(function (doc) {
                    dailyArray = doc.data().dailyGoals;
                    checklist.innerHTML = "";
                    updateGoals(dailyArray);
                });
            }).catch(function (error) {
                console.log("Error with delete", error);
            });
        }
    });

    //Setter emailen til brukeren i homebar
    function setName() {
        home = document.getElementById("bar");
        home.setAttribute("username", email);
    }

    //Logger ut brukeren
    logout.addEventListener("click", e => {
        firebase.auth().signOut();
        console.log("Logged out!")
    });
}

