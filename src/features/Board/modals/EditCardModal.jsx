import Button from "@/components/Button/Button";
import { useState } from "react";
import { Close } from "@components/icons";
import { useModalsStore } from "@store/modals/modals.store";
import { useKeyboard, useCards } from "../hooks";

const EditCardModal = ({ card }) => {
  const [enteredCard, setEnteredCard] = useState(card.card);
  const { closeModal } = useModalsStore();
  const { handleUpdateCard } = useCards();
  const { handleKeyPress } = useKeyboard();

  const handleEnteredCard = (e) => {
    setEnteredCard(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    handleUpdateCard(enteredCard, card.card, card.listId, card.cardId);
  };

  const onKeypressHandler = (e) => {
    handleKeyPress(e, handleUpdate);
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
          onKeyDown={onKeypressHandler}
        />
        <div className="edit-cardModal_buttons">
          <Button text="Save" />
          <div className="edit-cardModal_close">
            <Close onClose={closeModal} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditCardModal;
