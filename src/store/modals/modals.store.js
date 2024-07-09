import { create } from "zustand";

export const useModalsStore = create((set) => ({
  //   showCardModal: false,
  cardModal: false,
  backdrop: false,
  showButton: true,
  listActions: false,
  deleteModal: false,
  editModal: null,

  //   toggleCardModal: () =>
  //     set((state) => ({
  //       showCardModal: !state.showCardModal,
  //       showButton: !state.showButton,
  //       backdrop: !state.backdrop,
  //       //   backdrop: true,
  //       listActions: false,
  //       deleteModal: false,
  //     })),

  showCardModal: () =>
    set((state) => ({
      cardModal: !state.cardModal,
      showButton: !state.showButton,
      backdrop: !state.backdrop,
      //   cardModal: true,
      //   showButton: true,
      //   backdrop: true,
      //   listActions: false,
      //   deleteModal: false,
    })),

  hideCardModal: () =>
    set((state) => ({
      cardModal: !state.cardModal,
      showButton: !state.showButton,
      backdrop: !state.backdrop,
      //   backdrop: true,
      listActions: false,
      deleteModal: false,
    })),

  toggleBackdrop: () =>
    set((state) => ({
      cardModal: false,
      showButton: true,
      //   showButton: !state.showButton,

      //   backdrop: !state.backdrop,
      backdrop: false,
      listActions: false,
      deleteModal: false,
    })),

  toogleEditModal: () =>
    set((state) => ({
      editModal: !state.editModal,
      backdrop: !state.backdrop,
    })),

  //   toggleListActions: () =>
  //     set((state) => ({
  //       listActions: !state.listActions,
  //       backdrop: !state.backdrop,
  //     })),

  toggleListActions: () =>
    set(() => ({
      listActions: true,
      backdrop: true,
    })),

  toggleDeleteModal: () =>
    set((state) => ({
      deleteModal: !state.deleteModal,
      listActions: false,
      backdrop: true,
    })),
}));
