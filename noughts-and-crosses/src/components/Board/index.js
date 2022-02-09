import Sqaure from "../Square";
import { nanoid } from "nanoid";
const board = [null, null, null, null, null, null, null, null, null];
function Board({ move }) {
  return (
    <div>
      <Sqaure />
      <Sqaure />
      <Sqaure />
      <Sqaure />
      <Sqaure />
      <Sqaure />
      <Sqaure />
      <Sqaure />
      <Sqaure />
    </div>
  );
}

export default Board;
