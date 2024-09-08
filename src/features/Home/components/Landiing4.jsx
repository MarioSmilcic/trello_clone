import "../styles/landing4.style.css";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Landiing4 = () => {
  const navigate = useNavigate();

  return (
    <div className="landing4">
      <h1 className="landing4__title">Pricing</h1>
      <div className="landing4__cards">
        <div className="landing4__card">
          <div>
            <h2 className="landing4__card--title">Individual</h2>
            <p>For individuals working on their next big idea.</p>
          </div>
          <h2>
            $0/month <br />
            forever
          </h2>
          <Button text="Get started" handleClick={() => navigate("/board")} />
        </div>
        <div className="landing4__card">
          <div>
            <h2 className="landing4__card--title">Teams</h2>
            <p>
              For teams who want to get organized and prioritize their work.
            </p>
          </div>
          <h2>Let's talk</h2>
          <Button text="Contact us" handleClick={() => navigate("/contact")} />
        </div>
      </div>
    </div>
  );
};

export default Landiing4;
