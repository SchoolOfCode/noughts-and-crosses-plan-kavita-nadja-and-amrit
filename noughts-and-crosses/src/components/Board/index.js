import Square from "../Square";
import { nanoid } from "nanoid";
import css from './Board.module.css';

// const board = [null, null, null, null, null, null, null, null, null];
function Board({ board, makeMove }) {

  return (
    <div className={css.board}>
      {/* Map through board */}
      {board.map((square, index) => {
        return <Square id={index} makeMove={makeMove} value={square} />
      })}
    </div>
  );
}

export default Board;
