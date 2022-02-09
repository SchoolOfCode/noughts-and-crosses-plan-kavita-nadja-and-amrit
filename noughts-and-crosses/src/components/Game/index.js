import { useState } from "react";
import Board from "../Board";
import calculateWinner from "../../helper.js";

function Game() {
   // changed Array to fill with "null" 9x
   const [board, setBoard] = useState(Array(9).fill(null));
   // A state to determine who's move is it based on player X → renamed to be more semantic
   const [isXMove, setIsXMove] = useState(true);
   // winner calls calculateWinner function to check if someone has won
   // ? (happens with every re-render?)
   const winner = calculateWinner(board);
   // assigns "true"/"false" values of isXMove to "X" and "0"
   let currentPlayer = isXMove ? "X" : "O";

   function makeMove(index) {
      // checks if winner or value at array index is true
      if (winner || board[index]) {
         return;
      }

      // Update board
      setBoard([
         ...board.slice(0, index),
         currentPlayer,
         ...board.slice(index + 1),
      ]);

      // Toggle isXMove
      setIsXMove(!isXMove);
   }

   return (
      // Render board
      <>
         <h1>Tic Tac Toe</h1>
         <Board makeMove={makeMove} board={board} />
         <div className="info">
            <h3>
               {winner
                  ? `Player ${winner} you won!`
                  : `Player ${currentPlayer} it's your turn`}
            </h3>
         </div>
      </>
   );
}

export default Game;
