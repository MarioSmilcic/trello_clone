import { create } from "zustand";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../../firebase-config";
import { createUserAndWelcomeList } from "@/api/helpers/createUserAndWelcomeList";

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,
  authInitialized: false,

  initializeAuthListener: () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      set({
        user,
        loading: false,
        authInitialized: true,
      });
    });
    return unsubscribe;
  },

  signUp: async (email, password) => {
    try {
      set({ loading: true, error: null });
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Create the user doc + welcome lists subcollection
      await createUserAndWelcomeList(user);

      set({ loading: false });
    } catch (error) {
      const errorMessage =
        error.code === "auth/email-already-in-use"
          ? "This email is already registered"
          : "Failed to create account";

      set({ error: errorMessage, loading: false });
      throw errorMessage;
    }
  },

  signIn: async (email, password) => {
    try {
      set({ loading: true, error: null });
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const errorMessage = "Invalid email or password";
      set({ error: errorMessage, loading: false });
      throw errorMessage;
    }
  },

  signOut: async () => {
    try {
      set({ loading: true, error: null });
      await signOut(auth);
    } catch (error) {
      set({ error: "Failed to sign out", loading: false });
      throw error;
    }
  },

  clearError: () => set({ error: null }),
}));
