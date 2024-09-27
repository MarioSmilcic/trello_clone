import React from "react";
import "./listActions.style.css";
import Close from "../../../../components/icons/Close";
import Button from "../../../../components/Button/Button";
import { useModalsStore } from "../../../../store/modals/modals.store";

const ListActions = ({ listId }) => {
  const { closeModal, openModal } = useModalsStore();

  const handleAddCard = () => openModal("addCard", { listId });
  const handleDeleteList = () => openModal("deleteList", { listId });
  const handleEditList = () => openModal("editList", { listId });

  return (
    <div className="listActions">
      <div className="listActions-header">
        <p>List Actions</p>
        <span className="listActions-close">
          <Close onClose={closeModal} />
        </span>
      </div>
      <Button text="Add new card" handleClick={handleAddCard} />
      <Button text="Delete list" handleClick={handleDeleteList} />
      <Button text="Edit list" handleClick={handleEditList} />
    </div>
  );
};

export default ListActions;
