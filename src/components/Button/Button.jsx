import "./button.style.css";

const Button = ({ text, handleClick }) => {
  let color;

  switch (text) {
    case "Add card":
      color = "add_card";
      break;
    case "+ Add a card":
      color = "add_aCard";
      break;
    case "+ Add another list":
      color = "add_list";
      break;
    case "Add list":
      color = "add_card";
      break;
    default:
      color = "button";
  }

  return (
    <button onClick={handleClick} className={`button ${color}`}>
      {text}
    </button>
  );
};

export default Button;
