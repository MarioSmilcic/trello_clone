import { useKeyboard } from "../hooks";
import { useId } from "react";

const BoardInput = ({
  value,
  onChange,
  onSubmit,
  placeholder = "Enter text...",
  autoFocus = true,
  className = "",
  name,
}) => {
  const id = useId();
  const { handleKeyPress } = useKeyboard();

  const onKeyDown = (e) => {
    handleKeyPress(e, onSubmit);
  };

  return (
    <input
      type="text"
      className={`board-input ${className}`}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      autoFocus={autoFocus}
      name={name}
      id={id}
    />
  );
};

export default BoardInput;
