import { create } from "zustand";
import { nanoid } from "nanoid";
import { arrayMove } from "@dnd-kit/sortable";

export const useListstore = create((set) => ({
  lists: [
    {
      id: nanoid(),
      title: "List1",
      cards: [
        { id: nanoid(), card: "Card 1" },
        { id: nanoid(), card: "Card 2" },
        { id: nanoid(), card: "Card 3" },
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
      const oldIndex = state.lists.findIndex(
        (list) => list.id === activeListId
      );
      const newIndex = state.lists.findIndex((list) => list.id === overListId);
      return { lists: arrayMove(state.lists, oldIndex, newIndex) };
    }),

  moveCard: (activeListId, overListId, activeIndex, overIndex) =>
    set((state) => {
      const newLists = [...state.lists];
      const activeListIndex = newLists.findIndex(
        (list) => list.id === activeListId
      );
      const overListIndex = newLists.findIndex(
        (list) => list.id === overListId
      );

      if (activeListIndex === overListIndex) {
        // Moving within the same list
        newLists[activeListIndex].cards = arrayMove(
          newLists[activeListIndex].cards,
          activeIndex,
          overIndex
        );
      } else {
        // Moving between lists
        const [movedCard] = newLists[activeListIndex].cards.splice(
          activeIndex,
          1
        );
        newLists[overListIndex].cards.splice(overIndex, 0, movedCard);
      }

      return { lists: newLists };
    }),

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

  removeList: (listId) =>
    set((state) => ({
      lists: state.lists.filter((list) => list.id !== listId),
    })),

  updateListTitle: (listId, updatedTitle) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId ? { ...list, title: updatedTitle } : list
      ),
    })),
}));
