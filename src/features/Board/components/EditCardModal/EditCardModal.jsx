import "./editCardModal.style.css";
import Button from "../../../../components/Button/Button";
import { useListstore } from "../../../../store/lists/lists.store";
import { useState } from "react";
import Close from "../../../../components/icons/Close";
import { useModalsStore } from "../../../../store/modals/modals.store";

const EditCardModal = ({ card }) => {
  const [enteredCard, setEnteredCard] = useState(card.card);
  const { closeModals } = useModalsStore();
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
      closeModals();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleUpdate(e);
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
          onKeyDown={handleKeyPress}
        />
        <div className="edit-cardModal_buttons">
          <Button text="Save" />
          <div className="edit-cardModal_close">
            <Close onClose={closeModals} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditCardModal;
