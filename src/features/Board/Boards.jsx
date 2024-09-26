import React from "react";
import "./styles/boards.style.css";
import { useBoardsStore } from "../../store/boards/boards.store";

const Boards = () => {
  const { boards } = useBoardsStore();
  console.log(boards);
  return (
    <div className="boards">
      <div className="boards-outer">
        <div className="create-board">
          <h3>Create Board</h3>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" />
            {/* <input type="color" /> */}
          </div>
          <div>
            <label htmlFor="color">Color</label>
            {/* <input type="text" id="title" /> */}
            <input type="color" id="color" />
          </div>
        </div>
        <div className="yourBoards">
          Your boards
          <div>
            {boards.map((board) => (
              <div key={board.id}>{board.title}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boards;
