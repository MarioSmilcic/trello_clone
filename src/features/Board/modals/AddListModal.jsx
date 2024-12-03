import CardWrapper from "@/components/CardWrapper/CardWrapper";
import { useState } from "react";
import Button from "@/components/Button/Button";
import { Close } from "@components/icons";
import { useModalsStore } from "@/store/modals/modals.store";
import { useLists, useKeyboard } from "../hooks";

const AddListModal = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const { closeModal } = useModalsStore();
  const { handleSubmitList } = useLists();
  const { handleKeyPress } = useKeyboard();

  const handleEnteredTitle = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitList(enteredTitle, setEnteredTitle);
  };

  const onKeypressHandler = (e) => {
    handleKeyPress(e, handleSubmit);
  };

  return (
    <div>
      <CardWrapper>
        <div className="addListModal">
          <input
            type="text"
            placeholder="Enter list title..."
            className="board-input"
            autoFocus
            name="list title"
            value={enteredTitle}
            onChange={handleEnteredTitle}
            onKeyDown={onKeypressHandler}
          />
          <div className="add-listModal_buttons">
            <Button text="Add list" handleClick={handleSubmit} />
            <div className="add-listModal_close">
              <Close onClose={closeModal} />
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default AddListModal;
