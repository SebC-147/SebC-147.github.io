function setup() {
    let divSky = document.getElementById("sky");
    let stars = divSky.querySelectorAll(".star");
    stars.forEach( stjerne => {
        stjerne.style.left = Math.floor(Math.random()*20) + "px";
        stjerne.style.top = Math.floor(Math.random()*20) + "px";
    })

    divSanta.addEventListener("click , dropgifts");

    function dropGifts(e){
        let pakke = document.createElement('div');
        pakke.classeName = "pakke";
        pakke.style.left = e.screenX + "px";
        divSky.appendChild(pakke);
    }
}