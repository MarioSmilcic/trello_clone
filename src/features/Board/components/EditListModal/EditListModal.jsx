import "./editListModal.style.css";
import Button from "../../../../components/Button/Button";
import { useListstore } from "../../../../store/lists/lists.store";
import { useState } from "react";
import Close from "../../../../components/icons/Close";
import { useModalsStore } from "../../../../store/modals/modals.store";
import { handleKeyPress, updateListHandler } from "../../helpers/helper";

const EditListModal = ({ listId, listTitle }) => {
  const [enteredTitle, setEnteredTitle] = useState(listTitle);
  const { updateListTitle } = useListstore();
  const { closeModal } = useModalsStore();

  const handleEnteredTitle = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleUpdateList = (e) => {
    updateListHandler(e, enteredTitle, listId, updateListTitle, closeModal);
  };

  const onKeypressHandler = (e) => {
    handleKeyPress(e, handleUpdateList);
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
