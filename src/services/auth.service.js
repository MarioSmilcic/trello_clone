import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase-config";

export const authService = {
  initializeAuthListener: (set) => {
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
  },

  signIn: async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw "Invalid email or password";
    }
  },

  signOut: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw "Failed to sign out";
    }
  },
};
