import { useEffect } from "react";
import { useAuthStore } from "@store/auth/auth.store";

const AuthInit = ({ children }) => {
  const { initializeAuthListener, authInitialized } = useAuthStore();

  useEffect(() => {
    const unsubscribe = initializeAuthListener();
    return () => unsubscribe?.();
  }, []);

  if (!authInitialized) {
    return (
      <div className="protected-route__loading">
        <div className="protected-route__spinner"></div>
      </div>
    );
  }

  return children;
};

export default AuthInit;
