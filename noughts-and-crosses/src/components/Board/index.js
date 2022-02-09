import Square from "../Square";
import css from './Board.module.css';

function Board({ board, makeMove }) {

  return (
    <div className={css.board}>
      {/* Map through board */}
      {board.map((square, index) => {
        return <Square key={index} onClick={() => makeMove(index)} value={square} />
      })}
    </div>
  );
}

export default Board;
