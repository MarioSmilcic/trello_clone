import "./styles/card.style.css";
import { useSortable } from "@dnd-kit/sortable";
import EditIcon from "../../components/icons/EditIcon";
import TrashIcon from "../../components/icons/TrashIcon";
import { useState } from "react";
import Backdrop from "./components/Backdrop/Backdrop";
import EditCardModal from "./components/EditCardModal/EditCardModal";
import DeleteCardModal from "./components/DeleteCardModal/DeleteCardModal";

const Card = ({ card, listId, cardIndex }) => {
  const [isEditShown, setIsEditShown] = useState(false);
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

  const handleMouseEnter = () => {
    setIsEditShown(true);
  };

  const handleMouseLeave = () => {
    setIsEditShown(false);
  };

  const editCard = { listId, cardId: card.id, card: card.card };
  return (
    <>
      <div
        className="card-outer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <div
          // ref={setNodeRef}
          // style={style}
          // {...attributes}
          // {...listeners}
          className="card"
        >
          {card.card}
        </div>
        {/* {isEditShown && (
          <span className="edit-icon">
            <EditIcon onEdit={handleModal} />
          </span>
        )} */}
        {isEditShown && (
          <span className="card-icons">
            <span className="card-icon">
              <EditIcon onEdit={handleModal} />
            </span>
            <span className="card-icon">
              <TrashIcon onDelete={handleDeleteModal} />
            </span>
          </span>
        )}
      </div>
      {backdrop && <Backdrop onCancel={handleCloseModal} />}
      {editModal && (
        <EditCardModal card={editCard} onClose={handleCloseModal} />
      )}
      {deleteModal && (
        <DeleteCardModal onClose={handleCloseModal} card={editCard} />
      )}
    </>
  );
};

export default Card;
