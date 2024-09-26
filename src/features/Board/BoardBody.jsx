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
import { SortableContext } from "@dnd-kit/sortable";
import {
  handleDragStart,
  handleDragEnd,
  handleDragOver,
} from "../Board/helpers/dragAndDropHandlers";

const BoardBody = () => {
  const { isListModal, toggleListModal, isListButton, listId } =
    useModalsStore();
  const { lists } = useListstore();
  const [activeList, setActiveList] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 3 },
    })
  );

  const listsId = lists.map((list) => list.id);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragStart={(e) => handleDragStart(e, setActiveList, setActiveCard)}
      onDragEnd={(e) => handleDragEnd(e, setActiveList, setActiveCard)}
      onDragOver={handleDragOver}
    >
      <div className="board-body">
        <SortableContext items={listsId}>
          {lists.map((list) => (
            <BoardList key={list.id} list={list} />
          ))}
        </SortableContext>
        <div>
          {isListButton && (
            <Button
              text="+ Add another list"
              handleClick={() => toggleListModal(null)}
            />
          )}
          {isListModal && listId === null && <AddListModal />}
        </div>
      </div>

      <DragOverlay>
        {activeList && <BoardList list={activeList} />}
        {activeCard && (
          <Card
            card={activeCard}
            listId={activeCard.listId}
            cardIndex={activeCard.cardIndex}
          />
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default BoardBody;
