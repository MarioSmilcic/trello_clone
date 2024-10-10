import { useState } from "react";
import { validationSchema } from "../helpers/validation";

export const useContactForm = () => {
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [toggled, setToggled] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    company: "",
    job: "",
    phone: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    setMessageSuccess(true);
    resetForm();
    setToggled(false);
  };

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    messageSuccess,
    toggled,
    setToggled,
  };
};
