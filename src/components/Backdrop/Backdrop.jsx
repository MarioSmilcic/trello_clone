import "./backdrop.style.css";
import { useModalsStore } from "@store/modals/modals.store";

const Backdrop = () => {
  const { modal, closeModal } = useModalsStore();

  if (!modal) return null;

  return (
    <div className="backdrop" onClick={closeModal} role="presentation"></div>
  );
};

export default Backdrop;
