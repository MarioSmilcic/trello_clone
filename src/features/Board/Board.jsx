import { useState, useEffect } from "react";
import { useListstore } from "@/store/lists/lists.store";
import { BoardHeader, BoardContainer } from "./components";
import Backdrop from "@/components/Backdrop/Backdrop";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import "./styles";

const Board = () => {
  const lists = useListstore((state) => state.lists);
  const fetchLists = useListstore((state) => state.fetchLists);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeLists = async () => {
      if (lists.length === 0) {
        await fetchLists(); // Wait for fetchLists to complete
      }
      setIsLoading(false); // Set loading to false after fetching lists
    };

    initializeLists();
  }, [lists, fetchLists]);

  if (isLoading) {
    return <LoadingSpinner />;
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
