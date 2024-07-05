import "./deleteCardModal.style.css";
import "../CardModal/CardModal";
import CardModal from "../CardModal/CardModal";
import Button from "../../../../components/Button/Button";
import { useListstore } from "../../../../store/lists/lists.store";

const DeleteCardModal = ({ card, onClose }) => {
  const { removeCard } = useListstore();

  const handleDelete = () => {
    removeCard(card.listId, card.cardId);
  };
  return (
    <CardModal>
      <div className="modal">
        <h3 className="modal_title">Delete Card</h3>
        <h3 className="modal_question">
          Are you sure you want to delete {card.card}?
        </h3>
        <div className="buttons">
          <Button text="Confirm" handleClick={handleDelete} />
          <Button text="Dismiss" handleClick={() => onClose()} />
        </div>
      </div>
    </CardModal>
  );
};

export default DeleteCardModal;
