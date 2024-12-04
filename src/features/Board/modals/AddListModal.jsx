import { useState } from "react";
import { BoardInput } from "../ui";
import CardWrapper from "@components/CardWrapper/CardWrapper";
import Button from "@components/Button/Button";
import { Close } from "@components/icons";
import { useModalsStore } from "@store/modals/modals.store";
import { useLists } from "../hooks";

const AddListModal = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const { closeModal } = useModalsStore();
  const { handleSubmitList } = useLists();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitList(enteredTitle, setEnteredTitle);
  };

  return (
    <div>
      <CardWrapper>
        <div className="add-modal">
          <BoardInput
            value={enteredTitle}
            onChange={(e) => setEnteredTitle(e.target.value)}
            onSubmit={handleSubmit}
            placeholder="Enter list title..."
            name="listTitle"
          />
          <div className="button-container">
            <Button text="Add list" handleClick={handleSubmit} />
            <div className="close-button">
              <Close onClose={closeModal} />
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default AddListModal;
