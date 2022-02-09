import { useState } from "react";
import Board from "../Board";
import calculateWinner from "../../helper.js";

// const winningCombos = JSON.stringify([
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ]);

function Game() {
   const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
   // A state to determine who's move is it based on player X
   const [moveX, setMoveX] = useState(true);
   const [winner, setWinner] = useState("");

   let currentPlayer = moveX ? "X" : "O";

   function makeMove(index) {
      if (winner) {
         return;
      } else {
         console.log("This is the index", index);
         if (board[index] !== "" || winner) {
            return;
         }
         // Update board
         setBoard([
            ...board.slice(0, index),
            currentPlayer,
            ...board.slice(index + 1),
         ]);
         checkWinner();
         console.log(winner);
         // Toggle moveX
         setMoveX(!moveX);
      }
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
      const arrayX = board.reduce(function (arrayX, e, i) {
         if (e === "X") {
            arrayX.push(i);
         }
         return arrayX;
      }, []);

      const arrayO = board.reduce(function (arrayO, e, i) {
         if (e === "O") {
            arrayO.push(i);
         }
         return arrayO;
      }, []);

      console.log("This is arrayX", arrayX);
      console.log("This is arrayO", arrayO);

      // Check if player X is the winner
      let winnerX = winningCombos.indexOf(JSON.stringify(arrayX));
      console.log("Value of winnerx", winnerX);
      if (winnerX !== -1) {
         setWinner("Player 'X', you are the winner!");
      }

      if (winnerX === -1) {
         let winnerO = winningCombos.indexOf(JSON.stringify(arrayO));
         if (winnerO === 1) {
            setWinner("Player 'O', you are the winner!");
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
         {moveX && !winner
            ? "Player X, it's your go!"
            : "Player O, it's your go!"}
         <Board makeMove={makeMove} board={board} />
         {winner ? <p>{winner}</p> : ""}
      </>
   );
}

export default Game;
