import { useState } from "react";
import { useListstore } from "../../../store/lists/lists.store";

export const useDragDrop = () => {
  const [activeItem, setActiveItem] = useState(null);
  const { lists, updateLists } = useListstore();

  const handleDragStart = (event) => {
    const { active } = event;
    const { type, list, card } = active.data.current;
    setActiveItem(type === "List" ? list : card);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeType = active.data.current.type;
    const overType = over.data.current?.type || "List";
    const newLists = [...lists];

    if (activeType === "List" && overType === "List" && active.id !== over.id) {
      const oldIndex = lists.findIndex((list) => list.id === active.id);
      const newIndex = lists.findIndex((list) => list.id === over.id);
      const reorderedLists = [...newLists];
      const [movedList] = reorderedLists.splice(oldIndex, 1);
      reorderedLists.splice(newIndex, 0, movedList);
      updateLists(reorderedLists);
    } else if (activeType === "Card") {
      const activeListId = active.data.current.list.id;
      const overListId =
        overType === "List" ? over.id : over.data.current.list.id;
      const activeIndex = active.data.current.index;
      const overIndex =
        overType === "List"
          ? lists.find((list) => list.id === overListId).cards.length
          : over.data.current.index;

      const sourceList = newLists.find((list) => list.id === activeListId);
      const targetList = newLists.find((list) => list.id === overListId);

      if (activeListId === overListId) {
        // Moving within the same list
        const reorderedCards = [...sourceList.cards];
        const [movedCard] = reorderedCards.splice(activeIndex, 1);
        reorderedCards.splice(overIndex, 0, movedCard);
        sourceList.cards = reorderedCards;
      } else {
        // Moving between lists
        const [movedCard] = sourceList.cards.splice(activeIndex, 1);
        targetList.cards.splice(overIndex, 0, movedCard);
      }

      updateLists(newLists);
    }
  };

  const handleDragEnd = () => {
    setActiveItem(null);
  };

  return {
    lists,
    activeItem,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  };
};
