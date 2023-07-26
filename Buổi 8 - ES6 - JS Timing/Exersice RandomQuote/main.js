const TIME = 1000;
let array = ["PHP", "Java", "JavaScript", "Golang"];
array.forEach((element,index) => {
    let rd = Math.floor(index * Math.random());
    document.getElementById("content").innerHTML = array[rd];
});

let my = setInterval(function(){
    array.forEach((element,index) =>{
        let rd = Math.floor(index * Math.random());
        document.getElementById("content").innerHTML = array[rd];
    });
}, TIME);

// clearInterval(my);