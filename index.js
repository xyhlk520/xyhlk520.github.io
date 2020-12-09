let current = "O";
let boxes = document.getElementsByClassName("box");
let game_status = "on";
let message = document.getElementById("message");
let moves = ["","","","","","","","",""];
message.innerHTML = "O first"; 
for( let i = 0; i< boxes.length; i++)
{
    boxes[i].addEventListener("click",function(e)
    {
        if(boxes[i].innerHTML == "" && game_status =="on")
        {
            boxes[i].innerHTML = current;
            moves[i] = current;
            current = current == "O" ? "X"  : "O";
            message.innerHTML = "Current Player " + current + "'s Turn";
            if (boxes[0].innerHTML == boxes[1].innerHTML &&
                boxes[1].innerHTML == boxes[2].innerHTML &&
                boxes[0].innerHTML != "")
                {
                Result(0, 1, 2);
                } 
                else if (boxes[3].innerHTML == boxes[4].innerHTML &&
                         boxes[4].innerHTML == boxes[5].innerHTML &&
                         boxes[3].innerHTML!= "") 
                {
                Result(3, 4, 5);
                } 
                else if (boxes[6].innerHTML == boxes[7].innerHTML &&
                         boxes[7].innerHTML == boxes[8].innerHTML &&
                         boxes[6].innerHTML!= "") 
                {
                Result(6, 7, 8);
                } 
                else if (boxes[0].innerHTML == boxes[3].innerHTML &&
                         boxes[3].innerHTML == boxes[6].innerHTML &&
                         boxes[0].innerHTML!= "") 
                {
                Result(0, 3, 6);
                } 
                else if (boxes[1].innerHTML == boxes[4].innerHTML &&
                         boxes[4].innerHTML == boxes[7].innerHTML &&
                         boxes[1].innerHTML!= "") 
                {
                Result(1, 4, 7);
                } 
                else if (boxes[2].innerHTML == boxes[5].innerHTML &&
                         boxes[5].innerHTML == boxes[8].innerHTML &&
                         boxes[2].innerHTML!= "") 
                {
                Result(2, 5, 8);
                } 
                else if (boxes[0].innerHTML == boxes[4].innerHTML &&
                         boxes[4].innerHTML == boxes[8].innerHTML &&
                         boxes[0].innerHTML!= "") 
                {
                Result(0, 4, 8);
                } 
                else if (boxes[2].innerHTML == boxes[4].innerHTML &&
                         boxes[4].innerHTML == boxes[6].innerHTML &&
                         boxes[2].innerHTML!= "") 
                {
                Result(2, 4, 6);
                }
                else if(!moves.includes(""))
                {
                    game_status = "off";
                    alert("Draw");
                    message.innerHTML = "DRAW";
                }
        }
    });
}

document.getElementById("reset_button").addEventListener("click",function()
{
    for( let i = 0; i< boxes.length; i++)
    {
        boxes[i].innerHTML = "";
        current = "O";
        game_status = "on";
        message.innerHTML = "O first";
        moves = ["","","","","","","","",""];
    }
})
function Result(a, b, c) {
    game_status = "off";
    current = current == "O" ? "X"  : "O";
    message.innerHTML = "Game is over. Winner is " + current;
    alert("Game is over. Winner is " + current);
  }
