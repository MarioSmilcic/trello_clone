import { useModalsStore } from "@store/modals/modals.store";
import "./backdrop.style.css";

const Backdrop = () => {
  const { closeModal } = useModalsStore();

  return <div className="backdrop" onClick={closeModal}></div>;
};

export default Backdrop;
