import "./editCardModal.style.css";
import Button from "../../../../components/Button/Button";
import { useListstore } from "../../../../store/lists/lists.store";
import { useState } from "react";

const EditCardModal = ({ card, onClose }) => {
  const [enteredCard, setEnteredCard] = useState(card.card);

  const { updateCard } = useListstore();

  const handleEnteredCard = (e) => {
    setEnteredCard(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedCard = {
      card: enteredCard,
    };
    if ((enteredCard.length > 0) & (card.card !== enteredCard)) {
      updateCard(card.listId, card.cardId, updatedCard);
      onClose();
    }
  };
  return (
    <form onSubmit={handleUpdate} className="edit-form">
      <div className="edit-card">
        <textarea
          name="edit-modal"
          id={card.id}
          className="modal_input"
          value={enteredCard}
          onChange={handleEnteredCard}
          autoFocus
        />
        <Button text="Save" />
      </div>
    </form>
  );
};

export default EditCardModal;
