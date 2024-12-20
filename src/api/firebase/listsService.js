// src/api/firebase/listsService.js
import { db } from "../../../firebase-config";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  query,
  orderBy,
} from "firebase/firestore";

export const listsService = {
  async fetchLists(userId) {
    const listsRef = collection(db, "users", userId, "lists");
    const listsQuery = query(listsRef, orderBy("position"));
    const snapshot = await getDocs(listsQuery);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  },

  async syncLists(userId, lists) {
    const listsRef = collection(db, "users", userId, "lists");

    const operations = lists.map((list, index) =>
      // We can now always use the existing ID since it's created in useLists
      setDoc(doc(listsRef, list.id), {
        ...list,
        position: index,
      })
    );

    await Promise.all(operations);
  },
};
//when generating firebase id, use nanoid in useCards.js and useLists.js
// import { db } from "../../../firebase-config";
// import {
//   collection,
//   doc,
//   getDocs,
//   setDoc,
//   query,
//   orderBy,
// } from "firebase/firestore";

// export const listsService = {
//   async fetchLists(userId) {
//     const listsRef = collection(db, "users", userId, "lists");
//     const listsQuery = query(listsRef, orderBy("position"));
//     const snapshot = await getDocs(listsQuery);

//     return snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//   },

//   async syncLists(userId, lists) {
//     const listsRef = collection(db, "users", userId, "lists");

//     const operations = lists.map((list, index) =>
//       setDoc(doc(listsRef, list.id), {
//         ...list,
//         position: index,
//       })
//     );

//     await Promise.all(operations);
//   },
// };
