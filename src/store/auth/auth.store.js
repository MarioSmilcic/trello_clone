import { create } from "zustand";
import { authService } from "@/services/auth.service";
import { usersService } from "@/services/users.service";

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,
  authInitialized: false,

  initializeAuthListener: () => {
    return authService.initializeAuthListener(set);
  },

  signUp: async (email, password) => {
    try {
      set({ loading: true, error: null });
      const user = await authService.signUp(email, password);
      await usersService.createUserAndWelcomeList(user);
      set({ loading: false });
    } catch (error) {
      set({ error, loading: false });
      throw error;
    }
  },

  signIn: async (email, password) => {
    try {
      set({ loading: true, error: null });
      await authService.signIn(email, password);
    } catch (error) {
      set({ error, loading: false });
      throw error;
    }
  },

  signOut: async () => {
    try {
      set({ loading: true, error: null });
      await authService.signOut();
    } catch (error) {
      set({ error, loading: false });
      throw error;
    }
  },

  clearError: () => set({ error: null }),
}));
