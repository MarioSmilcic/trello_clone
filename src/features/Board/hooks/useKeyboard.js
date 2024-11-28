export const useKeyboard = () => {
  const handleKeyPress = (e, submitHandler) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitHandler(e);
    }
  };

  return {
    handleKeyPress,
  };
};
