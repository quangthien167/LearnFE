
window.onload = function(){
    var lineheight = document.getElementById("frontend");

    lineheight.style.lineHeight = 2;

    var str = document.getElementById("frontend").innerHTML;
    
    var patt = /frontend/igm;
    str = str.replace(patt,"<mark>Frontend</mark>");
    document.getElementById("frontend").innerHTML = str;
    //document.write(str);
}
