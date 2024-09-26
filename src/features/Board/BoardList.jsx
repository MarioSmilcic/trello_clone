import "./styles/boardList.style.css";
import { SortableContext } from "@dnd-kit/sortable";
import Card from "./Card";
import Button from "../../components/Button/Button";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import AddCardModal from "./components/AddCardModal/AddCardModal";
import ListActions from "./components/ListActions/ListActions";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import EditListModal from "./components/EditListModal/EditListModal";
import Dots from "../../components/icons/Dots";
import { useModalsStore } from "../../store/modals/modals.store";
import { useSortableItem } from "./hooks/useSortableItem";

const BoardList = ({ list }) => {
  const {
    isCardModal,
    isListActions,
    isDeleteList,
    isEditList,
    toggleCardModal,
    toggleListActions,
    listId,
  } = useModalsStore();

  const { setNodeRef, attributes, listeners, style } = useSortableItem(list);

  const isCurrentList = listId === list.id;

  const showEditListModal = isEditList && isCurrentList;
  const showListActions = isListActions && isCurrentList;
  const showAddCardModal = isCardModal && isCurrentList;
  const showDeleteModal = isDeleteList && isCurrentList;
  const isCardButtonVisible = !showAddCardModal;

  const handleDotsClick = () => toggleListActions(list.id);
  const handleAddCardClick = () => toggleCardModal(list.id);

  const cardIds = list.cards.map((card) => card.id);

  return (
    <div ref={setNodeRef} style={style}>
      <CardWrapper>
        {showEditListModal && (
          <EditListModal listId={list.id} listTitle={list.title} />
        )}
        {showListActions && <ListActions />}
        <div className="board-list">
          <div className="list-title" {...attributes} {...listeners}>
            {list.title}
            <span className="list-dots">
              <Dots handleClick={handleDotsClick} />
            </span>
          </div>
          <SortableContext items={cardIds}>
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
              <Button text="+ Add a card" handleClick={handleAddCardClick} />
            )}
            {showAddCardModal && <AddCardModal listId={list.id} />}
          </div>
        </div>
      </CardWrapper>
      {showDeleteModal && (
        <DeleteModal title="Delete List" item={list.title} listId={list.id} />
      )}
    </div>
  );
};

export default BoardList;
