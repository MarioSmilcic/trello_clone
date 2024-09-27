import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { useState } from "react";
import { useListstore } from "../../../../store/lists/lists.store";
import Button from "../../../../components/Button/Button";
import Close from "../../../../components/icons/Close";
import "./addListModal.style.css";
import { useModalsStore } from "../../../../store/modals/modals.store";
import { handleKeyPress, submitListHandler } from "../../helpers/helper";

const AddListModal = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const { addList } = useListstore();
  const { closeModal } = useModalsStore();

  const handleEnteredTitle = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    submitListHandler(
      { enteredTitle, addList, setEnteredTitle, closeModal },
      e
    );
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
