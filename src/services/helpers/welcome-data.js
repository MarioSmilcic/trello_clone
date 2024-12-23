import { generateCardId, generateListId } from "./id-generators";

export const getWelcomeCards = (userId, listId) => [
  {
    id: generateCardId(userId, listId),
    card: "Welcome to TrelloClone! 👋",
    listId,
  },
  {
    id: generateCardId(userId, listId),
    card: "Drag cards to reorder them ↕️",
    listId,
  },
  {
    id: generateCardId(userId, listId),
    card: "Create new lists for your tasks ➕",
    listId,
  },
];

export const getWelcomeList = (userId) => {
  const listId = generateListId(userId);
  const welcomeCards = getWelcomeCards(userId, listId);

  return {
    id: listId,
    title: "Welcome List",
    cards: welcomeCards,
    position: 0,
    userId,
  };
};
