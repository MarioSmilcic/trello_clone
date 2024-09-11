import React from "react";
import "../styles/landing.style.css";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo_trello-clone.png";

const Landing = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/board");
  };

  return (
    <div className="landing">
      <div className="landing-left">
        <h1 className="landing-left__title">
          Welcome to TrelloClone: <br />
          Your Kanban <br />
          Solution
        </h1>
        <p>
          Streamline your workflows with the simplicity of TrelloClone - The
          Kanban board that brings efficiency to your fingertips.
        </p>
        <Button text="Try TrelloClone" handleClick={() => handleNavigate()} />
      </div>
      <div className="landing-right">
        <h1 className="landing-right__logo">TrelloClone</h1>
        <img src={Logo} alt="logo" className="landing-right__logo--img" />
        <p>
          Effortlessly reorganize tasks with a simple drag and drop interface,
          making project adjustments a breeze.
        </p>
        <Button text="Try" handleClick={() => handleNavigate()} />
      </div>
    </div>
  );
};

export default Landing;
