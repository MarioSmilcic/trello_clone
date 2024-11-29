import { useState } from "react";
import { contactSchema } from "@/validations/contactSchema";
import { useNotificationStore } from "@/store/notifications/notifications.store";

export const useContactForm = () => {
  const [toggled, setToggled] = useState(false);
  const { addNotification } = useNotificationStore();

  const handleSubmit = (data) => {
    addNotification({
      type: "success",
      message:
        "Thank you! Your message has been received and we'll be in touch shortly.",
      duration: 6000,
    });

    setToggled(false);
    console.log("Form submitted:", data);
    return data;
  };

  return {
    contactSchema,
    handleSubmit,
    toggled,
    setToggled,
  };
};
