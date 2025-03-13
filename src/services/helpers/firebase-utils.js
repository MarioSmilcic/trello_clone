import { collection, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";

// User and Auth utilities
export const getUserId = () => auth.currentUser?.uid || null;

// Reference creators
export const createUserRef = (userId) => doc(db, "users", userId);

export const createListsRef = (userId) =>
  collection(db, "users", userId, "lists");

export const createListRef = (userId, listId) =>
  doc(db, "users", userId, "lists", listId);

// ID generators
export const generateCardId = (userId, listId) => {
  return doc(collection(db, "users", userId, "lists", listId, "cards")).id;
};

export const generateListId = (userId) => {
  return doc(collection(db, "users", userId, "lists")).id;
};
