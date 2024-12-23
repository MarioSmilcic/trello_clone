import { useEffect } from "react";
import { useAuthStore } from "@store/auth/auth.store";
import { useListstore } from "@/store/lists/lists.store";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

const AuthProvider = ({ children }) => {
  const { initializeAuthListener, authInitialized } = useAuthStore();
  const fetchLists = useListstore((state) => state.fetchLists);

  useEffect(() => {
    const unsubscribe = initializeAuthListener();

    if (authInitialized) {
      fetchLists();
    }

    return () => unsubscribe?.();
  }, [authInitialized, fetchLists]);

  if (!authInitialized) {
    return <LoadingSpinner />;
  }

  return children;
};

export default AuthProvider;
