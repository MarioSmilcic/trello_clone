import { useListDrag } from "../hooks/useListDrag";
import CardWrapper from "@components/CardWrapper/CardWrapper";
import { ListHeader, CardList, ListModals, AddCard } from "./";

export const BoardList = ({ list }) => {
  const { attributes, listeners, setNodeRef, style } = useListDrag(list);

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <CardWrapper>
        <ListModals listId={list.id} listTitle={list.title} />
        <div className="board-list">
          <ListHeader
            title={list.title}
            listId={list.id}
            listeners={listeners}
          />
          <CardList cards={list.cards} listId={list.id} />
          <div className="modal-outer">
            <AddCard listId={list.id} />
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};
