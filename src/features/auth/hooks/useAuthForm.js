import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { authSchema } from "@/validations/authSchema";
import { useAuthStore } from "@/store/auth/auth.store";
import { useNotificationStore } from "@/store/notifications/notifications.store";
export const useAuthForm = (authMode) => {
  const { signIn, signUp, error, clearError } = useAuthStore();
  const { addNotification } = useNotificationStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(authSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await (authMode === "signUp"
        ? signUp(email, password)
        : signIn(email, password));

      reset();
      addNotification({
        type: "success",
        message: `Successfully ${
          authMode === "signUp" ? "signed up" : "signed in"
        }!`,
        duration: 3000,
      });

      navigate("/board");
    } catch (error) {
      addNotification({
        type: "error",
        message: error,
        duration: 5000,
      });
      clearError();
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
