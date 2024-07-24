import Button from "../../../../components/Button/Button";
import "./addCardModal.style.css";
import Close from "../../../../components/icons/Close";
import { useState } from "react";
import { useListstore } from "../../../../store/lists/lists.store";
import { useModalsStore } from "../../../../store/modals/modals.store";

// const AddCardModal = ({ listId, handleCloseModal }) => {
const AddCardModal = ({ listId }) => {
  const [enteredCard, setEnteredCard] = useState("");
  const { addCard } = useListstore();
  const { closeModals } = useModalsStore();

  const handleEnteredCard = (e) => {
    setEnteredCard(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newCard = {
      card: enteredCard,
      id: Math.floor(Math.random() * 1000000),
    };

    if (enteredCard.length > 0) {
      addCard(listId, newCard);
      setEnteredCard("");
      // handleCloseModal();
      closeModals();
    } else {
      // handleCloseModal();
      closeModals();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitHandler(e);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="add-modal">
        <textarea
          name="addCardModal"
          id=""
          placeholder="Enter a title for this card..."
          autoFocus
          className="add-modal_textarea"
          value={enteredCard}
          onChange={handleEnteredCard}
          onKeyDown={handleKeyPress}
        />
        <div className="add-cardModal_buttons">
          <Button text="Add card" />
          <div className="add-cardModal_close">
            {/* <Close onClose={handleCloseModal} /> */}
            <Close onClose={closeModals} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddCardModal;
