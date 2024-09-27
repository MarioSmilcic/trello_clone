import { create } from "zustand";

export const useModalsStore = create((set) => ({
  modal: null, // { type: 'modalType', props: { ... } }

  openModal: (type, props = {}) => set({ modal: { type, props } }),
  closeModal: () => set({ modal: null }),
}));
