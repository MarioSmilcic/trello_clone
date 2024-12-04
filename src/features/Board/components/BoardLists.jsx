import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { BoardList } from "./";

export const BoardLists = ({ lists, listsId }) => {
  return (
    <SortableContext items={listsId} strategy={horizontalListSortingStrategy}>
      {lists.map((list) => (
        <BoardList key={list.id} list={list} />
      ))}
    </SortableContext>
  );
};
