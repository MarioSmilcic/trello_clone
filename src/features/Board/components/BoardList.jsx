import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from "./Card";
import Button from "@components/Button/Button";
import CardWrapper from "@components/CardWrapper/CardWrapper";
import {
  AddCardModal,
  DeleteModal,
  EditListModal,
  ListActions,
} from "../modals";
import { Dots } from "@/components/icons";
import { useModalsStore } from "@store/modals/modals.store";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const BoardList = ({ list }) => {
  const { modal, openModal } = useModalsStore();

  const {
    attributes,
    listeners,
    setNodeRef,
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
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const isCurrentList = modal?.props?.listId === list.id;
  const isAddCardModalOpen = modal?.type === "addCard" && isCurrentList;

  const handleDotsClick = () => openModal("listActions", { listId: list.id });
  const handleAddCardClick = () => openModal("addCard", { listId: list.id });

  const cardIds = list.cards.map((card) => card.id);

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <CardWrapper>
        {modal?.type === "editList" && isCurrentList && (
          <EditListModal listId={list.id} listTitle={list.title} />
        )}
        {modal?.type === "listActions" && isCurrentList && (
          <ListActions listId={list.id} />
        )}
        <div className="board-list">
          <div className="list-title" {...listeners}>
            {list.title}
            <span className="list-dots">
              <Dots handleClick={handleDotsClick} />
            </span>
          </div>
          <SortableContext
            items={cardIds}
            strategy={verticalListSortingStrategy}
          >
            <div className="card-list">
              {list.cards.map((card, index) => (
                <Card
                  key={card.id}
                  card={card}
                  listId={list.id}
                  index={index}
                />
              ))}
            </div>
          </SortableContext>
          <div className="modal-outer">
            {!isAddCardModalOpen && (
              <Button text="+ Add a card" handleClick={handleAddCardClick} />
            )}
            {isAddCardModalOpen && <AddCardModal listId={list.id} />}
          </div>
        </div>
      </CardWrapper>
      {modal?.type === "deleteList" && isCurrentList && (
        <DeleteModal title="Delete List" item={list.title} listId={list.id} />
      )}
    </div>
  );
};

export default BoardList;
