import "./styles/boardList.style.css";
import Card from "./Card";
import { useListstore } from "../../store/lists/lists.store";
import Button from "../../components/Button/Button";
// import AddCardModal from "./components/AddCardModal/AddCardModal";
import { useState } from "react";
import Close from "../../components/icons/Close";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const BoardList = ({ list }) => {
  const [showCardModal, setShowCardModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [enteredCard, setEnteredCard] = useState("");
  const { addCard } = useListstore();

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
    transformOrigin: "0 0",
  };

  const handleCardModal = () => {
    setShowCardModal(!showCardModal);
    setShowButton(!showButton);
  };

  const handleEnteredCard = (e) => {
    setEnteredCard(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newCard = {
      card: enteredCard,
      id: Math.floor(Math.random() * 10000),
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

  return (
    <div ref={setNodeRef} style={style}>
      <CardWrapper>
        <div
          className="board-list"
          //  ref={setNodeRef} style={style}
        >
          <div className="list-title" {...attributes} {...listeners}>
            {list.title}
          </div>
          <div className="card-list">
            {list.cards &&
              list.cards.map((card) => (
                <Card key={card.id} card={card.card} id={card.id} />
              ))}
          </div>
          <div className="modal-outer">
            {showButton && (
              <Button text="+ Add a card" handleClick={handleCardModal} />
            )}
            {/* {showCardModal && AddCardModal} */}
            {showCardModal && (
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
            )}
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default BoardList;
