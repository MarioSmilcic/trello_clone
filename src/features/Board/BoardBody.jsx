import "./styles/boardBody.style.css";
import "./BoardList";
import BoardList from "./BoardList";
import Button from "../../components/Button/Button";
import { useListstore } from "../../store/lists/lists.store";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import Close from "../../components/icons/Close";
import { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";

const BoardBody = () => {
  const [showListModal, setShowListModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [enteredTitle, setEnteredTitle] = useState("");
  const { lists, addList, moveList } = useListstore();
  const [activeList, setActiveList] = useState(null);

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
      // id: Math.floor(Math.random() * 10000),
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
    // console.log("drag start", e);

    if (e.active.data.current?.type === "List") {
      setActiveList(e.active.data.current.list);
      return;
    }
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (!over) return;

    const activeListId = active.id;
    const overListId = over.id;

    if (activeListId !== overListId) {
      moveList(activeListId, overListId);
    }
  };
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="board-body">
        {/* <BoardList /> */}
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
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
};

export default BoardBody;
