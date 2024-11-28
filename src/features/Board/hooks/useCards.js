import { useListstore } from "../../../store/lists/lists.store";
import { useModalsStore } from "../../../store/modals/modals.store";
import { nanoid } from "nanoid";

export const useCards = () => {
  const { addCard, updateCard, removeCard } = useListstore();
  const { closeModal } = useModalsStore();

  const handleSubmitCard = (enteredCard, listId, setEnteredCard) => {
    if (enteredCard.length === 0) {
      closeModal();
      return;
    }

    const newCard = {
      card: enteredCard,
      id: nanoid(),
    };

    addCard(listId, newCard);
    setEnteredCard("");
    closeModal();
  };

  const handleUpdateCard = (enteredCard, originalCard, listId, cardId) => {
    if (enteredCard.length === 0 || originalCard === enteredCard) {
      return;
    }

    updateCard(listId, cardId, { card: enteredCard });
    closeModal();
  };

  const handleRemoveCard = (listId, cardId) => {
    removeCard(listId, cardId);
    closeModal();
  };

  return {
    handleSubmitCard,
    handleUpdateCard,
    handleRemoveCard,
  };
};
