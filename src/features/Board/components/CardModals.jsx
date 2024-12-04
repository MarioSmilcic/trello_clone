import { useModalsStore } from "@store/modals/modals.store";
import { EditCardModal, DeleteModal } from "../modals";

export const CardModals = ({ card }) => {
  const { modal } = useModalsStore();
  const isCurrentCard = modal?.props?.cardId === card.cardId;

  return (
    <>
      {modal?.type === "editCard" && isCurrentCard && (
        <EditCardModal card={card} />
      )}
      {modal?.type === "deleteCard" && isCurrentCard && (
        <DeleteModal card={card} title="Delete Card" item={card.card} />
      )}
    </>
  );
};
