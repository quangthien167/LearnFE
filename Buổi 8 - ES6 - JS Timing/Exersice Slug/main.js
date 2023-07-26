addEventListener("keyup", function(e){
    let name = document.getElementById("name").value;
    
    name = name.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    name = name.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    name = name.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    name = name.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    name = name.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    name = name.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    name = name.replace(/đ/g,"d");
    name = name.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "a");
    name = name.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "e");
    name = name.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "i");
    name = name.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
    name = name.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "u");
    name = name.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "y");
    name = name.replace(/Đ/g, "d");

    let namLength = name.length;

    for(let i = 0; i < namLength; i++){
        if(name[i] == " "){
            name = name.replace(name[i], "-");
        }
    }
        
    document.getElementById("slug").value = name.toLowerCase();
});