import { collection, doc } from "firebase/firestore";
import { db } from "../firebase-config";

export const generateCardId = (userId, listId) => {
  return doc(collection(db, "users", userId, "lists", listId, "cards")).id;
};

export const generateListId = (userId) => {
  return doc(collection(db, "users", userId, "lists")).id;
};
