import { useSortable } from "@dnd-kit/sortable";

export const useSortableItem = (list) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: list.id,
    data: {
      type: "List",
      listId: list.id,
    },
  });

  const style = {
    transition,
    opacity: isDragging ? 0.2 : 1,
    transform: isDragging
      ? `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)`
      : "none",
  };

  return {
    setNodeRef,
    attributes,
    listeners,
    style,
  };
};
