let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";
let choice = "";

let alum_pipes = document.getElementById("Aluminum_pipes");
let boards = document.getElementById("Boards");
let floor_til = document.getElementById("Floor_tiles");

alum_pipes.addEventListener("click", function(){
    item = "Aluminum pipes";
});

boards.addEventListener("click", function(){
    item = "Boards";
});

floor_til.addEventListener("click", function(){
    item = "Floor tiles";
});

btn1.addEventListener("click", () => {
   
    let data = {
        name: "Al",
    }
    tg.sendData(JSON.stringify(data));

    tg.close()
});


