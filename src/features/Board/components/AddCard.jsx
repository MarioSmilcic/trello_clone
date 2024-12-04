import { useModalsStore } from "@store/modals/modals.store";
import Button from "@components/Button/Button";
import { AddCardModal } from "../modals";

export const AddCard = ({ listId }) => {
  const { modal, openModal } = useModalsStore();

  const isCurrentList = modal?.props?.listId === listId;
  const isAddCardModalOpen = modal?.type === "addCard" && isCurrentList;

  const handleAddCardClick = () => openModal("addCard", { listId });

  return (
    <>
      {!isAddCardModalOpen && (
        <Button text="+ Add a card" handleClick={handleAddCardClick} />
      )}
      {isAddCardModalOpen && <AddCardModal listId={listId} />}
    </>
  );
};
