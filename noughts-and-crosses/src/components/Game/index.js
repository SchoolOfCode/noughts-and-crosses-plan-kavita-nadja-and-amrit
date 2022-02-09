import { useState } from "react";

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function Game() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [move, setMove] = useState(false);

  function makeMove(index, value) {
    if (board[index] !== "") {
      return;
    }
    board[index] = value;
  }

  function checkWinner(){
      board.reduce(function(arrayX,e,i){
          if(e === "X"){
              arrayX.push(i)
          }
          return arrayX
      }, [])
    
      if winningCombos.find(arrayX) 
      
      board.reduce(function(arrayO,e,i){
        if(e === "X"){
            arrayO.push(i)
        }
        return arrayO
    }, [])
  }

}
