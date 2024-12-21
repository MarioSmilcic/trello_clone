import { db } from "../../firebase-config";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  query,
  orderBy,
} from "firebase/firestore";

export const listsService = {
  fetchLists: async (userId) => {
    const listsRef = collection(db, "users", userId, "lists");
    const listsQuery = query(listsRef, orderBy("position"));
    const snapshot = await getDocs(listsQuery);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  },

  // For cards
  generateCardId: (userId, listId) => {
    return doc(collection(db, "users", userId, "lists", listId, "cards")).id;
  },

  // For lists
  generateListId: (userId) => {
    return doc(collection(db, "users", userId, "lists")).id;
  },

  syncLists: async (userId, lists) => {
    const listsRef = collection(db, "users", userId, "lists");

    const operations = lists.map((list, index) =>
      setDoc(doc(listsRef, list.id), {
        ...list,
        position: index,
      })
    );

    await Promise.all(operations);
  },
};
