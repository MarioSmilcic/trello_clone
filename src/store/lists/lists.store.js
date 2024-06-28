import { create } from "zustand";
import { arrayMove } from "@dnd-kit/sortable";

export const useListstore = create((set) => ({
  // lists: [],

  lists: [
    {
      id: "",
      title: "",
      card: [{ id: "", card: "" }],
    },
  ],

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
  moveList: (activeListId, overListId) =>
    set((state) => {
      const activeListIndex = state.lists.findIndex(
        (list) => list.id === activeListId
      );
      const overListIndex = state.lists.findIndex(
        (list) => list.id === overListId
      );

      if (activeListIndex !== -1 && overListIndex !== -1) {
        return {
          lists: arrayMove(state.lists, activeListIndex, overListIndex),
        };
      }

      return state;
    }),
}));
