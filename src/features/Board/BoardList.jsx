import { useState } from "react";
import "./styles/boardList.style.css";
import Card from "./Card";
import { useListstore } from "../../store/lists/lists.store";
import Button from "../../components/Button/Button";
import Close from "../../components/icons/Close";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import AddCardModal from "./components/AddCardModal/AddCardModal";
import Backdrop from "./components/Backdrop/Backdrop";

const BoardList = ({ list }) => {
  const [showCardModal, setShowCardModal] = useState(false);
  const [backdrop, setBackdrop] = useState(null);

  const [showButton, setShowButton] = useState(true);
  const [enteredCard, setEnteredCard] = useState("");
  const { addCard, lists } = useListstore();

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

  const handleEnteredCard = (e) => {
    setEnteredCard(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newCard = {
      card: enteredCard,
      id: Math.floor(Math.random() * 1000000),
    };

    if (enteredCard.length > 0) {
      addCard(list.id, newCard);
      setEnteredCard("");
      setShowCardModal(!showCardModal);
      setShowButton(!showButton);
    } else {
      setShowCardModal(!showCardModal);
      setShowButton(!showButton);
    }
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
            {/* {showCardModal && (
              <div className="add-modal">
                <textarea
                  name="addCardModal"
                  value={enteredCard}
                  onChange={handleEnteredCard}
                  placeholder="Enter a title for this card..."
                  autoFocus
                  className="add-modal_textarea"
                ></textarea>
                <div className="add-cardModal_buttons">
                  <Button text="Add card" handleClick={submitHandler} />
                  <div className="add-cardModal_close">
                    <Close onClose={handleCardModal} />
                  </div>
                </div>
              </div>
            )} */}
            {backdrop && <Backdrop onCancel={handleCloseModal} />}
            {showCardModal && <AddCardModal />}
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default BoardList;
