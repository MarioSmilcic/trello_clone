import { useEffect } from "react";
import { useAuthStore } from "@/store/auth/auth.store";
import { useListstore } from "@/store/lists/lists.store";
import { listsService } from "@/api/firebase/listsService";

export const useListsSync = () => {
  const userId = useAuthStore((state) => state.user?.uid);
  const updateLists = useListstore((state) => state.updateLists);
  const lists = useListstore((state) => state.lists);

  // Initial fetch
  useEffect(() => {
    if (userId) {
      listsService
        .fetchLists(userId)
        .then((lists) => updateLists(lists))
        .catch(console.error);
    }
  }, [userId]);

  // Sync to Firebase when lists change
  useEffect(() => {
    if (userId && lists.length > 0) {
      const timeoutId = setTimeout(() => {
        listsService.syncLists(userId, lists).catch(console.error);
      }, 1000); // Debounce sync

      return () => clearTimeout(timeoutId);
    }
  }, [lists, userId]);
};
