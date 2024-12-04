import { useState } from "react";
import { BoardTextArea } from "../ui";
import Button from "@components/Button/Button";
import { Close } from "@components/icons";
import { useModalsStore } from "@store/modals/modals.store";
import { useCards } from "../hooks";

const EditCardModal = ({ card }) => {
  const [enteredCard, setEnteredCard] = useState(card.card);
  const { closeModal } = useModalsStore();
  const { handleUpdateCard } = useCards();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateCard(enteredCard, card.card, card.listId, card.cardId);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <div className="edit-modal">
        <BoardTextArea
          value={enteredCard}
          onChange={(e) => setEnteredCard(e.target.value)}
          onSubmit={handleSubmit}
          placeholder="Edit card text..."
          name="editCardContent"
        />
        <div className="button-container">
          <Button text="Save" />
          <div className="close-button">
            <Close onClose={closeModal} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditCardModal;
