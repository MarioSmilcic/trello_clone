import "./styles/contactMessage.style.css";

const ContactSuccessMessage = ({ show }) =>
  show && (
    <p className="contact__message">
      Thank you! Your message has been received and we'll be in touch shortly.
    </p>
  );

export default ContactSuccessMessage;
