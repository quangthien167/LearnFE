addEventListener("change",function(){
    var avatar = document.getElementById("avatar");
    var avatar = avatar.value;
    let img = document.getElementById("img-avt");
        avatar = avatar.replace("C:\\fakepath\\","");
        img.setAttribute('src', avatar);
});