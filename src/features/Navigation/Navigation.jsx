import "./navigation.style.css";
import { Link } from "react-router-dom";
import Hamburger from "../../components/icons/Hamburger";
import CloseMenu from "../../components/icons/CloseMenu";
import NavModal from "./components/NavModal";
import { useState } from "react";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="navigation">
        <div className="logo">
          <h4 className={`nav__logo ${showModal && "nav__logo--hidden"}`}>
            TrelloClone
          </h4>
        </div>
        <div className="links">
          <Link to={{ pathname: "/" }}> Home</Link>
          <Link to={{ pathname: "/board" }}>Board</Link>
          <Link to={{ pathname: "/about" }}>About</Link>
          <Link to={{ pathname: "/contact" }}>Contact</Link>
        </div>

        {/* <div className="hamburger"> */}
        <div className={`hamburger ${showModal && " hamburger__show"}`}>
          {!showModal && <Hamburger onModal={handleModal} />}
          {showModal && <CloseMenu onModal={handleModal} />}
        </div>
      </div>

      <NavModal showModal={showModal} onNavModal={handleModal} />
    </>
  );
};

export default Navigation;
