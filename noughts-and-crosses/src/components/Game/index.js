import { useState } from "react";
import Board from "../Board";

const winningCombos = JSON.stringify([
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
]);

function Game() {
   const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
   // A state to determine who's move is it based on player X
   const [moveX, setMoveX] = useState(true);
   let currentPlayer = moveX ? "X" : "O";

   let arrayX = [];
   let arrayO = [];

   function makeMove(index) {
      if (board[index] !== "") {
         return;
      }
      // Update board
      setBoard([
         ...board.slice(0, index),
         currentPlayer,
         ...board.slice(index + 1),
      ]);
      // Toggle moveX
      setMoveX(!moveX);
      checkWinner();
   }

   function checkDraw() {
      if (
         board.every((number) => {
            return number !== "";
         })
      ) {
         console.log("It's a draw!");
      }
   }

   function checkWinner() {
      board.reduce(function (arrayX, e, i) {
         if (e === "X") {
            arrayX.push(i);
         }
         return arrayX;
      }, []);

      board.reduce(function (arrayO, e, i) {
         if (e === "X") {
            arrayO.push(i);
         }
         return arrayO;
      }, []);

      // Check if player X is the winner
      let winnerX = winningCombos.indexOf(JSON.stringify(arrayX));
      if (winnerX === 1) {
         return "Player 'X', you are the winner!";
      }

      if (winnerX === -1) {
         let winnerO = winningCombos.indexOf(JSON.stringify(arrayO));
         if (winnerO === 1) {
            return "Player 'O', you are the winner!";
         }
         // If no winner is found then return
         // Check for a draw
         checkDraw();
         return;
      }
   }
   return (
      // Render board
      <>
         {moveX ? "Player X, it's your go!" : "Player O, it's your go!"}
         <Board makeMove={makeMove} board={board} />
      </>
   );
}

export default Game;
