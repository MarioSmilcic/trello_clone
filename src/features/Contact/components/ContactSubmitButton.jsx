import "../styles";

const ContactSubmitButton = ({ isValid, isDirty, toggled }) => (
  <button
    type="submit"
    className="contact__submit--btn"
    disabled={!(isValid && isDirty && toggled)}
  >
    Submit your request
  </button>
);

export default ContactSubmitButton;
