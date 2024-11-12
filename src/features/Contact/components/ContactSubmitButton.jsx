import "./styles/contactButton.style.css";

const ContactSubmitButton = ({ isValid, dirty, toggled }) => (
  <button
    type="submit"
    className="contact__submit--btn"
    disabled={!(isValid && dirty && toggled)}
  >
    Submit your request
  </button>
);

export default ContactSubmitButton;
