import "./styles/card.style.css";
import { useSortable } from "@dnd-kit/sortable";
import EditIcon from "../../components/icons/EditIcon";
import TrashIcon from "../../components/icons/TrashIcon";
import { useState } from "react";
import Backdrop from "./components/Backdrop/Backdrop";
import EditCardModal from "./components/EditCardModal/EditCardModal";
import CardModal from "./components/CardModal/CardModal";

const Card = ({ card, listId, cardIndex }) => {
  const [backdrop, setBackdrop] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

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

  const handleModal = () => {
    setBackdrop(true);
    setEditModal(true);
  };
  const handleDeleteModal = () => {
    setBackdrop(true);
    setDeleteModal(true);
  };
  const handleCloseModal = () => {
    setBackdrop(false);
    setEditModal(false);
    setDeleteModal(false);
  };

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
            <EditIcon onEdit={handleModal} />
          </span>
          <span className="card-icon">
            <TrashIcon onDelete={handleDeleteModal} />
          </span>
        </div>
      </div>
      {backdrop && <Backdrop onCancel={handleCloseModal} />}
      {editModal && (
        <EditCardModal card={editCard} onClose={handleCloseModal} />
      )}
      {deleteModal && (
        <CardModal
          onClose={handleCloseModal}
          card={editCard}
          title="Delete Card"
          item={card.card}
        />
      )}
    </>
  );
};

export default Card;
