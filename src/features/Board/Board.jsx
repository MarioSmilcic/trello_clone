import { useState, useEffect } from "react";

import { BoardHeader, BoardContainer } from "./components";
import Backdrop from "@/components/Backdrop/Backdrop";
import "./styles";
import { useListsSync } from "@/hooks/useListsSync";
import { useListstore } from "@/store/lists/lists.store";

const Board = () => {
  const [isLoading, setIsLoading] = useState(true);
  const lists = useListstore((state) => state.lists);
  useListsSync();

  useEffect(() => {
    // Set loading to false once lists are loaded
    setIsLoading(false);
  }, [lists]);

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <div className="board">
      <Backdrop />
      <BoardHeader />
      <BoardContainer />
    </div>
  );
};

export default Board;
