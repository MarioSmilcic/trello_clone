import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./contact.style.css";
import { validationSchema } from "./helpers/validation";

const Contact = () => {
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [toggled, setToggled] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    company: "",
    job: "",
    phone: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setMessageSuccess(true);
    resetForm();
    setToggled(false);
  };

  return (
    <div className="contact">
      <h1 className="contact__title">Get in touch</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className="contact__form">
            <div className="contact__field">
              <label htmlFor="name">
                Name <span className="contact__required">*</span>
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Enter your Name"
                className="contact__input"
                autoComplete="name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="contact__error"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">
                Email <span className="contact__required">*</span>
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter your Email"
                className="contact__input"
                autoComplete="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="contact__error"
              />
            </div>
            <div className="contact__fields">
              <div className="contact__field">
                <label htmlFor="company">Company</label>
                <Field
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company"
                  className="contact__input"
                  autoComplete="company"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="job">Job Title</label>
                <Field
                  id="job"
                  name="job"
                  type="text"
                  placeholder="Job Title"
                  className="contact__input"
                  autoComplete="job"
                />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="phone">Phone Number</label>
              <Field
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter your Phone Number"
                className="contact__input"
                autoComplete="phone"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">
                Message <span className="contact__required">*</span>
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Enter your Message"
                className="contact__textArea"
                autoComplete="message"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="contact__error"
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
                  <Link to="/disclaimer" className="contact__link">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="contact__submit--btn"
              disabled={!(isValid && dirty && toggled)}
            >
              Submit your request
            </button>
            {messageSuccess && (
              <p className="contact__message">
                Thank you! Your message has been received and we'll be in touch
                shortly.
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
