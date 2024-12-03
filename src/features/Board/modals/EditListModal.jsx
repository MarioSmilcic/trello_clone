import Button from "@/components/Button/Button";
import { useState } from "react";
import { Close } from "@components/icons";
import { useModalsStore } from "@/store/modals/modals.store";
import { useLists, useKeyboard } from "../hooks";

const EditListModal = ({ listId, listTitle }) => {
  const [enteredTitle, setEnteredTitle] = useState(listTitle);
  const { closeModal } = useModalsStore();
  const { handleUpdateList } = useLists();
  const { handleKeyPress } = useKeyboard();

  const handleEnteredTitle = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleUpdateListTitle = (e) => {
    e.preventDefault();
    handleUpdateList(enteredTitle, listId);
  };

  const onKeypressHandler = (e) => {
    handleKeyPress(e, handleUpdateListTitle);
  };

  return (
    <form onSubmit={handleUpdateListTitle} className="editList-form">
      <div className="editList">
        <textarea
          name="edit-modal"
          id={listId}
          className="editModal-input"
          value={enteredTitle}
          onChange={handleEnteredTitle}
          autoFocus
          onKeyDown={onKeypressHandler}
        />

        <div className="add-listModal_buttons">
          <Button text="Save" />
          <div className="edit-listModal_close">
            <Close onClose={closeModal} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditListModal;
