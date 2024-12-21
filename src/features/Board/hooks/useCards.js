import { useListstore } from "@/store/lists/lists.store";
import { useModalsStore } from "@/store/modals/modals.store";
import { useAuthStore } from "@/store/auth/auth.store";
import { listsService } from "@/services/lists.service";

export const useCards = () => {
  const { addCard, updateCard, removeCard } = useListstore();
  const { closeModal } = useModalsStore();
  const userId = useAuthStore((state) => state.user?.uid);

  const { generateCardId } = listsService;

  const handleSubmitCard = (enteredCard, listId, setEnteredCard) => {
    if (enteredCard.trim().length === 0) {
      closeModal();
      return;
    }

    const newCard = {
      id: generateCardId(userId, listId),
      card: enteredCard,
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
