import "./navModal.style.css";
import { Link } from "react-router-dom";
import { navigationLinks } from "@/data/app-data";

const NavModal = ({ showModal, onNavModal }) => {
  return (
    <div
      className={`navModal ${showModal && "navModal__visible"}`}
      onClick={onNavModal}
    >
      <div className="navModal__links">
        {navigationLinks.map(({ id, path, label }) => (
          <Link key={id} to={{ pathname: path }}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavModal;
