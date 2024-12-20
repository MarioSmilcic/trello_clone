// src/api/helpers/createUserAndWelcomeList.js
import { db } from "../../../firebase-config";
import { doc, setDoc, collection } from "firebase/firestore";

export const createUserAndWelcomeList = async (user) => {
  // Create the user document
  const userDocRef = doc(db, "users", user.uid);
  await setDoc(userDocRef, {
    email: user.email,
  });

  // Get reference to the lists subcollection and create list reference
  const listsRef = collection(db, "users", user.uid, "lists");
  const welcomeListRef = doc(listsRef);
  const listId = welcomeListRef.id; // Get the Firebase-generated ID

  // Create cards collection reference for generating card IDs
  const cardsCollectionRef = collection(db, "users", user.uid, "lists");

  const welcomeCards = [
    {
      id: doc(cardsCollectionRef).id,
      card: "Welcome to TrelloClone! 👋",
      listId, // Add reference to parent list
    },
    {
      id: doc(cardsCollectionRef).id,
      card: "Drag cards to reorder them ↕️",
      listId,
    },
    {
      id: doc(cardsCollectionRef).id,
      card: "Create new lists for your tasks ➕",
      listId,
    },
  ];

  // Add welcome list with its own ID included
  await setDoc(welcomeListRef, {
    id: listId, // Include the list ID in the document
    title: "Welcome List",
    cards: welcomeCards,
    position: 0,
    userId: user.uid,
  });
};

// //original code
// import { db } from "../../../firebase-config";
// import { doc, setDoc, collection, addDoc } from "firebase/firestore";
// import { lists_data } from "@/data/app-data";

// export const createUserAndWelcomeList = async (user) => {
//   const userDocRef = doc(db, "users", user.uid);
//   await setDoc(userDocRef, {
//     email: user.email,
//   });

//   const listsSubcolRef = collection(db, "users", user.uid, "lists");

//   for (const list of lists_data) {
//     await addDoc(listsSubcolRef, {
//       title: list.title,
//       cards: list.cards,
//       userId: user.uid,
//     });
//   }
// };
