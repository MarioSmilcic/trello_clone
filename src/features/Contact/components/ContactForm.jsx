import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactField from "./ContactField";
import ContactTextArea from "./ContactTextArea";
import ContactAgreement from "./ContactAgreement";
import ContactSubmitButton from "./ContactSubmitButton";
import { CONTACT_FIELDS } from "@/data/app-data";
import { DEFAULT_VALUES } from "../helpers/helpers";
import "../styles";

const ContactForm = ({ contactSchema, onSubmit, toggled, setToggled }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(contactSchema),
    mode: "onChange",
  });

  const renderField = (field) => {
    const Component =
      field.fieldtype === "textarea" ? ContactTextArea : ContactField;

    return (
      <Component
        key={field.name}
        {...field}
        error={errors[field.name]}
        register={register}
      />
    );
  };

  return (
    <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact__grid">{CONTACT_FIELDS.map(renderField)}</div>
      <ContactAgreement toggled={toggled} setToggled={setToggled} />
      <ContactSubmitButton
        isValid={isValid}
        isDirty={isDirty}
        toggled={toggled}
      />
    </form>
  );
};

export default ContactForm;
