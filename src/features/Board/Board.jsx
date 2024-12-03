import "./styles/board.style.css";
import BoardHeader from "./BoardHeader";
import BoardBody from "./BoardBody";
import Backdrop from "@/components/Backdrop/Backdrop";

const Board = () => {
  return (
    <div className="board">
      <Backdrop />
      <BoardHeader />
      <BoardBody />
    </div>
  );
};

export default Board;
