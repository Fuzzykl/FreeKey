var ID = document.getElementById("InputID");
var Submit = document.getElementById("SubmitID");
var ShowKey = document.getElementById("ShowKey")
var regex = /[A-Z]+/;

function RandomKey(){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    var code = "";
    for (var i = 0; i < 40; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

function RequestKey(){
    var key = RandomKey();
    fetch(`https://thuongpro.name.vn/api/api.php?key=${key}&id_drive=${ID.value}`,{
        mode: 'no-cors'
    });
    for (var i = 2;i>0;i--){
        fetch(`https://thuongpro.name.vn/key.php?key=${key}`,{
            mode: 'no-cors'
        })
            .catch (error => {
                console.clear();
            });
    }
    ShowKey.innerHTML = `Key Của Bạn Là : <p id='Key'>${key}</p>`
}

function Run() {
    if (ID.value === ""){
        alert("Không Được Để ID Trống");
    } else if ((ID.value.trim().indexOf(" ") >= 0)||(regex.test(ID.value))||(ID.value.length < 10)){
        alert("ID Không Đúng");
    } else if (ID.value){ 
        RequestKey();
    }
};


