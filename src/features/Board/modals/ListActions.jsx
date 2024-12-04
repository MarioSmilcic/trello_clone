import { Close } from "@components/icons";
import Button from "@components/Button/Button";
import { useModalsStore } from "@store/modals/modals.store";
import { LIST_ACTIONS } from "../constants/board.constants";

const ListActions = ({ listId }) => {
  const { closeModal, openModal } = useModalsStore();

  const handleAction = (actionFn) => () => {
    actionFn(openModal, listId);
  };

  return (
    <div className="listActions">
      <div className="listActions-header">
        <p>List Actions</p>
        <span className="close-button">
          <Close onClose={closeModal} />
        </span>
      </div>

      {LIST_ACTIONS.map(({ id, text, action }) => (
        <Button key={id} text={text} handleClick={handleAction(action)} />
      ))}
    </div>
  );
};

export default ListActions;
