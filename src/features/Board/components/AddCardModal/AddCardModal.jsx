import Button from "../../../../components/Button/Button";
import "./addCardModal.style.css";
import Close from "../../../../components/icons/Close";
import { useState } from "react";
import { useListstore } from "../../../../store/lists/lists.store";
import { useModalsStore } from "../../../../store/modals/modals.store";
import { submitCardHandler, handleKeyPress } from "../../helpers/helper";

const AddCardModal = ({ listId }) => {
  const [enteredCard, setEnteredCard] = useState("");
  const { addCard } = useListstore();
  const { closeModals } = useModalsStore();

  const handleEnteredCard = (e) => {
    setEnteredCard(e.target.value);
  };

  const handleSubmit = (e) => {
    submitCardHandler(
      e,
      enteredCard,
      listId,
      addCard,
      setEnteredCard,
      closeModals
    );
  };

  const onKeypressHandler = (e) => {
    handleKeyPress(e, handleSubmit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-modal">
        <textarea
          name="addCardModal"
          id=""
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
            <Close onClose={closeModals} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddCardModal;
