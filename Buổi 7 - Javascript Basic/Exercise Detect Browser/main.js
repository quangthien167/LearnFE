var userAgent = navigator.userAgent;

// var bg = document.body.getElementsByClassName("bg");

var bg = document.getElementById("bg");

var browser = ["Chrome", "Firefox"];

function responsiveC(rps){
    if(rps.matches){
        bg.style.backgroundColor = "yellow";
    }else{
        bg.style.backgroundColor = "green";
    }
}

function responsiveF(rps){
    if(rps.matches){
        bg.style.backgroundColor = "yellow";
    }else{
        bg.style.backgroundColor = "red";
    }
}

var rps = window.matchMedia("(max-width: 992px)");
for (x in browser){
    var patt = new RegExp(browser[x], "igm");
    if(patt.test(userAgent) == true){
        
        if(browser[x] == "Chrome"){
            responsiveC(rps);
            rps.addEventListener("change",responsiveC);
        }
        if(browser[x] == "Firefox"){
            responsiveF(rps);
            rps.addEventListener("change",responsiveF);
        }
       break;
    }
}