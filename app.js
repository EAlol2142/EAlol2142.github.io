let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";
let choice = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function(){
    item = "1";
    choice = btn1;
});

btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали 2 кнопку");
        item = "2";
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали 3 кнопку");
        item = "3";
        tg.MainButton.show();
    }
});

btn1.addEventListener("click", () => {
   
    let data = {
        name: "name",
    }
    tg.sendData(JSON.stringify(data));

    tg.close()
});

// Telegram.WebApp.onEvent("mainButtonClicked", function(){
//     tg.sendData(item);
// });

