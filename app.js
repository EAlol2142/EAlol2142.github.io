let tg = window.Telegram.WebApp;

tg.expand();

window.onload = () => {
    const uploadFile = document.getElementById('upload_file');
    const uploadBtn = document.getElementById('upload_btn');

    uploadBtn.addEventListener('click', function () {
        uploadFile.click();
    });

    uploadFile.addEventListener('change', function () {
        if(uploadFile.value) {
            uploadBtn.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
        }else {
            uploadBtn.innerText = 'Файл не выбран'
        }
    });
}









tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";
let choice = "";

let btn_pipe = document.getElementById("pipe");
let btn_les = document.getElementById("les");
let btn_plitka = document.getElementById("plitka");
let btn_ugol = document.getElementById("ugol");

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

