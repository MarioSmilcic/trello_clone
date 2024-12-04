import { BoardHeader, BoardContainer } from "./components";
import Backdrop from "@/components/Backdrop/Backdrop";
import "./styles";

const Board = () => {
  return (
    <div className="board">
      <Backdrop />
      <BoardHeader />
      <BoardContainer />
    </div>
  );
};

export default Board;
