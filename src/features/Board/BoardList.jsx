import { useState } from "react";
import "./styles/boardList.style.css";
import Card from "./Card";
import Button from "../../components/Button/Button";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import AddCardModal from "./components/AddCardModal/AddCardModal";
import Backdrop from "./components/Backdrop/Backdrop";

const BoardList = ({ list }) => {
  const [showCardModal, setShowCardModal] = useState(false);
  const [backdrop, setBackdrop] = useState(null);
  const [showButton, setShowButton] = useState(true);

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
      list,
    },
  });

  const style = {
    transition,
    opacity: isDragging ? 0.2 : 1,
    transform: isDragging
      ? `translate3d(${transform}px, ${transform}px, 0)`
      : "none",
  };

  const handleCardModal = () => {
    setShowCardModal(!showCardModal);
    setShowButton(!showButton);
    setBackdrop(true);
  };

  const handleCloseModal = () => {
    setBackdrop(false);
    setShowCardModal(false);
    setShowButton(!showButton);
  };

  // const cardsIds = list.cards.length
  //   ? list.cards.map((card) => card.id)
  //   : [list.id]; // Use list id to allow dropping in empty list
  const cardsIds = [list.id];
  return (
    <div ref={setNodeRef} style={style}>
      <CardWrapper>
        <div className="board-list">
          <div className="list-title" {...attributes} {...listeners}>
            {list.title}
          </div>
          <SortableContext items={cardsIds}>
            <div className="card-list">
              {list.cards.map((card, index) => (
                <Card
                  key={card.id}
                  card={card}
                  listId={list.id}
                  cardIndex={index}
                />
              ))}
            </div>
          </SortableContext>
          <div className="modal-outer">
            {showButton && (
              <Button text="+ Add a card" handleClick={handleCardModal} />
            )}

            {backdrop && <Backdrop onCancel={handleCloseModal} />}
            {showCardModal && (
              <AddCardModal
                handleCloseModal={handleCloseModal}
                listId={list.id}
              />
            )}
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default BoardList;
