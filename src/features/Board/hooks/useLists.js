//original code without nanoid
import { useListstore } from "../../../store/lists/lists.store";
import { useModalsStore } from "../../../store/modals/modals.store";
import { collection, doc } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { useAuthStore } from "@/store/auth/auth.store";

export const useLists = () => {
  const { addList, removeList, updateListTitle } = useListstore();
  const { closeModal } = useModalsStore();
  const userId = useAuthStore((state) => state.user?.uid);

  const handleSubmitList = (enteredTitle, setEnteredTitle) => {
    if (enteredTitle.trim().length === 0) {
      closeModal();
      return;
    }

    const listRef = doc(collection(db, "users", userId, "lists"));
    const newList = {
      id: listRef.id,
      title: enteredTitle,
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

//original code
// import { useListstore } from "../../../store/lists/lists.store";
// import { useModalsStore } from "../../../store/modals/modals.store";
// import { nanoid } from "nanoid";

// export const useLists = () => {
//   const { addList, removeList, updateListTitle } = useListstore();
//   const { closeModal } = useModalsStore();

//   const handleSubmitList = (enteredTitle, setEnteredTitle) => {
//     if (enteredTitle.trim().length === 0) {
//       closeModal();
//       return;
//     }

//     const newList = {
//       title: enteredTitle,
//       id: nanoid(),
//       cards: [],
//     };

//     addList(newList);
//     setEnteredTitle("");
//     closeModal();
//   };

//   const handleUpdateList = (enteredTitle, listId) => {
//     if (enteredTitle.length === 0) {
//       return;
//     }

//     updateListTitle(listId, enteredTitle);
//     closeModal();
//   };

//   const handleRemoveList = (listId) => {
//     removeList(listId);
//     closeModal();
//   };

//   return {
//     handleSubmitList,
//     handleUpdateList,
//     handleRemoveList,
//   };
// };
