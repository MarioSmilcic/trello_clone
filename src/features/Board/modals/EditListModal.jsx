import { useState } from "react";
import { BoardInput } from "../ui";
import Button from "@components/Button/Button";
import { Close } from "@components/icons";
import { useModalsStore } from "@store/modals/modals.store";
import { useLists } from "../hooks";

const EditListModal = ({ listId, listTitle }) => {
  const [enteredTitle, setEnteredTitle] = useState(listTitle);
  const { closeModal } = useModalsStore();
  const { handleUpdateList } = useLists();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateList(enteredTitle, listId);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <div className="edit-modal">
        <BoardInput
          value={enteredTitle}
          onChange={(e) => setEnteredTitle(e.target.value)}
          onSubmit={handleSubmit}
          placeholder="Edit list title..."
          name="editListTitle"
        />
        <div className="button-container">
          <Button text="Save" />
          <div className="close-button">
            <Close onClose={closeModal} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditListModal;
