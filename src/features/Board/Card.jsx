import "./styles/card.style.css";
import { useSortable } from "@dnd-kit/sortable";

const Card = ({ card, listId, cardIndex }) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card.id,
    data: {
      type: "Card",
      card,
      listId,
      cardIndex,
    },
  });

  const style = {
    transition,
    opacity: isDragging ? 0.5 : 1,
    transform: isDragging
      ? `translate3d(${transform?.x}px, ${transform?.y}px, 0)`
      : "none",
  };

  if (isDragging) {
    return (
      <div ref={setNodeRef} style={style} className="card-dragging">
        {card.card}
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="card"
    >
      {card.card}
    </div>
  );
};

export default Card;
