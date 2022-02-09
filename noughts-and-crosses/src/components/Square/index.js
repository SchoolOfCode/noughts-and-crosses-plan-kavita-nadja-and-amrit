import css from './Square.module.css';

function Square({ value, handleClick}) {
  
  return <div className={css.square} onClick={handleClick}>{value}</div>;
}

export default Square;
