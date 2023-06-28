
window.onload = function(){
    var boxImg = document.getElementById('boxImg').innerHTML;
    var defaults = /src=""/igm;
    boxImg = boxImg.replace(defaults,'src="image/default.jpg"');
    document.getElementById('boxImg').innerHTML = boxImg;
} 



// let imgNull = document.querySelectorAll('img[src=""]');

// imgNull.forEach(element=>{
//     element.setAttribute('src','image/default.jpg');
// });

// let imgNull = document.getElementsByTagName('img');

// for(let i = 0; i<imgNull.length; i++){
//     if(imgNull[i].getAttribute('src') == ''){
//         imgNull[i].setAttribute('src', 'image/default.jpg');
//     }
// }