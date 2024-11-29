import { create } from "zustand";
import { nanoid } from "nanoid";

export const useNotificationStore = create((set, get) => ({
  notifications: [],

  addNotification: (notification) => {
    const id = nanoid();
    const newNotification = {
      id,
      type: notification.type || "info",
      message: notification.message,
      duration: notification.duration || 5000,
      position: notification.position || "top-right",
    };

    set((state) => ({
      notifications: [...state.notifications, newNotification],
    }));

    setTimeout(() => {
      get().removeNotification(id);
    }, newNotification.duration);
  },

  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  },

  clearAllNotifications: () => {
    set({ notifications: [] });
  },
}));
