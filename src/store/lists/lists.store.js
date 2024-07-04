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

  addList: (newList) => set((state) => ({ lists: [...state.lists, newList] })),
  addCard: (listId, newCard) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId ? { ...list, cards: [...list.cards, newCard] } : list
      ),
    })),

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

  moveCard: (activeListId, overListId, activeCardIndex, overCardIndex) =>
    set((state) => {
      const activeList = state.lists.find((list) => list.id === activeListId);
      const overList = state.lists.find((list) => list.id === overListId);

      if (!activeList || !overList) return state;

      const [movedCard] = activeList.cards.splice(activeCardIndex, 1);
      overList.cards.splice(overCardIndex, 0, movedCard);

      return {
        lists: state.lists.map((list) => {
          if (list.id === activeListId) return activeList;
          if (list.id === overListId) return overList;
          return list;
        }),
      };
    }),
}));
