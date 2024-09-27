import "./deleteModal.style.css";
import Button from "../../../../components/Button/Button";
import { useListstore } from "../../../../store/lists/lists.store";
import { useModalsStore } from "../../../../store/modals/modals.store";
import { handleRemove } from "../../helpers/helper";

const DeleteModal = ({ card, title, item, listId }) => {
  const { removeCard, removeList } = useListstore();
  const { closeModal } = useModalsStore();

  const handleDelete = () => {
    handleRemove(title, card, listId, removeCard, removeList, closeModal);
  };

  return (
    <div className="card-modal">
      <div className="modal">
        <h3 className="modal_title">{title}</h3>
        <h3 className="modal_question">
          Are you sure you want to delete {item}?
        </h3>
        <div className="buttons">
          <Button text="Confirm" handleClick={handleDelete} />
          <Button text="Dismiss" handleClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
