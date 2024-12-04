import { useState } from "react";
import { BoardTextArea } from "../ui";
import Button from "@components/Button/Button";
import { Close } from "@components/icons";
import { useModalsStore } from "@store/modals/modals.store";
import { useCards } from "../hooks";

const AddCardModal = ({ listId }) => {
  const [enteredCard, setEnteredCard] = useState("");
  const { closeModal } = useModalsStore();
  const { handleSubmitCard } = useCards();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitCard(enteredCard, listId, setEnteredCard);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-modal">
        <BoardTextArea
          value={enteredCard}
          onChange={(e) => setEnteredCard(e.target.value)}
          onSubmit={handleSubmit}
          placeholder="Enter a title for this card..."
          name="cardContent"
        />
        <div className="button-container">
          <Button text="Add card" />
          <div className="close-button">
            <Close onClose={closeModal} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddCardModal;
