import { useState } from "react";
import "./styles/boardList.style.css";
import Card from "./Card";
import Button from "../../components/Button/Button";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import AddCardModal from "./components/AddCardModal/AddCardModal";
import Backdrop from "./components/Backdrop/Backdrop";
import ListActions from "./components/ListActions/ListActions";
import Dots from "../../components/icons/Dots";
import CardModal from "./components/CardModal/CardModal";
import EditListModal from "./components/EditListModal/EditListModal";

const BoardList = ({ list }) => {
  const [showCardModal, setShowCardModal] = useState(false);
  const [backdrop, setBackdrop] = useState(null);
  const [showButton, setShowButton] = useState(true);
  const [listActions, setListActions] = useState(false);
  const [deleteList, setDeleteList] = useState(false);
  const [editModal, setEditModal] = useState(false);

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
    setShowCardModal(true);
    setShowButton(false);
    setBackdrop(true);
    setListActions(false);
  };

  const handleCloseModal = () => {
    setShowCardModal(false);
    setShowButton(true);
    setBackdrop(false);
    setListActions(false);
    setDeleteList(false);
    setEditModal(false);
  };

  const handleListActions = () => {
    setListActions(true);
    setBackdrop(true);
  };

  const handleDeleteList = () => {
    setDeleteList(true);
    setBackdrop(true);
    setListActions(false);
  };

  const handleEditModal = () => {
    setEditModal(true);
    setListActions(false);
  };

  // const cardsIds = list.cards.length
  //   ? list.cards.map((card) => card.id)
  //   : [list.id]; // Use list id to allow dropping in empty list
  const cardsIds = [list.id];
  return (
    <div ref={setNodeRef} style={style}>
      <CardWrapper>
        {editModal && (
          <EditListModal
            onClose={handleCloseModal}
            listId={list.id}
            listTitle={list.title}
          />
        )}
        {listActions && (
          <ListActions
            handleListActions={handleListActions}
            handleCardModal={handleCardModal}
            handleCloseModal={handleCloseModal}
            handleDeleteList={handleDeleteList}
            handleEditModal={handleEditModal}
          />
        )}
        <div className="board-list">
          <div className="list-title" {...attributes} {...listeners}>
            {list.title}
            <span className="list-dots">
              <Dots handleClick={handleListActions} />
            </span>
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
      {/* {listActions && (
        <ListActions
          handleListActions={handleListActions}
          handleCardModal={handleCardModal}
          handleCloseModal={handleCloseModal}
          handleDeleteList={handleDeleteList}
          handleEditModal={handleEditModal}
        />
      )} */}
      {deleteList && (
        <CardModal
          title="Delete List"
          item={list.title}
          onClose={handleCloseModal}
          listId={list.id}
        />
      )}
    </div>
  );
};

export default BoardList;
