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

// Export fetchLists
export const fetchLists = async (userId) => {
  const listsRef = collection(db, "users", userId, "lists");
  const listsQuery = query(listsRef, orderBy("position"));
  const snapshot = await getDocs(listsQuery);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Export syncLists
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
    await deleteDoc(listDocRef); // Remove the list from Firebase
  } catch (error) {
    throw new Error("Failed to remove list: " + error.message);
  }
};

// Export generateCardId
export const generateCardId = (userId, listId) => {
  return doc(collection(db, "users", userId, "lists", listId, "cards")).id;
};

// Export generateListId
export const generateListId = (userId) => {
  return doc(collection(db, "users", userId, "lists")).id;
};
