import { useState } from "react";
import { contactSchema } from "../../../validations/contactSchema";
import { useNotificationStore } from "../../../store/notifications/notifications.store";

export const useContactForm = () => {
  const [toggled, setToggled] = useState(false);
  const { addNotification } = useNotificationStore();

  const initialValues = {
    name: "",
    email: "",
    company: "",
    job: "",
    phone: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    addNotification({
      type: "success",
      message:
        "Thank you! Your message has been received and we'll be in touch shortly.",
      duration: 6000,
    });

    resetForm();
    setToggled(false);
  };

  return {
    initialValues,
    contactSchema,
    handleSubmit,
    toggled,
    setToggled,
  };
};
