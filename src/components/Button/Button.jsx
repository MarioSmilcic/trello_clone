import ButtonVariant from "./components/ButtonVariant";
import "./button.style.css";

const Button = ({ text, handleClick }) => {
  const color = ButtonVariant({ text });

  return (
    <button onClick={handleClick} className={`button ${color}`} type="submit">
      {text}
    </button>
  );
};

export default Button;
