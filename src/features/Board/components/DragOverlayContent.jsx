import { Card, BoardList } from "./";

export const DragOverlayContent = ({ activeItem }) => {
  if (!activeItem) return null;

  return activeItem.cards ? (
    <BoardList list={activeItem} />
  ) : (
    <Card
      card={activeItem}
      listId={activeItem.listId}
      cardIndex={activeItem.index}
    />
  );
};
