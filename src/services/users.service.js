import { db } from "./firebase-config";
import { doc, setDoc, collection } from "firebase/firestore";
import { getWelcomeList } from "./helpers/welcome-data";

export const createUserAndWelcomeList = async (user) => {
  // Create the user document
  const userDocRef = doc(db, "users", user.uid);
  await setDoc(userDocRef, {
    email: user.email,
  });

  // Get welcome list with all cards and IDs configured
  const welcomeList = getWelcomeList(user.uid);

  // Add welcome list to Firebase
  const listsRef = collection(db, "users", user.uid, "lists");
  const welcomeListRef = doc(listsRef, welcomeList.id);
  await setDoc(welcomeListRef, welcomeList);
};
