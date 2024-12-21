import { useEffect } from "react";
import { useAuthStore } from "@/store/auth/auth.store";
import { useListstore } from "@/store/lists/lists.store";
import { listsService } from "@/services/lists.service";

export const useListsSync = () => {
  const userId = useAuthStore((state) => state.user?.uid);
  const updateLists = useListstore((state) => state.updateLists);
  const clearLists = useListstore((state) => state.clearLists);
  const lists = useListstore((state) => state.lists);
  const { fetchLists, syncLists } = listsService;

  useEffect(() => {
    if (!userId) {
      clearLists();
    }
  }, [userId, clearLists]);

  // Initial fetch
  useEffect(() => {
    const fetchInitialLists = async () => {
      try {
        if (userId) {
          clearLists(); // Clear lists before fetching new ones

          const lists = await fetchLists(userId);
          updateLists(lists);
        }
      } catch (error) {
        console.error("Error fetching lists:", error);
      }
    };

    fetchInitialLists();
  }, [userId]);

  // Sync to Firebase when lists change
  useEffect(() => {
    const syncListsToFirebase = async () => {
      try {
        if (userId && lists.length > 0) {
          await syncLists(userId, lists);
        }
      } catch (error) {
        console.error("Error syncing lists:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      syncListsToFirebase();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [lists, userId]);
};
