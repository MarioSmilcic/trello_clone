import { Dots } from "@/components/icons";
import { useModalsStore } from "@store/modals/modals.store";

export const ListHeader = ({ title, listId, listeners }) => {
  const { openModal } = useModalsStore();

  const handleDotsClick = () => openModal("listActions", { listId });

  return (
    <div className="list-title" {...listeners}>
      {title}
      <span className="list-dots">
        <Dots handleClick={handleDotsClick} />
      </span>
    </div>
  );
};
