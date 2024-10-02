import { useListstore } from "../../../store/lists/lists.store";

export const handleDragStart = (event, setActiveList, setActiveCard) => {
  const { active } = event;
  const { type, list, card } = active.data.current;

  if (type === "List") {
    setActiveList(list);
    setActiveCard(null);
  } else if (type === "Card") {
    setActiveCard(card);
    setActiveList(null);
  }
};

export const handleDragOver = (event) => {
  const { active, over } = event;
  if (!over) return;

  const { moveList, moveCard } = useListstore.getState();
  const activeType = active.data.current.type;
  const overType = over.data.current.type;

  if (activeType === "List" && overType === "List" && active.id !== over.id) {
    moveList(active.id, over.id);
  } else if (activeType === "Card") {
    const activeListId = active.data.current.list.id;
    const overListId =
      overType === "List" ? over.id : over.data.current.list.id;
    const activeIndex = active.data.current.index;
    const overIndex =
      overType === "List"
        ? over.data.current.list.cards.length
        : over.data.current.index;

    moveCard(activeListId, overListId, activeIndex, overIndex);
  }
};

export const handleDragEnd = (event, setActiveList, setActiveCard) => {
  handleDragOver(event);
  setActiveList(null);
  setActiveCard(null);
};
