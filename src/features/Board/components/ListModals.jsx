import { useModalsStore } from "@store/modals/modals.store";
import { EditListModal, ListActions, DeleteModal } from "../modals";

export const ListModals = ({ listId, listTitle }) => {
  const { modal } = useModalsStore();
  const isCurrentList = modal?.props?.listId === listId;

  return (
    <>
      {modal?.type === "editList" && isCurrentList && (
        <EditListModal listId={listId} listTitle={listTitle} />
      )}
      {modal?.type === "listActions" && isCurrentList && (
        <ListActions listId={listId} />
      )}
      {modal?.type === "deleteList" && isCurrentList && (
        <DeleteModal title="Delete List" item={listTitle} listId={listId} />
      )}
    </>
  );
};
