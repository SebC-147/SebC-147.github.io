//@ts-check

function hide() {
    document.getElementById("navContainer").hidden = false;
}

class HomeBar extends HTMLElement {
    constructor() {
        super();
        const username = this.getAttribute("username") || "Name";
        this._root = this.attachShadow({ mode: "open" });
        this._root.innerHTML = `
        <div id="home">
        <svg onclick="hide();" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          <a href="../HTML/main.html"><img src="../Media/goals_logo.jpg" width="140px" height="50px"></a>
          <div id="username">${username}</div>
        </div>
            <style>
              #home {
                  display: grid;
                  align-items: center;
                  grid-template-columns: 1fr 1fr 1fr;
                  height: 15vh;
                  background-color: white;
                  color: rgb(48, 83, 144);
                  overflow:hidden;
              }
              #home > div {
                  font-size: 1.2em;
                  height: 32px;
                  padding: 5px;
                  text-align: center;
              }
              #home > a > img {
                  transform: translateX(100%);
              }
              #home > svg{
                position: relative;
                left: calc(50% - 18px);
                fill: rgb(48,83,144);
                cursor: pointer;
              }

              #home > svg:hover{
                  fill: #1b1b1b;
              }
            </style>
          `;
    }
    static get observedAttributes() {
        return ["username"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this._root.querySelector("#" + name).innerHTML = newValue;
    }
}
window.customElements.define("home-bar", HomeBar);