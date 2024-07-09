import React from "react";
import "./listActions.style.css";
import Close from "../../../../components/icons/Close";
import Button from "../../../../components/Button/Button";
import CardModal from "../CardModal/CardModal";

const ListActions = ({
  handleCardModal,
  handleCloseModal,
  handleDeleteList,
  handleEditModal,
}) => {
  return (
    <div className="listActions">
      <div className="listActions-header">
        <p>List Actions</p>
        <span className="listActions-close">
          <Close onClose={handleCloseModal} />
        </span>
      </div>
      <Button text="Add new card" handleClick={handleCardModal} />
      <Button text="Delete list" handleClick={handleDeleteList} />
      <Button text="Edit list" handleClick={handleEditModal} />
    </div>
  );
};

export default ListActions;
