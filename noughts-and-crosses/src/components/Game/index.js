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
         // Update board
         let newBoard = [
            ...board.slice(0, index),
            currentPlayer,
            ...board.slice(index + 1),
         ];

         setBoard(newBoard);

         checkWinner(currentPlayer, newBoard);

         // Toggle moveX
         setMoveX(!moveX);
      }
   }

   //TODO: JSON serializing: https://stackoverflow.com/questions/6315180/javascript-search-array-of-arrays

   function checkWinner(currentPlayer, board) {
      // kinda working with 2 turn delay and console log of winningCombo line only 🍌
      console.log("this is the state of the playing board", board);
      // FIXME: → function is not called at correct position (state of board is 9x after the first player move; should already have a changed value)
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

      let won = winningCombos.find((line) => {
         // returns true once all values in one line of winningCombos match
         return line.every((item) => {
            return board[item] === currentPlayer;
         });
      });
      console.log("won variable", won);

      if (won) {
         setWinner(currentPlayer);
      }
      //return { won, currentPlayer };
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
