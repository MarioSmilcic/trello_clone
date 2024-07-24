import "./backdrop.style.css";
import { useModalsStore } from "../../../../store/modals/modals.store";

const Backdrop = () => {
  const { closeModals } = useModalsStore();

  return <div className="backdrop" onClick={closeModals}></div>;
};

export default Backdrop;
