import { create } from "zustand";
import { arrayMove } from "@dnd-kit/sortable";

export const useListstore = create((set) => ({
  lists: [
    {
      id: "1",
      title: "List1",
      cards: [
        {
          id: Math.floor(Math.random() * 1000000),
          card: "Card 1",
        },
        {
          id: Math.floor(Math.random() * 1000000),
          card: "Card 2",
        },
        {
          id: Math.floor(Math.random() * 1000000),
          card: "Card 3",
        },
      ],
    },
  ],
  // Function to add a new list
  addList: (newList) => set((state) => ({ lists: [...state.lists, newList] })),

  // Function to add a new card
  addCard: (listId, newCard) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId ? { ...list, cards: [...list.cards, newCard] } : list
      ),
    })),

  // Function to move a list from one position to another
  moveList: (activeListId, overListId) =>
    set((state) => {
      const activeListIndex = state.lists.findIndex(
        ({ id }) => id === activeListId
      );
      const overListIndex = state.lists.findIndex(
        ({ id }) => id === overListId
      );

      return activeListIndex !== -1 && overListIndex !== -1
        ? { lists: arrayMove(state.lists, activeListIndex, overListIndex) }
        : state;
    }),

  // Function to move a card from one list to another, or within the same list
  moveCard: (activeListId, overListId, activeCardIndex, overCardIndex) =>
    set((state) => {
      const activeList = state.lists.find((list) => list.id === activeListId);
      const overList = state.lists.find((list) => list.id === overListId);

      if (!activeList || !overList) return state;
      // Remove the card from the active list
      const [movedCard] = activeList.cards.splice(activeCardIndex, 1);
      // Insert the card into the new position in the target list
      overList.cards.splice(overCardIndex, 0, movedCard);

      return {
        lists: state.lists.map((list) => {
          if (list.id === activeListId) return activeList;
          if (list.id === overListId) return overList;
          return list;
        }),
      };
    }),

  // Function to update a card
  updateCard: (listId, cardId, updatedCard) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: list.cards.map((card) =>
                card.id === cardId ? { ...card, card: updatedCard.card } : card
              ),
            }
          : list
      ),
    })),
  // Function to remove a card
  removeCard: (listId, cardId) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: list.cards.filter((card) => card.id !== cardId),
            }
          : list
      ),
    })),
  // Function to remove a list
  removeList: (listId) =>
    set((state) => ({
      lists: state.lists.filter((list) => list.id !== listId),
    })),
}));
