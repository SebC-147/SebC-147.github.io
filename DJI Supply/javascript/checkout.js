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

    let list = document.getElementById("list");
    let ref = firebase.database().ref("cart");
    ref.on("child_added", cart);

    function cart(snapshot) {
        let products = snapshot.key;
        let info = snapshot.val();
        list.innerHTML += `
          <div class="info">
            <div><h3>Product : </h3><input type="text" class="product" value="${info.product}"></div>
            <div><h3>Price : </h3><input type="text" class="price" value="${info.price}"></div>
          </div>
        `;
    }
}