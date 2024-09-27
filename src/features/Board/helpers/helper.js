import { nanoid } from "nanoid";

export const submitCardHandler = (
  e,
  enteredCard,
  listId,
  addCard,
  setEnteredCard,
  closeModal
) => {
  e.preventDefault();

  const newCard = {
    card: enteredCard,
    id: nanoid(),
  };

  if (enteredCard.length > 0) {
    addCard(listId, newCard);
    setEnteredCard("");
    closeModal();
  } else {
    closeModal();
  }
};

export const submitListHandler = (
  { enteredTitle, addList, setEnteredTitle, closeModal },
  event
) => {
  event.preventDefault();

  const newList = {
    title: enteredTitle,
    id: nanoid(),
    cards: [],
  };

  if (enteredTitle.trim().length > 0) {
    addList(newList);
    setEnteredTitle("");
  }

  closeModal();
};

export const updateCardHandler = (
  e,
  enteredCard,
  originalCard,
  listId,
  cardId,
  updateCard,
  closeModal
) => {
  e.preventDefault();

  const updatedCard = {
    card: enteredCard,
  };

  if (enteredCard.length > 0 && originalCard !== enteredCard) {
    updateCard(listId, cardId, updatedCard);
    closeModal();
  }
};

export const updateListHandler = (
  e,
  enteredTitle,
  listId,
  updateListTitle,
  closeModal
) => {
  e.preventDefault();

  if (enteredTitle.length > 0) {
    updateListTitle(listId, enteredTitle);
    closeModal();
  }
};

export const handleRemove = (
  title,
  card,
  listId,
  removeCard,
  removeList,
  closeModal
) => {
  if (title === "Delete Card") {
    removeCard(card.listId, card.cardId);
  } else if (title === "Delete List") {
    removeList(listId);
  }
  closeModal();
};

export const handleKeyPress = (e, handleSubmit) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSubmit(e);
  }
};
