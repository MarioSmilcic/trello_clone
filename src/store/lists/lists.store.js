import { create } from "zustand";
import { fetchLists, syncLists, removeList } from "@/services/lists.service";
import { getUserId } from "@/services/helpers/firebase-utils";

export const useListstore = create((set, get) => {
  /* Helper to update UI and sync to Firebase */
  const updateListsAndSync = async (
    updateFn,
    errorMessage = "Error syncing lists"
  ) => {
    try {
      const userId = getUserId();
      if (!userId) return;

      // Apply the local state update
      set(updateFn);

      // Now sync with Firebase
      await syncLists(userId, get().lists);
    } catch (error) {
      console.error(errorMessage, error);
    }
  };

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
      // Use the helper function
      await updateListsAndSync(
        () => ({ lists: updatedLists }),
        "Error syncing lists after update:"
      );
    },

    // Add a new list
    addList: async (newList) => {
      // Reuse the helper
      await updateListsAndSync(
        (state) => ({ lists: [...state.lists, newList] }),
        "Error syncing lists after adding:"
      );
    },

    // Remove a list (this calls removeList on the server,
    removeList: async (listId) => {
      try {
        const userId = getUserId();
        if (!userId) return;

        // Optimistic UI update
        set((state) => ({
          lists: state.lists.filter((list) => list.id !== listId),
        }));

        // Remove from server
        await removeList(userId, listId);
        // Sync the updated lists
        await syncLists(userId, get().lists);
      } catch (error) {
        console.error("Error removing list:", error);
      }
    },

    // Update a list title
    updateListTitle: async (listId, updatedTitle) => {
      await updateListsAndSync(
        (state) => ({
          lists: state.lists.map((list) =>
            list.id === listId ? { ...list, title: updatedTitle } : list
          ),
        }),
        "Error syncing lists after title update:"
      );
    },

    // Add a card to a list
    addCard: async (listId, newCard) => {
      await updateListsAndSync(
        (state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? { ...list, cards: [...list.cards, newCard] }
              : list
          ),
        }),
        "Error syncing lists after adding card:"
      );
    },

    // Remove a card from a list
    removeCard: async (listId, cardId) => {
      await updateListsAndSync(
        (state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  cards: list.cards.filter((card) => card.id !== cardId),
                }
              : list
          ),
        }),
        "Error syncing lists after removing card:"
      );
    },

    // Update a card in a list
    updateCard: async (listId, cardId, updatedCard) => {
      await updateListsAndSync(
        (state) => ({
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
        }),
        "Error syncing lists after updating card:"
      );
    },

    // Clear all lists
    clearLists: () => set({ lists: [] }),
  };
});
