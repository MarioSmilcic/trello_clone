import "./styles/board.style.css";
import BoardHeader from "./BoardHeader";
import BoardBody from "./BoardBody";
import Backdrop from "@/components/Backdrop/Backdrop";
import { useModalsStore } from "@/store/modals/modals.store";
// import { useModalsStore } from "../../store/modals/modals.store";

const Board = () => {
  const { modal } = useModalsStore();
  return (
    <div className="board">
      {modal && <Backdrop />}
      <BoardHeader />
      <BoardBody />
    </div>
  );
};

export default Board;
