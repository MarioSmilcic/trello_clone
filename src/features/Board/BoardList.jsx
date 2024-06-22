import "./styles/boardList.style.css";
import ListTitle from "./ListTitle";
import Card from "./Card";
import { useCardsStore } from "../../store/cards/cards.store";
import Button from "../../components/Button/Button";
// import AddCardModal from "./components/AddCardModal/AddCardModal";
import { useState } from "react";
import Close from "../../components/icons/Close";

const BoardList = () => {
  const [showCardModal, setShowCardModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [enteredCard, setEnteredCard] = useState("");
  const { cards, addCard } = useCardsStore();

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
      id: Math.random(),
    };

    if (enteredCard.length > 0) {
      addCard(newCard);
      setEnteredCard("");
      setShowCardModal(!showCardModal);
      setShowButton(!showButton);
    } else {
      setShowCardModal(!showCardModal);
      setShowButton(!showButton);
    }
  };
  return (
    <div className="board-list">
      <ListTitle />
      <div className="card-list">
        {cards.map((card) => (
          <Card key={card.id} card={card.card} />
        ))}
      </div>
      {showButton && (
        <Button text="+ Add a card" handleClick={handleCardModal} />
      )}
      {/* {showCardModal && AddCardModal} */}
      {showCardModal && (
        <div className="add-modal">
          <textarea
            name="addCardModal"
            id=""
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
  );
};

export default BoardList;
