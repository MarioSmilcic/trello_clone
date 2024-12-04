export const LIST_ACTIONS = [
  {
    id: "add",
    text: "Add new card",
    action: (openModal, listId) => openModal("addCard", { listId }),
  },
  {
    id: "edit",
    text: "Edit list",
    action: (openModal, listId) => openModal("editList", { listId }),
  },
  {
    id: "delete",
    text: "Delete list",
    action: (openModal, listId) => openModal("deleteList", { listId }),
  },
];
