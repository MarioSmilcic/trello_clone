import "./editCardModal.style.css";
import Button from "../../../../components/Button/Button";
import { useListstore } from "../../../../store/lists/lists.store";
import { useState } from "react";
import Close from "../../../../components/icons/Close";
import { useModalsStore } from "../../../../store/modals/modals.store";
import { handleKeyPress, updateCardHandler } from "../../helpers/helper";

const EditCardModal = ({ card }) => {
  const [enteredCard, setEnteredCard] = useState(card.card);
  const { closeModals } = useModalsStore();
  const { updateCard } = useListstore();

  const handleEnteredCard = (e) => {
    setEnteredCard(e.target.value);
  };

  const handleUpdate = (e) => {
    updateCardHandler(
      e,
      enteredCard,
      card.card,
      card.listId,
      card.cardId,
      updateCard,
      closeModals
    );
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
            <Close onClose={closeModals} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditCardModal;
