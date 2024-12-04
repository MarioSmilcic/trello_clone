import { useCardDrag } from "../hooks/useCardDrag";
import { CardActions, CardModals } from "./";

export const Card = ({ card, listId, index }) => {
  const { attributes, listeners, setNodeRef, style } = useCardDrag({
    id: card.id,
    listId,
    card,
    index,
  });

  return (
    <>
      <div
        className="card-outer"
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <div className="card">{card.card}</div>
        <CardActions cardId={card.id} listId={listId} />
      </div>
      <CardModals card={{ listId, cardId: card.id, card: card.card }} />
    </>
  );
};
