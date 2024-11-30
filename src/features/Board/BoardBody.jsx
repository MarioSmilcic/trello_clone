import "./styles/boardBody.style.css";
import BoardList from "./BoardList";
import Button from "@components/Button/Button";
import Card from "./Card";
import AddListModal from "./components/AddListModal/AddListModal";
import { useModalsStore } from "@/store/modals/modals.store";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  pointerWithin,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDragDrop } from "./hooks/useDragDrop";

const BoardBody = () => {
  const { modal, openModal } = useModalsStore();
  const { lists, activeItem, handleDragStart, handleDragOver, handleDragEnd } =
    useDragDrop();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 3 },
    })
  );

  const listsId = lists.map((list) => list.id);
  const handleAddListClick = () => openModal("addList");

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="board-body">
        <SortableContext
          items={listsId}
          strategy={horizontalListSortingStrategy}
        >
          {lists.map((list) => (
            <BoardList key={list.id} list={list} />
          ))}
        </SortableContext>

        <div>
          {modal?.type !== "addList" && (
            <Button
              text="+ Add another list"
              handleClick={handleAddListClick}
            />
          )}
          {modal?.type === "addList" && <AddListModal />}
        </div>
      </div>

      <DragOverlay>
        {activeItem &&
          (activeItem.cards ? (
            <BoardList list={activeItem} />
          ) : (
            <Card
              card={activeItem}
              listId={activeItem.listId}
              cardIndex={activeItem.index}
            />
          ))}
      </DragOverlay>
    </DndContext>
  );
};

export default BoardBody;
