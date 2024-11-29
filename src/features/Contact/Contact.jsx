import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContactForm } from "./hooks/useContactForm";
import ContactField from "./components/ContactField";
import ContactTextArea from "./components/ContactTextArea";
import ContactAgreement from "./components/ContactAgreement";
import ContactSubmitButton from "./components/ContactSubmitButton";
import "./styles";

const Contact = () => {
  const {
    contactSchema,
    handleSubmit: onSubmit,
    toggled,
    setToggled,
  } = useContactForm();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      job: "",
      phone: "",
      message: "",
    },
    resolver: yupResolver(contactSchema),
    mode: "onChange",
  });

  return (
    <div className="contact">
      <h1 className="contact__title">Get in touch</h1>
      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        <ContactField
          name="name"
          label="Name"
          error={errors.name}
          required
          placeholder="Enter your Name"
          register={register}
          autoComplete="name"
        />
        <ContactField
          name="email"
          label="Email"
          error={errors.email}
          required
          type="email"
          placeholder="Enter your Email"
          register={register}
          autoComplete="email"
        />
        <div className="contact__fields">
          <ContactField
            name="company"
            label="Company"
            placeholder="Company"
            register={register}
            autoComplete="organization"
          />
          <ContactField
            name="job"
            label="Job Title"
            placeholder="Job Title"
            register={register}
            autoComplete="job-title"
          />
        </div>
        <ContactField
          name="phone"
          label="Phone Number"
          placeholder="Enter your Phone Number"
          register={register}
          autoComplete="tel"
        />
        <ContactTextArea
          name="message"
          label="Message"
          error={errors.message}
          required
          placeholder="Enter your Message"
          register={register}
          autoComplete="off"
        />
        <ContactAgreement toggled={toggled} setToggled={setToggled} />
        <ContactSubmitButton
          isValid={isValid}
          isDirty={isDirty}
          toggled={toggled}
        />
      </form>
    </div>
  );
};

export default Contact;
