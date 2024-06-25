import { create } from "zustand";

export const useCardsStore = create((set) => ({
  cards: [{ id: 1, card: "Hello Wordl1!" }],

  addCard: (newCard) => set((state) => ({ cards: [...state.cards, newCard] })),
}));
