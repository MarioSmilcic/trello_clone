import "./backdrop.style.css";
import { useModalsStore } from "../../../../store/modals/modals.store";

const Backdrop = () => {
  const { closeModal } = useModalsStore();

  return <div className="backdrop" onClick={closeModal}></div>;
};

export default Backdrop;
