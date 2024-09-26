import { useListstore } from "../../../store/lists/lists.store";

export const handleDragStart = (e, setActiveList, setActiveCard) => {
  const { lists } = useListstore.getState();
  const activeType = e.active.data.current?.type;

  if (activeType === "List") {
    const activeListId = e.active.data.current.listId;
    const activeList = lists.find((list) => list.id === activeListId);
    setActiveList(activeList);
    setActiveCard(null);
  } else if (activeType === "Card") {
    const activeListId = e.active.data.current.listId;
    const activeCardId = e.active.data.current.cardId;
    const activeCardIndex = e.active.data.current.cardIndex;

    const activeList = lists.find((list) => list.id === activeListId);
    const activeCard = activeList.cards.find(
      (card) => card.id === activeCardId
    );

    setActiveCard({
      ...activeCard,
      listId: activeListId,
      cardIndex: activeCardIndex,
    });
    setActiveList(null);
  }
};

export const handleDragEnd = (e, setActiveList, setActiveCard) => {
  const { active, over } = e;
  if (!over) return;

  const { moveList, moveCard } = useListstore.getState();

  const activeData = active.data.current;
  const overData = over.data.current;

  if (activeData?.type === "List" && overData?.type === "List") {
    if (active.id !== over.id) {
      moveList(active.id, over.id);
    }
  } else if (activeData?.type === "Card") {
    const activeListId = activeData.listId;
    const activeCardIndex = activeData.cardIndex;

    if (overData?.type === "Card") {
      const overListId = overData.listId;
      const overCardIndex = overData.cardIndex;
      moveCard(activeListId, overListId, activeCardIndex, overCardIndex);
    } else if (overData?.type === "List") {
      moveCard(activeListId, over.id, activeCardIndex, 0);
    }
  }

  setActiveList(null);
  setActiveCard(null);
};

export const handleDragOver = (e) => {
  const { active, over } = e;
  if (!over) return;

  const { moveList, moveCard } = useListstore.getState();

  const activeData = active.data.current;
  const overData = over.data.current;

  if (activeData?.type === "List" && overData?.type === "List") {
    if (active.id !== over.id) {
      moveList(active.id, over.id);
    }
  } else if (activeData?.type === "Card") {
    const activeListId = activeData.listId;
    const activeCardIndex = activeData.cardIndex;

    if (overData?.type === "Card") {
      const overListId = overData.listId;
      const overCardIndex = overData.cardIndex;
      if (activeListId !== overListId || activeCardIndex !== overCardIndex) {
        moveCard(activeListId, overListId, activeCardIndex, overCardIndex);
      }
    } else if (overData?.type === "List") {
      moveCard(activeListId, over.id, activeCardIndex, 0);
    }
  }
};
