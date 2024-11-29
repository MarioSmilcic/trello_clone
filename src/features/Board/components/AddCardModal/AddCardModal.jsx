import Button from "../../../../components/Button/Button";
import "./addCardModal.style.css";
import { Close } from "../../../../components/icons";
import { useState } from "react";
import { useModalsStore } from "../../../../store/modals/modals.store";
import { useCards } from "../../hooks/useCards";
import { useKeyboard } from "../../hooks/useKeyboard";

const AddCardModal = ({ listId }) => {
  const [enteredCard, setEnteredCard] = useState("");
  const { closeModal } = useModalsStore();
  const { handleSubmitCard } = useCards();
  const { handleKeyPress } = useKeyboard();

  const handleEnteredCard = (e) => {
    setEnteredCard(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitCard(enteredCard, listId, setEnteredCard);
  };

  const onKeypressHandler = (e) => {
    handleKeyPress(e, handleSubmit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-modal">
        <textarea
          name="addCardModal"
          placeholder="Enter a title for this card..."
          autoFocus
          className="add-modal_textarea"
          value={enteredCard}
          onChange={handleEnteredCard}
          onKeyDown={onKeypressHandler}
        />
        <div className="add-cardModal_buttons">
          <Button text="Add card" />
          <div className="add-cardModal_close">
            <Close onClose={closeModal} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddCardModal;
