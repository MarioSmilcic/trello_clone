import "./styles/boardBody.style.css";
import BoardList from "./BoardList";
import Button from "../../components/Button/Button";
import Card from "./Card";
import AddListModal from "./components/AddListModal/AddListModal";
import { useListstore } from "../../store/lists/lists.store";
import { useModalsStore } from "../../store/modals/modals.store";
import { useState } from "react";
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
import {
  handleDragStart,
  handleDragEnd,
  handleDragOver,
} from "../Board/helpers/dragAndDropHandlers";

const BoardBody = () => {
  const { modal, openModal } = useModalsStore();
  const { lists } = useListstore();
  const [activeList, setActiveList] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

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
      onDragStart={(e) => handleDragStart(e, setActiveList, setActiveCard)}
      onDragOver={handleDragOver}
      onDragEnd={(e) => handleDragEnd(e, setActiveList, setActiveCard)}
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
        {activeList && <BoardList list={activeList} />}
        {activeCard && (
          <Card
            card={activeCard}
            listId={activeCard.listId}
            cardIndex={activeCard.index}
          />
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default BoardBody;
