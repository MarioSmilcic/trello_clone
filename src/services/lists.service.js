import { db } from "./firebase-config";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  query,
  orderBy,
  deleteDoc,
} from "firebase/firestore";

export const fetchLists = async (userId) => {
  const listsRef = collection(db, "users", userId, "lists");
  const listsQuery = query(listsRef, orderBy("position"));
  const snapshot = await getDocs(listsQuery);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const syncLists = async (userId, lists) => {
  const listsRef = collection(db, "users", userId, "lists");

  const operations = lists.map((list, index) =>
    setDoc(doc(listsRef, list.id), {
      ...list,
      position: index,
    })
  );

  await Promise.all(operations);
};

export const removeList = async (userId, listId) => {
  try {
    const listDocRef = doc(db, "users", userId, "lists", listId);
    await deleteDoc(listDocRef);
  } catch (error) {
    throw new Error("Failed to remove list: " + error.message);
  }
};
