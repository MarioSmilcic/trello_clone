import "./deleteModal.style.css";
import Button from "../../../../components/Button/Button";
import { useListstore } from "../../../../store/lists/lists.store";
import { useModalsStore } from "../../../../store/modals/modals.store";

const DeleteModal = ({ card, title, item, listId }) => {
  const { removeCard, removeList } = useListstore();
  const { closeModals } = useModalsStore();

  const handleRemove = () => {
    if (title === "Delete Card") {
      removeCard(card.listId, card.cardId);
      closeModals();
    } else if (title === "Delete List") {
      removeList(listId);
      closeModals();
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
          <Button text="Confirm" handleClick={handleRemove} />
          <Button text="Dismiss" handleClick={() => closeModals()} />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
