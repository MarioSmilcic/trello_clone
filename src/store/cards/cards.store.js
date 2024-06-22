import { create } from "zustand";

export const useCardsStore = create((set) => ({
  cards: [
    { id: 1, card: "Hello Wordl1!" },
    // { id: 2, card: "Hello Wordl2!" },
    // { id: 3, card: "Hello Wordl3!" },
  ],

  addCard: (newCard) => set((state) => ({ cards: [...state.cards, newCard] })),
}));
