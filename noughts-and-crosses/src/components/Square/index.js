import css from './Square.module.css';

function Square({ value, makeMove, id }) {
  function handleClick() {
    makeMove(id, value)
  }
  return <div className={css.square} onClick={handleClick}>{value}</div>;
}

export default Square;
