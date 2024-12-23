import { create } from "zustand";
import { fetchLists, syncLists, removeList } from "@/services/lists.service";
import { getUserId } from "@/services/helpers/firebase-utils";

export const useListstore = create((set, get) => {
  return {
    lists: [],

    // Fetch lists from Firebase and initialize the state
    fetchLists: async () => {
      try {
        const userId = getUserId();
        if (!userId) return;

        const fetchedLists = await fetchLists(userId);
        set({ lists: fetchedLists });
      } catch (error) {
        console.error("Error fetching lists:", error);
      }
    },

    // Update the lists in the state
    updateLists: async (updatedLists) => {
      try {
        const userId = getUserId();
        if (!userId) return;

        set({ lists: updatedLists }); // Optimistic UI update
        await syncLists(userId, updatedLists);
      } catch (error) {
        console.error("Error syncing lists after update:", error);
      }
    },

    // Add a new list
    addList: async (newList) => {
      try {
        const userId = getUserId();
        if (!userId) return;

        set((state) => ({ lists: [...state.lists, newList] })); // Optimistic UI update
        await syncLists(userId, get().lists);
      } catch (error) {
        console.error("Error syncing lists after adding:", error);
      }
    },

    removeList: async (listId) => {
      try {
        const userId = getUserId();
        if (!userId) return;

        // Optimistic UI update
        set((state) => ({
          lists: state.lists.filter((list) => list.id !== listId),
        }));

        await removeList(userId, listId);
      } catch (error) {
        console.error("Error removing list:", error);
      }
    },

    // Update a list title
    updateListTitle: async (listId, updatedTitle) => {
      try {
        const userId = getUserId();
        if (!userId) return;

        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId ? { ...list, title: updatedTitle } : list
          ),
        })); // Optimistic UI update
        await syncLists(userId, get().lists);
      } catch (error) {
        console.error("Error syncing lists after title update:", error);
      }
    },

    // Add a card to a list
    addCard: async (listId, newCard) => {
      try {
        const userId = getUserId();
        if (!userId) return;

        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? { ...list, cards: [...list.cards, newCard] }
              : list
          ),
        })); // Optimistic UI update
        await syncLists(userId, get().lists);
      } catch (error) {
        console.error("Error syncing lists after adding card:", error);
      }
    },

    // Remove a card from a list
    removeCard: async (listId, cardId) => {
      try {
        const userId = getUserId();
        if (!userId) return;

        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  cards: list.cards.filter((card) => card.id !== cardId),
                }
              : list
          ),
        })); // Optimistic UI update
        await syncLists(userId, get().lists);
      } catch (error) {
        console.error("Error syncing lists after removing card:", error);
      }
    },

    // Update a card in a list
    updateCard: async (listId, cardId, updatedCard) => {
      try {
        const userId = getUserId();
        if (!userId) return;

        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  cards: list.cards.map((card) =>
                    card.id === cardId ? { ...card, ...updatedCard } : card
                  ),
                }
              : list
          ),
        })); // Optimistic UI update
        await syncLists(userId, get().lists);
      } catch (error) {
        console.error("Error syncing lists after updating card:", error);
      }
    },

    // Clear all lists
    clearLists: () => set({ lists: [] }),
  };
});
