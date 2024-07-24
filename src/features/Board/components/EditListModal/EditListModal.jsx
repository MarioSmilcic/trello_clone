import "./editListModal.style.css";
import Button from "../../../../components/Button/Button";
import { useListstore } from "../../../../store/lists/lists.store";
import { useState } from "react";
import Close from "../../../../components/icons/Close";
import { useModalsStore } from "../../../../store/modals/modals.store";

const EditListModal = ({ listId, listTitle }) => {
  const [enteredTitle, setEnteredTitle] = useState(listTitle);
  const { updateListTitle } = useListstore();
  const { closeModals } = useModalsStore();

  const handleEnteredTitle = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleUpdateList = (e) => {
    e.preventDefault();
    if (enteredTitle.length > 0) {
      updateListTitle(listId, enteredTitle);
      closeModals();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleUpdateList(e);
    }
  };
  return (
    <form onSubmit={handleUpdateList} className="editList-form">
      <div className="editList">
        <textarea
          name="edit-modal"
          id={listId}
          className="editModal-input"
          value={enteredTitle}
          onChange={handleEnteredTitle}
          autoFocus
          onKeyDown={handleKeyPress}
        />

        <div className="add-listModal_buttons">
          <Button text="Save" />
          <div className="edit-listModal_close">
            <Close onClose={closeModals} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditListModal;
