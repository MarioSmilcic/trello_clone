import "./deleteModal.style.css";
import Button from "../../../../components/Button/Button";
import { useModalsStore } from "../../../../store/modals/modals.store";
import { useCards } from "../../hooks/useCards";
import { useLists } from "../../hooks/useLists";

const DeleteModal = ({ card, title, item, listId }) => {
  const { closeModal } = useModalsStore();
  const { handleRemoveCard } = useCards();
  const { handleRemoveList } = useLists();

  const handleDelete = () => {
    if (title === "Delete Card") {
      handleRemoveCard(card.listId, card.cardId);
    } else if (title === "Delete List") {
      handleRemoveList(listId);
    }
  };

  return (
    <div className="card-modal">
      <div className="modal">
        <h3 className="modal_title">{title}</h3>
        <h3 className="modal_question">
          Are you sure you want to delete {item}?
        </h3>
        <div className="buttons">
          <Button text="Confirm" handleClick={handleDelete} />
          <Button text="Dismiss" handleClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
