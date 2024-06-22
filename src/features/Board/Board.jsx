import "./styles/board.style.css";
import BoardHeader from "./BoardHeader";
import BoardBody from "./BoardBody";

const Board = () => {
  return (
    <div className="board">
      <BoardHeader />
      <BoardBody />
    </div>
  );
};

export default Board;
