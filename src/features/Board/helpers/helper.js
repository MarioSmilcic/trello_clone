import { nanoid } from "nanoid";

export const submitCardHandler = (
  e,
  enteredCard,
  listId,
  addCard,
  setEnteredCard,
  closeModals
) => {
  e.preventDefault();

  const newCard = {
    card: enteredCard,
    id: nanoid(),
  };

  if (enteredCard.length > 0) {
    addCard(listId, newCard);
    setEnteredCard("");
    closeModals();
  } else {
    closeModals();
  }
};

export const submitListHandler = (
  { enteredTitle, addList, setEnteredTitle, closeModals },
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

  closeModals();
};

export const updateCardHandler = (
  e,
  enteredCard,
  originalCard,
  listId,
  cardId,
  updateCard,
  closeModals
) => {
  e.preventDefault();

  const updatedCard = {
    card: enteredCard,
  };

  if (enteredCard.length > 0 && originalCard !== enteredCard) {
    updateCard(listId, cardId, updatedCard);
    closeModals();
  }
};

export const updateListHandler = (
  e,
  enteredTitle,
  listId,
  updateListTitle,
  closeModals
) => {
  e.preventDefault();

  if (enteredTitle.length > 0) {
    updateListTitle(listId, enteredTitle);
    closeModals();
  }
};

export const handleRemove = (
  title,
  card,
  listId,
  removeCard,
  removeList,
  closeModals
) => {
  if (title === "Delete Card") {
    removeCard(card.listId, card.cardId);
  } else if (title === "Delete List") {
    removeList(listId);
  }
  closeModals();
};

export const handleKeyPress = (e, handleSubmit) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSubmit(e);
  }
};
