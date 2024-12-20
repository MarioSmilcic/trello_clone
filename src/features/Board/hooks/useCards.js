//original code without nanoid
import { useListstore } from "@/store/lists/lists.store";
import { useModalsStore } from "../../../store/modals/modals.store";
import { collection, doc } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { useAuthStore } from "@/store/auth/auth.store";

export const useCards = () => {
  const { addCard, updateCard, removeCard } = useListstore();
  const { closeModal } = useModalsStore();
  const userId = useAuthStore((state) => state.user?.uid);

  const handleSubmitCard = (enteredCard, listId, setEnteredCard) => {
    if (enteredCard.trim().length === 0) {
      closeModal();
      return;
    }

    const cardRef = doc(
      collection(db, "users", userId, "lists", listId, "cards")
    );
    const newCard = {
      id: cardRef.id,
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
//original code
// import { useListstore } from "@/store/lists/lists.store";
// import { useModalsStore } from "../../../store/modals/modals.store";
// import { nanoid } from "nanoid";

// export const useCards = () => {
//   const { addCard, updateCard, removeCard } = useListstore();
//   const { closeModal } = useModalsStore();

//   const handleSubmitCard = (enteredCard, listId, setEnteredCard) => {
//     if (enteredCard.trim().length === 0) {
//       closeModal();
//       return;
//     }

//     const newCard = {
//       card: enteredCard,
//       id: nanoid(),
//     };

//     addCard(listId, newCard);
//     setEnteredCard("");
//     closeModal();
//   };

//   const handleUpdateCard = (enteredCard, originalCard, listId, cardId) => {
//     if (enteredCard.length === 0 || originalCard === enteredCard) {
//       return;
//     }

//     updateCard(listId, cardId, { card: enteredCard });
//     closeModal();
//   };

//   const handleRemoveCard = (listId, cardId) => {
//     removeCard(listId, cardId);
//     closeModal();
//   };

//   return {
//     handleSubmitCard,
//     handleUpdateCard,
//     handleRemoveCard,
//   };
// };
