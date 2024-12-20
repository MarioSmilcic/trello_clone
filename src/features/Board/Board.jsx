import { BoardHeader, BoardContainer } from "./components";
import Backdrop from "@/components/Backdrop/Backdrop";
import "./styles";
import { useListsSync } from "@/hooks/useListsSync";

const Board = () => {
  useListsSync();
  return (
    <div className="board">
      <Backdrop />
      <BoardHeader />
      <BoardContainer />
    </div>
  );
};

export default Board;

// import { BoardHeader, BoardContainer } from "./components";
// import Backdrop from "@/components/Backdrop/Backdrop";
// import "./styles";

// const Board = () => {
//   return (
//     <div className="board">
//       <Backdrop />
//       <BoardHeader />
//       <BoardContainer />
//     </div>
//   );
// };

// export default Board;
