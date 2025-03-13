import { getDocs, setDoc, query, orderBy, deleteDoc } from "firebase/firestore";
import { createListsRef, createListRef } from "./helpers/firebase-utils";

export const fetchLists = async (userId) => {
  const listsRef = createListsRef(userId);
  const listsQuery = query(listsRef, orderBy("position"));
  const snapshot = await getDocs(listsQuery);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const syncLists = async (userId, lists) => {
  const operations = lists.map((list, index) =>
    setDoc(createListRef(userId, list.id), {
      ...list,
      position: index,
    })
  );

  await Promise.all(operations);
};

export const removeList = async (userId, listId) => {
  try {
    const listDocRef = createListRef(userId, listId);
    await deleteDoc(listDocRef);
  } catch (error) {
    throw new Error("Failed to remove list: " + error.message);
  }
};
