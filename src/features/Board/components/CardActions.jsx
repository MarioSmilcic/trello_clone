import { EditIcon, TrashIcon } from "@/components/icons";
import { useModalsStore } from "@store/modals/modals.store";

export const CardActions = ({ cardId, listId }) => {
  const { openModal } = useModalsStore();

  const handleEditClick = () => openModal("editCard", { cardId, listId });
  const handleDeleteClick = () => openModal("deleteCard", { cardId, listId });

  return (
    <div className="card-icons">
      <span className="card-icon">
        <EditIcon onEdit={handleEditClick} />
      </span>
      <span className="card-icon">
        <TrashIcon onDelete={handleDeleteClick} />
      </span>
    </div>
  );
};
