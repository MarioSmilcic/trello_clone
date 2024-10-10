import { Formik, Form } from "formik";
import "./contact.style.css";
import { useContactForm } from "./hooks/useContactForm";
import ContactField from "./components/ContactField";
import ContactTextArea from "./components/ContactTextArea";
import ContactAgreement from "./components/ContactAgreement";
import ContactSubmitButton from "./components/ContactSubmitButton";
import ContactSuccessMessage from "./components/ContactSuccessMessage";

const Contact = () => {
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    messageSuccess,
    toggled,
    setToggled,
  } = useContactForm();

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
            <ContactField
              name="name"
              label="Name"
              required
              placeholder="Enter your Name"
            />
            <ContactField
              name="email"
              label="Email"
              required
              placeholder="Enter your Email"
              type="email"
            />
            <div className="contact__fields">
              <ContactField
                name="company"
                label="Company"
                placeholder="Company"
              />
              <ContactField
                name="job"
                label="Job Title"
                placeholder="Job Title"
              />
            </div>
            <ContactField
              name="phone"
              label="Phone Number"
              placeholder="Enter your Phone Number"
            />
            <ContactTextArea
              name="message"
              label="Message"
              required
              placeholder="Enter your Message"
            />
            <ContactAgreement toggled={toggled} setToggled={setToggled} />
            <ContactSubmitButton
              isValid={isValid}
              dirty={dirty}
              toggled={toggled}
            />
            <ContactSuccessMessage show={messageSuccess} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
