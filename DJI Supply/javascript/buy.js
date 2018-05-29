function buy() {

    let database = firebase.database();

    let inpUsers = document.getElementById("email")
    let inpProduct = document.getElementsByClassName("product");
    let inpPrice = document.getElementsByClassName("price");

    let btnOrder = document.getElementById("order");
    btnOrder.addEventListener("click", Order);
    
    function Order(e) {
        let users = inpUsers.value;
        let product = inpProduct.value;
        let price = inpPrice.value;
        let ref = database.ref("orders/" + users);
        ref.set({ product ,price});
        alert("Order complete");
    }
}