import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  pointerWithin,
} from "@dnd-kit/core";

import { useDragDrop } from "../hooks/useDragDrop";
import { AddListButton, BoardLists } from "./";
import { DragOverlayContent } from "./DragOverlayContent";

const BoardContainer = () => {
  const { lists, activeItem, handleDragStart, handleDragOver, handleDragEnd } =
    useDragDrop();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 3 },
    })
  );

  const listsId = lists.map((list) => list.id);

  const dndConfig = {
    sensors,
    collisionDetection: pointerWithin,
    onDragStart: handleDragStart,
    onDragOver: handleDragOver,
    onDragEnd: handleDragEnd,
  };

  return (
    <DndContext {...dndConfig}>
      <div className="board-body">
        <BoardLists lists={lists} listsId={listsId} />
        <AddListButton />
      </div>

      <DragOverlay>
        <DragOverlayContent activeItem={activeItem} />
      </DragOverlay>
    </DndContext>
  );
};

export default BoardContainer;
