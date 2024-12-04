import { useModalsStore } from "@store/modals/modals.store";
import Button from "@components/Button/Button";
import AddListModal from "../modals/AddListModal";

export const AddListButton = () => {
  const { modal, openModal } = useModalsStore();

  const handleAddListClick = () => openModal("addList");

  return (
    <div>
      {modal?.type !== "addList" && (
        <Button text="+ Add another list" handleClick={handleAddListClick} />
      )}
      {modal?.type === "addList" && <AddListModal />}
    </div>
  );
};
