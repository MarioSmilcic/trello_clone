import React from "react";
import "./listActions.style.css";
import Close from "../../../../components/icons/Close";
import Button from "../../../../components/Button/Button";
import { useModalsStore } from "../../../../store/modals/modals.store";

const ListActions = () => {
  const {
    closeModals,
    toggleCardModal,
    toggleDeleteList,
    toggleEditList,
    listId,
  } = useModalsStore();

  return (
    <div className="listActions">
      <div className="listActions-header">
        <p>List Actions</p>
        <span className="listActions-close">
          <Close onClose={closeModals} />
        </span>
      </div>
      <Button text="Add new card" handleClick={() => toggleCardModal(listId)} />
      <Button text="Delete list" handleClick={() => toggleDeleteList(listId)} />
      <Button text="Edit list" handleClick={() => toggleEditList()} />
    </div>
  );
};

export default ListActions;
