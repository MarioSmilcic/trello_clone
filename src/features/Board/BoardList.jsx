import "./styles/boardList.style.css";
import Card from "./Card";
import Button from "../../components/Button/Button";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import AddCardModal from "./components/AddCardModal/AddCardModal";
import ListActions from "./components/ListActions/ListActions";
import Dots from "../../components/icons/Dots";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import EditListModal from "./components/EditListModal/EditListModal";
import { useModalsStore } from "../../store/modals/modals.store";

const BoardList = ({ list }) => {
  const {
    isCardModal,
    isListActions,
    isDeleteList,
    toggleCardModal,
    toggleListActions,
    isEditList,
    listId,
  } = useModalsStore();

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

  const cardsIds = [list.id];
  const isCardButtonVisible = !(isCardModal && listId === list.id);

  return (
    <div ref={setNodeRef} style={style}>
      <CardWrapper>
        {isEditList && listId === list.id && (
          <EditListModal listId={list.id} listTitle={list.title} />
        )}
        {isListActions && listId === list.id && <ListActions />}
        <div className="board-list">
          <div className="list-title" {...attributes} {...listeners}>
            {list.title}
            <span className="list-dots">
              <Dots handleClick={() => toggleListActions(list.id)} />
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
            {isCardButtonVisible && (
              <Button
                text="+ Add a card"
                handleClick={() => toggleCardModal(list.id)}
              />
            )}
            {isCardModal && listId === list.id && (
              <AddCardModal listId={list.id} />
            )}
          </div>
        </div>
      </CardWrapper>
      {isDeleteList && listId === list.id && (
        <DeleteModal title="Delete List" item={list.title} listId={list.id} />
      )}
    </div>
  );
};

export default BoardList;
