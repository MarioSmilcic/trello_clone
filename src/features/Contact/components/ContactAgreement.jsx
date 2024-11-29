import { Link } from "react-router-dom";
import "../styles";

const ContactAgreement = ({ toggled, setToggled }) => (
  <div className="contact__agreement">
    <button
      type="button"
      className={`contact__agreement--button ${toggled ? "toggled" : ""}`}
      onClick={() => setToggled(!toggled)}
    >
      <div className="contact__agreement--thumb"></div>
    </button>
    <div className="contact__agreement--text">
      <p>
        By selecting this, you agree to our
        <Link to="/agreement" className="contact__link">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  </div>
);

export default ContactAgreement;
