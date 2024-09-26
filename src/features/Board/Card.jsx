import "./styles/card.style.css";
import { useSortable } from "@dnd-kit/sortable";
import EditIcon from "../../components/icons/EditIcon";
import TrashIcon from "../../components/icons/TrashIcon";
import EditCardModal from "./components/EditCardModal/EditCardModal";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import { useModalsStore } from "../../store/modals/modals.store";

const Card = ({ card, listId, cardIndex }) => {
  const {
    isEditCard,
    isDeleteCard,
    toggleEditCardModal,
    toggleDeleteCardModal,
    cardId,
  } = useModalsStore();

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
      cardId: card.id,
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

  const editCard = { listId, cardId: card.id, card: card.card };
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

        <div className="card-icons">
          <span className="card-icon">
            <EditIcon onEdit={() => toggleEditCardModal(card.id, listId)} />
          </span>
          <span className="card-icon">
            <TrashIcon
              onDelete={() => toggleDeleteCardModal(card.id, listId)}
            />
          </span>
        </div>
      </div>
      {isEditCard && cardId === card.id && <EditCardModal card={editCard} />}
      {isDeleteCard && cardId === card.id && (
        <DeleteModal card={editCard} title="Delete Card" item={card.card} />
      )}
    </>
  );
};

export default Card;
