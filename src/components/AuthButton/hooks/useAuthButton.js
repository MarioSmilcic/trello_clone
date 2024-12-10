import { useAuthStore } from "@/store/auth/auth.store";
import { useNotificationStore } from "@/store/notifications/notifications.store";
import { useNavigate } from "react-router-dom";

export const useAuthButton = () => {
  const { user, signOut } = useAuthStore();
  const { addNotification } = useNotificationStore();
  const navigate = useNavigate();

  const handleAuthAction = async () => {
    if (user) {
      try {
        await signOut();
        navigate("/");
        addNotification({
          type: "success",
          message: "Successfully signed out!",
          duration: 3000,
        });
      } catch (error) {
        addNotification({
          type: "error",
          message: "Failed to sign out. Please try again.",
          duration: 5000,
        });
      }
    } else {
      navigate("/signin");
    }
  };

  return {
    user,
    handleAuthAction,
    buttonText: user ? "Sign Out" : "Sign In",
  };
};
