import React from "react";
import "./listActions.style.css";
import Close from "../../../../components/icons/Close";
import Button from "../../../../components/Button/Button";
import CardModal from "../CardModal/CardModal";

const ListActions = ({
  handleListActions,
  handleCardModal,
  handleCloseModal,
  handleDeleteList,
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
      {/* <Button text="Add new card" /> */}
      {/* <Button text="Delete list" handleClick={handleDeleteModal} /> */}
      <Button text="Delete list" handleClick={handleDeleteList} />
      <Button text="Edit list" />
    </div>
  );
};

export default ListActions;
