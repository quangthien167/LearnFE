window.onload = function(){
    var cards = document.getElementById("cards");
    var card = document.body.getElementsByClassName("card");

    cards.style.display = "flex";
    

    if(card.length > 0){
        for(var i = 0; i < card.length; i++){
           if(i % 2 != 1){
                card.item(i).style.backgroundColor = "red";
           }else{
                card.item(i).style.backgroundColor = "yellow";
           }
        }
    }
}