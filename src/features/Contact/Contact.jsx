import React from "react";
import { useState } from "react";
import "./contact.style.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [toggled, setToggled] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [enteredData, setEnteredData] = useState({
    name: "",
    email: "",
    company: "",
    job: "",
    phone: "",
    message: "",
  });

  const handleEnteredData = (identifier, value) => {
    setEnteredData((prevState) => {
      return {
        ...prevState,
        [identifier]: value,
      };
    });
  };

  const handleValidate = () => {
    const { name, email, message } = enteredData;

    return (
      name.trim().length > 0 &&
      email.includes("@") &&
      email.includes(".") &&
      message.trim().length > 0 &&
      toggled
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(enteredData);

    setMessageSuccess(true);

    setEnteredData({
      name: "",
      email: "",
      company: "",
      job: "",
      phone: "",
      message: "",
    });
    setToggled(!toggled);
  };

  return (
    <div className="contact">
      <h1 className="contact__title">Get in touch</h1>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__field">
          <label htmlFor="name">
            Name <span className="contact__required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your Name"
            className="contact__input"
            autoComplete="name"
            onChange={(e) => handleEnteredData("name", e.target.value)}
            value={enteredData.name}
          />
        </div>
        <div className="contact__field">
          <label htmlFor="email">
            Email <span className="contact__required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="contact__input"
            autoComplete="email"
            onChange={(e) => handleEnteredData("email", e.target.value)}
            value={enteredData.email}
          />
        </div>
        <div className="contact__fields">
          <div className="contact__field">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company"
              className="contact__input"
              autoComplete="company"
              onChange={(e) => handleEnteredData("company", e.target.value)}
              value={enteredData.company}
            />
          </div>
          <div className="contact__field">
            <label htmlFor="job">Job Title</label>
            <input
              id="job"
              name="job"
              type="text"
              placeholder="Job Title"
              className="contact__input"
              autoComplete="job"
              onChange={(e) => handleEnteredData("job", e.target.value)}
              value={enteredData.job}
            />
          </div>
        </div>
        <div className="contact__field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Enter your Phone Number"
            className="contact__input"
            autoComplete="phone"
            onChange={(e) => handleEnteredData("phone", e.target.value)}
            value={enteredData.phone}
          />
        </div>
        <div className="contact__field">
          <label htmlFor="message">
            Message <span className="contact__required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="Enter your Message"
            className="contact__textArea"
            autoComplete="message"
            onChange={(e) => handleEnteredData("message", e.target.value)}
            value={enteredData.message}
          />
        </div>
        <div className="contact__disclaimer">
          <button
            type="button"
            className={`contact__disclaimer--button ${
              toggled ? "toggled" : ""
            }`}
            onClick={() => setToggled(!toggled)}
          >
            <div className="contact__disclaimer--thumb"></div>
          </button>
          <div className="contact__disclaimer--text">
            <p>
              By selecting this, you agree to our
              <Link to={{ pathname: "/disclaimer" }} className="contact__link">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="contact__submit--btn"
          disabled={!handleValidate()}
        >
          Submit you request
        </button>
        {messageSuccess && (
          <p className="contact__message">
            Thank you! Your message has been received and we'll be in touch
            shortly.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
