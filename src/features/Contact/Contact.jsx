import ContactForm from "./components/ContactForm";
import { useContactForm } from "./hooks/useContactForm";
import "./styles";

const Contact = () => {
  const { contactSchema, handleSubmit, toggled, setToggled } = useContactForm();

  return (
    <div className="contact">
      <h1 className="contact__title">Get in touch</h1>
      <ContactForm
        contactSchema={contactSchema}
        onSubmit={handleSubmit}
        toggled={toggled}
        setToggled={setToggled}
      />
    </div>
  );
};

export default Contact;
