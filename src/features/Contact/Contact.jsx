import Button from "../../components/Button/Button";
import "./contact.style.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact us</h1>
      <div className="contact_form">
        <h2>Enter Your Data</h2>
        <div className="contact_form__data">
          <div className="contact_form__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your Name"
              className="contact_form__input"
              autoComplete="name"
            />
          </div>
          <div className="contact_form__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter a valid email address"
              className="contact_form__input"
              autoComplete="email"
            />
          </div>
          <div className="contact_form__field">
            <label htmlFor="text">Message</label>
            <textarea
              id="text"
              name="text"
              placeholder="Enter your message"
              className="contact_form__area"
              autoComplete="off"
            />
          </div>
        </div>

        <Button text="Submit your request" />
      </div>
    </div>
  );
};

export default Contact;
