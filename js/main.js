var closeChat = document.querySelector("#chat .close-chat")
var miniChat = document.querySelector(".mini-chat")
var chat = document.querySelector("#chat")
var myInp = document.querySelector(".message-box")
var main = document.querySelector("main")
closeChat.onclick = function () {
    chat.classList.remove("active")
}
miniChat.onclick = function () {
    chat.classList.add("active")
}
// keypress , keydown , keyup
myInp.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        if (myInp.value.trim() != "") {
            if (myInp.value[0].toUpperCase() == myInp.value[0]) {
                // console.log(myInp.value);
                var msDiv = document.createElement("div")
                msDiv.className = "message support"
                var ptag = document.createElement("p")
                ptag.innerText = myInp.value

                msDiv.appendChild(ptag)
                main.appendChild(msDiv)
                var pTime = document.createElement("p")
                pTime.className = "time"
                var dt = new Date()
                // console.log(dt);
                pTime.innerText = dt.getHours() + ":" + dt.getMinutes()
                msDiv.appendChild(pTime)
                myInp.value = " "
            } else {
                var msDiv = document.createElement("div")
                msDiv.className = "message user"
                var ptag = document.createElement("p")
                ptag.innerText = myInp.value

                msDiv.appendChild(ptag)
                main.appendChild(msDiv)
                var pTime = document.createElement("p")
                pTime.className = "time"
                var dt = new Date()
                // console.log(dt);
                pTime.innerText = dt.getHours() + ":" + dt.getMinutes()
                msDiv.appendChild(pTime)
                myInp.value = " "
            }
            main.scrollTop = main.scrollHeight
        }


    }
})