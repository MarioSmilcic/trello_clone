import "../styles/landing3.style.css";
import { benefits } from "../../../data/app-data";

const Landing3 = () => {
  return (
    <div className="landing3">
      <h1>Discover the Power of Our Products</h1>
      <div className="landing3__benefits">
        <h2 className="landing3__benefits--title">Key Benefits:</h2>
        <div>
          <ul className="landing3__benefits--list">
            {benefits.map((benefit) => (
              <li key={benefit.id}>{benefit.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing3;
