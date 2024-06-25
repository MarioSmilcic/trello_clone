import "./styles/boardBody.style.css";
import "./BoardList";
import BoardList from "./BoardList";
import Button from "../../components/Button/Button";
import { useListstore } from "../../store/lists/lists.store";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import Close from "../../components/icons/Close";
import { useState } from "react";

const BoardBody = () => {
  const [showListModal, setShowListModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [enteredTitle, setEnteredTitle] = useState("");

  const handleListModal = () => {
    setShowListModal(!showListModal);
    setShowButton(!showButton);
  };

  const { lists, addList } = useListstore();

  const handleEnteredTitle = (e) => {
    setEnteredTitle(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const newList = {
      title: enteredTitle,
      id: Math.random(),
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

  return (
    <div className="board-body">
      {/* <BoardList /> */}
      {lists.map((list) => (
        <BoardList
          key={list.id}
          title={list.title}
          cards={list.cards}
          id={list.id}
        />
      ))}
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
  );
};

export default BoardBody;
