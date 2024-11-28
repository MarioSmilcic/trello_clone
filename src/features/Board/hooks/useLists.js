import { useListstore } from "../../../store/lists/lists.store";
import { useModalsStore } from "../../../store/modals/modals.store";
import { nanoid } from "nanoid";

export const useLists = () => {
  const { addList, removeList, updateListTitle } = useListstore();
  const { closeModal } = useModalsStore();

  const handleSubmitList = (enteredTitle, setEnteredTitle) => {
    if (enteredTitle.trim().length === 0) {
      closeModal();
      return;
    }

    const newList = {
      title: enteredTitle,
      id: nanoid(),
      cards: [],
    };

    addList(newList);
    setEnteredTitle("");
    closeModal();
  };

  const handleUpdateList = (enteredTitle, listId) => {
    if (enteredTitle.length === 0) {
      return;
    }

    updateListTitle(listId, enteredTitle);
    closeModal();
  };

  const handleRemoveList = (listId) => {
    removeList(listId);
    closeModal();
  };

  return {
    handleSubmitList,
    handleUpdateList,
    handleRemoveList,
  };
};
