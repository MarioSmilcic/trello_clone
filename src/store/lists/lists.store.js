import { create } from "zustand";
import { nanoid } from "nanoid";

export const useListstore = create((set) => ({
  lists: [
    {
      id: nanoid(),
      title: "List1",
      cards: [
        {
          id: nanoid(),
          card: "Card 1",
        },
        {
          id: nanoid(),
          card: "Card 2",
        },
        {
          id: nanoid(),
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

  // function to move list from one position to another
  moveList: (activeListId, overListId) =>
    set((state) => {
      const lists = [...state.lists];
      const activeIndex = lists.findIndex(({ id }) => id === activeListId);
      const overIndex = lists.findIndex(({ id }) => id === overListId);

      if (activeIndex === -1 || overIndex === -1) {
        return state;
      }

      const [movedList] = lists.splice(activeIndex, 1);
      lists.splice(overIndex, 0, movedList);

      return { lists };
    }),

  // function to move card from one list to another, or within the same list
  moveCard: (activeListId, overListId, activeCardIndex, overCardIndex) =>
    set((state) => {
      const lists = state.lists.map((list) => ({
        ...list,
        cards: [...list.cards],
      }));

      const sourceList = lists.find((list) => list.id === activeListId);
      const destinationList = lists.find((list) => list.id === overListId);

      if (!sourceList || !destinationList) {
        return state;
      }

      const [movedCard] = sourceList.cards.splice(activeCardIndex, 1);
      destinationList.cards.splice(overCardIndex, 0, movedCard);

      return { lists };
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

  // Function to update the title of a list
  updateListTitle: (listId, updatedTitle) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId ? { ...list, title: updatedTitle } : list
      ),
    })),
}));
