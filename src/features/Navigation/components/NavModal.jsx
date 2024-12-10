import "./navModal.style.css";
import { Link } from "react-router-dom";
import AuthButton from "@/components/AuthButton/AuthButton";

const NavModal = ({ showModal, onNavModal, links }) => {
  return (
    <div
      className={`navModal ${showModal && "navModal__visible"}`}
      onClick={onNavModal}
    >
      <div className="navModal__links">
        {links.map(({ id, path, label }) => (
          <Link key={id} to={path}>
            {label}
          </Link>
        ))}
        <AuthButton variant="secondary" />
      </div>
    </div>
  );
};

export default NavModal;
