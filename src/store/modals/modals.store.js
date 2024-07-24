import { create } from "zustand";

export const useModalsStore = create((set) => ({
  isListModal: false,
  isCardModal: false,
  isCardButton: true,
  isListButton: true,
  isBackdrop: false,
  isListActions: false,
  isDeleteList: false,
  isEditList: false,
  isEditCard: false,
  isDeleteCard: false,

  listId: null,
  cardId: null,

  toggleListModal: (listId) =>
    set((state) => ({
      isListModal: !state.isListModal,
      isListButton: !state.isListButton,
      isBackdrop: !state.isBackdrop,
      listId: listId,
    })),

  toggleCardModal: (listId) =>
    set((state) => ({
      isCardModal: state.listId !== listId || !state.isCardModal,
      isBackdrop: true,
      listId: listId,
      isListActions: false,
    })),

  closeModals: () =>
    set({
      isListModal: false,
      isCardModal: false,
      isCardButton: true,
      isListButton: true,
      isBackdrop: false,
      isListActions: false,
      isDeleteList: false,
      isEditList: false,
      isEditCard: false,
      isDeleteCard: false,
      listId: null,
      cardId: null,
    }),

  toggleListActions: (listId) =>
    set((state) => ({
      isListActions: !state.isListActions,
      isBackdrop: !state.isBackdrop,
      listId: listId,
    })),

  toggleDeleteList: (listId) =>
    set((state) => ({
      isDeleteList: !state.isDeleteList,
      isBackdrop: true,
      isListActions: false,
      listId: listId,
    })),

  toggleEditList: () =>
    set((state) => ({
      isEditList: !state.isEditList,
      isBackdrop: true,
      isListActions: false,
    })),

  toggleEditCardModal: (cardId, listId) =>
    set((state) => ({
      isEditCard: !state.isEditCard,
      isBackdrop: !state.isBackdrop,
      cardId: cardId,
      listId: listId,
    })),

  toggleDeleteCardModal: (cardId, listId) =>
    set((state) => ({
      isDeleteCard: !state.isDeleteCard,
      isBackdrop: !state.isBackdrop,
      cardId: cardId,
      listId: listId,
    })),
}));
