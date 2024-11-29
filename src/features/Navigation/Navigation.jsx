import "./navigation.style.css";
import { Link, useNavigate } from "react-router-dom";
import { Hamburger, CloseMenu } from "@components/icons";
import NavModal from "./components/NavModal";
import { useState } from "react";
import Logo from "@/assets/Logo_trello-clone.png";
import { navigationLinks } from "@/data/app-data";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="navigation">
        <div className="logo">
          <h4 className={`nav__logo ${showModal && "nav__logo--hidden"}`}>
            <img src={Logo} alt="logo" onClick={() => navigate("/")} />
          </h4>
        </div>
        <div className="links">
          {navigationLinks.map(({ id, path, label }) => (
            <Link key={id} to={{ pathname: path }}>
              {label}
            </Link>
          ))}
        </div>

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
