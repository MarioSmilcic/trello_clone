import "./styles/card.style.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { EditIcon, TrashIcon } from "@/components/icons";
import EditCardModal from "./components/EditCardModal/EditCardModal";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import { useModalsStore } from "@store/modals/modals.store";

const Card = ({ card, listId, index }) => {
  const { modal, openModal } = useModalsStore();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card.id,
    data: {
      type: "Card",
      card,
      list: { id: listId },
      index,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const isCurrentCard = modal?.props?.cardId === card.id;

  const handleEditClick = () =>
    openModal("editCard", { cardId: card.id, listId });
  const handleDeleteClick = () =>
    openModal("deleteCard", { cardId: card.id, listId });

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
            <EditIcon onEdit={handleEditClick} />
          </span>
          <span className="card-icon">
            <TrashIcon onDelete={handleDeleteClick} />
          </span>
        </div>
      </div>
      {modal?.type === "editCard" && isCurrentCard && (
        <EditCardModal card={editCard} />
      )}
      {modal?.type === "deleteCard" && isCurrentCard && (
        <DeleteModal card={editCard} title="Delete Card" item={card.card} />
      )}
    </>
  );
};

export default Card;
