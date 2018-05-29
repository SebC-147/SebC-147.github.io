function remove() {
    
    let database = firebase.database();

    let ref = firebase.database().ref("cart");
    let btnDelete = document.getElementById("delete");
    btnDelete.addEventListener("click", Delete);

    function Delete(e) {
        ref.remove();
        location.reload();
    }
}