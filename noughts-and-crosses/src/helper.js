// check winner functionality

function calculateWinner(squares) {
   const winningCombos = [
      // horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonal
      [0, 4, 8],
      [2, 4, 6],
   ];

   for (let i = 0; i < winningCombos.length; i++) {
      // assigns
      const [a, b, c] = winningCombos[i];
      console.log("this is my varArray", [a, b, c]);

      if (
         squares[a] && // check if squares[a] is true (i.e. not null)
         squares[a] === squares[b] && // check if values of squares a & b are the same
         squares[a] === squares[c] // check if values of squares a & c are the same
      ) {
         return squares[a]; // returns value of square at index a (so "X" or "O")
      }
   }
   return null;
}

export default calculateWinner;
