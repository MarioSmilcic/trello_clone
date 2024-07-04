import "./styles/boardBody.style.css";
import "./BoardList";
import BoardList from "./BoardList";
import Button from "../../components/Button/Button";
import { useListstore } from "../../store/lists/lists.store";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import Close from "../../components/icons/Close";
import { useState } from "react";
import Card from "./Card";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  MouseSensor,
  useSensor,
  useSensors,
  closestCenter,
  pointerWithin,
} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";

const BoardBody = () => {
  const [showListModal, setShowListModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [enteredTitle, setEnteredTitle] = useState("");
  const { lists, addList, moveList, moveCard } = useListstore();
  const [activeList, setActiveList] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const sensors = useSensors(
    // useSensor(PointerSensor, {
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  const listsId = lists.map((list) => list.id);

  const handleListModal = () => {
    setShowListModal(!showListModal);
    setShowButton(!showButton);
  };

  const handleEnteredTitle = (e) => {
    setEnteredTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newList = {
      title: enteredTitle,
      id: lists.length + 1,
      cards: [],
    };

    if (enteredTitle.length > 0) {
      addList(newList);
      setEnteredTitle("");
      setShowListModal(!showListModal);
      setShowButton(!showButton);
    } else {
      setShowListModal(!showListModal);
      setShowButton(!showButton);
    }
  };

  const handleDragStart = (e) => {
    if (e.active.data.current?.type === "List") {
      setActiveList(e.active.data.current.list);
    } else if (e.active.data.current?.type === "Card") {
      setActiveCard(e.active.data.current.card);
    }
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (!over) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    if (
      activeData?.type === "List" &&
      overData?.type === "List" &&
      active.id !== over.id
    ) {
      moveList(active.id, over.id);
    } else if (activeData?.type === "Card") {
      const { listId: activeListId, cardIndex: activeCardIndex } = activeData;

      if (overData?.type === "Card") {
        moveCard(
          activeListId,
          overData.listId,
          activeCardIndex,
          overData.cardIndex
        );
      } else if (overData?.type === "List") {
        moveCard(activeListId, over.id, activeCardIndex, 0);
      }
    }

    setActiveList(null);
    setActiveCard(null);
  };

  const handleDragOver = (e) => {
    const { active, over } = e;
    if (!over) return;

    const { id: activeId, data: activeData } = active;
    const { id: overId, data: overData } = over;

    const activeType = activeData.current?.type;
    const overType = overData.current?.type;

    if (activeType === "List" && overType === "List" && activeId !== overId) {
      moveList(activeId, overId);
      return;
    }

    if (activeType === "Card") {
      const { listId: activeListId, cardIndex: activeCardIndex } =
        activeData.current;

      if (overType === "Card") {
        const { listId: overListId, cardIndex: overCardIndex } =
          overData.current;
        if (activeListId !== overListId || activeCardIndex !== overCardIndex) {
          moveCard(activeListId, overListId, activeCardIndex, overCardIndex);
        }
      } else if (overType === "List") {
        moveCard(activeListId, overId, activeCardIndex, 0);
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      collisionDetection={closestCenter}
      // collisionDetection={pointerWithin}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <div className="board-body">
        <SortableContext items={listsId}>
          {lists.map((list) => (
            <BoardList key={list.id} list={list} />
          ))}
        </SortableContext>
        <div>
          {showButton && (
            <Button text="+ Add another list" handleClick={handleListModal} />
          )}
          {showListModal && (
            <CardWrapper>
              <input
                type="text"
                placeholder="Enter list title..."
                className="board-input"
                autoFocus
                name="list title"
                value={enteredTitle}
                onChange={handleEnteredTitle}
              />
              <div className="add-listModal_buttons">
                <Button text="Add list" handleClick={submitHandler} />
                <div className="add-listModal_close">
                  <Close onClose={handleListModal} />
                </div>
              </div>
            </CardWrapper>
          )}
        </div>
      </div>

      {createPortal(
        <DragOverlay>
          {activeList && <BoardList list={activeList} />}
          {activeCard && (
            <Card
              card={activeCard}
              listId={activeCard.listId}
              cardIndex={activeCard.cardIndex}
            />
          )}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
};

export default BoardBody;
