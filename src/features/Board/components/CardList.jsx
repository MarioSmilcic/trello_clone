import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Card } from "./Card";

export const CardList = ({ cards, listId }) => {
  const cardIds = cards.map((card) => card.id);

  return (
    <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
      <div className="card-list">
        {cards.map((card, index) => (
          <Card key={card.id} card={card} listId={listId} index={index} />
        ))}
      </div>
    </SortableContext>
  );
};
