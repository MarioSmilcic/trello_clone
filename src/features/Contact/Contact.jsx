import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import "./contact.style.css";
import { validationSchema } from "./helpers/validation";
import { fields } from "./components/inputFields.js";

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
            {fields.map((field) => {
              if (field.group) {
                return (
                  <div className="contact__fields" key={field.id}>
                    {field.fields.map((subField) => {
                      const Component = subField.component;
                      return (
                        <Component key={subField.id} {...subField.props} />
                      );
                    })}
                  </div>
                );
              } else {
                const Component = field.component;
                return <Component key={field.id} {...field.props} />;
              }
            })}

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
