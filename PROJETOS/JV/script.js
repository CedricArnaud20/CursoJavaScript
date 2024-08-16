let x = document.querySelector(".x")
let O = document.querySelector(".O")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#button-container button");
let messageContainer = document.querySelector("#messsage")
let messageText = document.querySelector("#message p")
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;


// adicionando o eventode click ao boxes

for (let i = 0; i < boxes.length; i++) {

    
    boxes[i].addEventListener("click", function(){

        let el = checkEl(player1, player2);


        //verifica se ja tem X ou 0 
        if (this.childNodes.length == 0) {
            
            let cloneEl = el.cloneNode(true);
    
            this.appendChild(cloneEl)
        
            //computar jogada 
            if (player1 == player2) {
                player1 ++
            } else {
                player2++
            }   
    
        }
    

    })

    

}
function checkEl(player1, player2) {

    if (player1 == player2) {
        // x
        el = x
    }else {
        el = O; 
    }

    return el;
}   
