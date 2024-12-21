import { create } from "zustand";

export const useListstore = create((set) => ({
  lists: [],

  updateLists: (newLists) => set({ lists: newLists }),

  clearLists: () => set({ lists: [] }),

  addList: (newList) =>
    set((state) => ({
      lists: [...state.lists, newList],
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

  addCard: (listId, newCard) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id === listId ? { ...list, cards: [...list.cards, newCard] } : list
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
}));
