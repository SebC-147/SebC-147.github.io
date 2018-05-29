function setup() {
    var config = {
        apiKey: "AIzaSyBUurfxvzdT5NBrVndYfOd02Hvphw0XDEA",
        authDomain: "dji-supply.firebaseapp.com",
        databaseURL: "https://dji-supply.firebaseio.com",
        projectId: "dji-supply",
        storageBucket: "dji-supply.appspot.com",
        messagingSenderId: "587796609555"
    };
    firebase.initializeApp(config);

    let database = firebase.database();

    let inpProduct = document.getElementsByClassName("product");
    let inpPrice = document.getElementsByClassName("price");
    var counter = 0;

    let btnATC = document.getElementsByClassName("ATC");
    btnATC[0].addEventListener("click", ATC1);
    btnATC[1].addEventListener("click", ATC2);
    btnATC[2].addEventListener("click", ATC3);
    btnATC[3].addEventListener("click", ATC4);
    
    function ATC1(e) {
        let products = counter += 1;
        let product = inpProduct[0].value;
        let price = inpPrice[0].value;
        let ref = database.ref("cart/" + products);
        ref.set({ product ,price});
        alert("Added to cart!");
    }

    function ATC2(e) {
        let products = counter += 1;
        let product = inpProduct[1].value;
        let price = inpPrice[1].value;
        let ref = database.ref("cart/" + products);
        ref.set({ product ,price});
        alert("Added to cart!");
    }

    function ATC3(e) {
        let products = counter += 1;
        let product = inpProduct[2].value;
        let price = inpPrice[2].value;
        let ref = database.ref("cart/" + products);
        ref.set({ product ,price});
        alert("Added to cart!");
    }

    function ATC4(e) {
        let products = counter += 1;
        let product = inpProduct[3].value;
        let price = inpPrice[3].value;
        let ref = database.ref("cart/" + products);
        ref.set({ product ,price});
        alert("Added to cart!");
    }
}