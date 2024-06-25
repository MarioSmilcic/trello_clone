import { create } from "zustand";

export const useListstore = create((set) => ({
  // lists: [],

  lists: [
    {
      id: "1",
      title: "List1",
      cards: [
        { id: "1", card: "Card 1" },
        { id: "2", card: "Card 2" },
        { id: "3", card: "Card 3" },
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
}));
