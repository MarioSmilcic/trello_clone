import "./styles/board.style.css";
import BoardHeader from "./BoardHeader";
import BoardBody from "./BoardBody";
import Backdrop from "./components/Backdrop/Backdrop";
import { useModalsStore } from "../../store/modals/modals.store";

const Board = () => {
  const { isBackdrop } = useModalsStore();
  return (
    <div className="board">
      {isBackdrop && <Backdrop />}
      <BoardHeader />
      <BoardBody />
    </div>
  );
};

export default Board;
