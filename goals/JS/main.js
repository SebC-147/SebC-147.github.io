function setup() {
    let logout = document.getElementById("logout");
    let goals = document.getElementById("containerGoals");

    //Logger ut brukeren
    logout.addEventListener("click", e => {
        firebase.auth().signOut();
        console.log("Logged out!")
    });

    //Viser edit knappen
    goals.addEventListener("mouseover", e => {
        let t = e.target;
        if (t.classList.contains("goals")) {
            let divID = document.getElementById(t.id);
            let edit = divID.querySelector(".icon");
            edit.hidden = false;
        } else return
    })
}