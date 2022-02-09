import css from './Square.module.css';

function Square({ value, onClick }) {
  return <div className={css.square} onClick={onClick}>{value}</div>;
}

export default Square;
