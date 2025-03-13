import { setDoc } from "firebase/firestore";
import { createUserRef, createListRef } from "./helpers/firebase-utils";
import { getWelcomeList } from "./helpers/welcome-data";

export const createUserAndWelcomeList = async (user) => {
  // Create the user document
  const userDocRef = createUserRef(user.uid);
  await setDoc(userDocRef, {
    email: user.email,
  });

  // Get welcome list with all cards and IDs configured
  const welcomeList = getWelcomeList(user.uid);

  // Add welcome list to Firebase
  const welcomeListRef = createListRef(user.uid, welcomeList.id);
  await setDoc(welcomeListRef, welcomeList);
};
