import { useKeyboard } from "../hooks";
import { useId } from "react";

const BoardTextArea = ({
  value,
  onChange,
  onSubmit,
  placeholder = "Enter text...",
  autoFocus = true,
  className = "",
  minHeight = "8em",
  maxHeight = "12.5em",
  name,
}) => {
  const id = useId();
  const { handleKeyPress } = useKeyboard();

  const onKeyDown = (e) => {
    handleKeyPress(e, onSubmit);
  };

  return (
    <textarea
      className={`board-textarea ${className}`}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      autoFocus={autoFocus}
      style={{
        minHeight,
        maxHeight,
      }}
      name={name}
      id={id}
    />
  );
};

export default BoardTextArea;
