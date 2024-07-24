import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { useState } from "react";
import { useListstore } from "../../../../store/lists/lists.store";
import Button from "../../../../components/Button/Button";
import Close from "../../../../components/icons/Close";
import "./addListModal.style.css";
import { useModalsStore } from "../../../../store/modals/modals.store";

const AddListModal = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const { lists, addList } = useListstore();
  const { closeModals } = useModalsStore();

  const handleEnteredTitle = (e) => {
    setEnteredTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newList = {
      title: enteredTitle,
      id: lists.length + 1,
      cards: [],
    };

    if (enteredTitle.length > 0) {
      addList(newList);
      setEnteredTitle("");
      closeModals();
    } else {
      closeModals();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitHandler(e);
    }
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
            onKeyDown={handleKeyPress}
          />
          <div className="add-listModal_buttons">
            <Button text="Add list" handleClick={submitHandler} />
            <div className="add-listModal_close">
              <Close onClose={closeModals} />
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default AddListModal;
