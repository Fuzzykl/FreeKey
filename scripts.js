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
    fetch(`https://thuongpro.name.vn/api/api.php?key=${key}&id_drive=${ID.value}`);
    for (var i = 2;i>0;i--){
        var response = fetch(`https://thuongpro.name.vn/key.php?key=${key}`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "vi,en;q=0.9",
                "sec-ch-ua": "\"Microsoft Edge\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "object",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "cross-site",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://tooltranthuong.blogspot.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        });
    }
    ShowKey.innerHTML = `Key Của Bạn Là : <p class='Key'>${key}<p>`
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
