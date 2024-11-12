import { buttonVariants } from "./buttonVariants";

const ButtonVariant = ({ text }) => {
  return buttonVariants[text] || "button";
};

export default ButtonVariant;
