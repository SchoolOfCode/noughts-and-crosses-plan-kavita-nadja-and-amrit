import css from "./Square.module.css";

function Square({ value, onClick }) {
  // changed from <div> to <button> → "X" & "O" values are centered
   return (
      <button className={css.square} onClick={onClick}>
         {value}
      </button>
   );
}

export default Square;
