import "./navModal.style.css";
import { Link } from "react-router-dom";

const NavModal = ({ showModal, onNavModal }) => {
  return (
    <div
      className={`navModal ${showModal && "navModal__visible"}`}
      onClick={onNavModal}
    >
      <div className="navModal__links">
        <Link to={{ pathname: "/" }}> Home</Link>
        <Link to={{ pathname: "/board" }}>Board</Link>
        <Link to={{ pathname: "/about" }}>About</Link>
        <Link to={{ pathname: "/contact" }}>Contact</Link>
      </div>
    </div>
  );
};

export default NavModal;
