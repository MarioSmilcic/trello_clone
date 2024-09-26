import { create } from "zustand";

export const useBoardsStore = create((set) => ({
  boards: [
    {
      id: "1",
      bgColor: "red",
      title: "Test Board",
      lists: [
        {
          id: Math.floor(Math.random() * 1000000),
          title: "List1",
          cards: [
            { id: Math.floor(Math.random() * 1000000), card: "Card 1" },
            { id: Math.floor(Math.random() * 1000000), card: "Card 2" },
            { id: Math.floor(Math.random() * 1000000), card: "Card 3" },
          ],
        },
      ],
    },
  ],
  // Function to add a new board
  addBoard: (newBoard) =>
    set((state) => ({ boards: [...state.boards, newBoard] })),
}));
