import { create } from "zustand";
import {
  initializeAuthListener,
  signUp,
  signIn,
  signOutUser,
} from "@/services/auth.service";
import { createUserAndWelcomeList } from "@/services/users.service";

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,
  authInitialized: false,

  initializeAuthListener: () => {
    return initializeAuthListener(set);
  },

  signUp: async (email, password) => {
    try {
      set({ loading: true, error: null });
      const user = await signUp(email, password);
      await createUserAndWelcomeList(user);
      set({ loading: false });
    } catch (error) {
      set({ error, loading: false });
      throw error;
    }
  },

  signIn: async (email, password) => {
    try {
      set({ loading: true, error: null });
      await signIn(email, password);
    } catch (error) {
      set({ error, loading: false });
      throw error;
    }
  },

  signOut: async () => {
    try {
      set({ loading: true, error: null });
      await signOutUser();
    } catch (error) {
      set({ error, loading: false });
      throw error;
    }
  },

  clearError: () => set({ error: null }),
}));
