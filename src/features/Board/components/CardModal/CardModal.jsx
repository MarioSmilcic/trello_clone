import "./cardModal.style.css";
import Button from "../../../../components/Button/Button";
import { useListstore } from "../../../../store/lists/lists.store";

const CardModal = ({ card, title, item, onClose, listId }) => {
  const { removeCard, removeList } = useListstore();

  const handleClose = () => {
    onClose();
  };

  const handleRemove = () => {
    if (title === "Delete Card") {
      removeCard(card.listId, card.cardId);
    } else if (title === "Delete List") {
      removeList(listId);
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
          <Button text="Dismiss" handleClick={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default CardModal;
