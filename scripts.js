var ID = document.getElementById("InputID");
var Submit = document.getElementById("SubmitID");
var ShowLink = document.getElementById("ShowLink")
var regex = /[A-Z]+/;

function RandomKey(){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    var code = "";
    for (var i = 0; i < 40; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

function RequestKey(key){
    var Url = `https://thuongpro.name.vn/api/api.php?key=${key}&id_drive=${ID.value}`;
    fetch(Url);
    var KeyUrl = `https://tooltranthuong.blogspot.com/p/key_25.html?key=${key}`;
    ShowLink.innerHTML = `Link Key Của Bạn Đã Được Tạo <a class='Link' href=${KeyUrl}>Ở Đây<a>`;
}
function Run() {
    if (ID.value === ""){
        alert("Không Được Để ID Trống");
    } else if ((ID.value.trim().indexOf(" ") >= 0)||(regex.test(ID.value))||(ID.value.length < 10)){
        alert("ID Không Đúng");
    } else if (ID.value){ 
        var Key = RandomKey();
        RequestKey(Key);
    }
};
