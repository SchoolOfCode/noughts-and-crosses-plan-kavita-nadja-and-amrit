import { useState } from "react";
import Board from "../Board";

function Game() {
   const [board, setBoard] = useState(Array(9).fill(null));
   // A state to determine who's move is it based on player X
   const [moveX, setMoveX] = useState(true);
   const [winner, setWinner] = useState();

   let currentPlayer = moveX ? "X" : "O";

   function makeMove(index) {
      if (winner) {
         return;
      } else {
         if (board[index] !== null || winner) {
            return;
         }

         // needed to create as variable, so updated board can be used in checkWinner function
         let newBoard = [
            ...board.slice(0, index),
            currentPlayer,
            ...board.slice(index + 1),
         ];

         // Update board state
         setBoard(newBoard);

         // call checkWinner function → needs to be called before moveX is toggled and with updated/current board(newBoard)
         checkWinner(currentPlayer, newBoard);

         // Toggle moveX
         setMoveX(!moveX);
      }
   }

   //TODO: JSON serializing: https://stackoverflow.com/questions/6315180/javascript-search-array-of-arrays

   function checkWinner(currentPlayer, board) {
      console.log("this is the state of the playing board", board);

      const winningCombos = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6],
      ];

      // checks if every/all values of a line in winningCombos are equal to currentPlayer value
      // won return the winning array
      let won = winningCombos.find((line) => {
         return line.every((item) => {
            return board[item] === currentPlayer;
         });
      });

      console.log("won variable", won);

      // check if won is true (i.e. not undefined) and if so sets winner state to currentPlayer
      if (won) {
         setWinner(currentPlayer);
      }
   }

   return (
      // Render board
      <>
         {moveX && !winner
            ? "Player X, it's your go!"
            : "Player O, it's your go!"}
         <Board makeMove={makeMove} board={board} />
         {winner ? <p>{winner}</p> : ""}
      </>
   );
}

export default Game;
