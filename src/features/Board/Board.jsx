import { BoardHeader, BoardBody } from "./components";
import Backdrop from "@/components/Backdrop/Backdrop";
import "./styles";

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
