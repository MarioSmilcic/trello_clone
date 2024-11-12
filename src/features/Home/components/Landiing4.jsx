import "../styles/landing4.style.css";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Landiing4 = () => {
  const navigate = useNavigate();

  return (
    <div className="landing4">
      <h1 className="landing4__title">Choose Your Plan</h1>
      <div className="landing4__cards">
        <div className="landing4__card">
          <div>
            <h2 className="landing4__card--title">Individual</h2>
            <p>For individuals working on their personal projects</p>
            <div className="landing4__card--price">
              $0<span>/month</span>
            </div>
            <ul className="landing4__card--features">
              <li>Create Multiple Lists</li>
              <li>Drag & Drop Cards</li>
              <li>Basic Task Management</li>
            </ul>
          </div>
          <Button text="Get started" handleClick={() => navigate("/board")} />
        </div>

        <div className="landing4__card">
          <div>
            <h2 className="landing4__card--title">Teams</h2>
            <p>For teams who want to collaborate effectively</p>
            <div className="landing4__card--price">Contact Us</div>
            <ul className="landing4__card--features">
              <li>All Individual Features</li>
              <li>Team Collaboration</li>
              <li>Priority Support</li>
            </ul>
          </div>
          <Button text="Contact us" handleClick={() => navigate("/contact")} />
        </div>
      </div>
    </div>
  );
};

export default Landiing4;
