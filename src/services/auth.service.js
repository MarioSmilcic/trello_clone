import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { useListstore } from "@/store/lists/lists.store";

export const getUserId = () => auth.currentUser?.uid || null;

export const initializeAuthListener = (set) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    set({
      user,
      loading: false,
      authInitialized: true,
    });
  });
  return unsubscribe;
};

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    const errorMessage =
      error.code === "auth/email-already-in-use"
        ? "This email is already registered"
        : "Failed to create account";
    throw errorMessage;
  }
};

export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw "Invalid email or password";
  }
};

export const signOutUser = async () => {
  try {
    // Clear the lists from the store before signing out
    const { clearLists } = useListstore.getState();
    clearLists();

    await signOut(auth);
  } catch (error) {
    throw "Failed to sign out";
  }
};
