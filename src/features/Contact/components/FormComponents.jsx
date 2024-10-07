import { Field, ErrorMessage } from "formik";

export const ContactInput = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}) => {
  return (
    <div className="contact__field">
      <label htmlFor={name}>
        {label} {required && <span className="contact__required">*</span>}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="contact__input"
        autoComplete={name}
      />
      <ErrorMessage name={name} component="div" className="contact__error" />
    </div>
  );
};

export const ContactTextArea = ({
  label,
  name,
  placeholder,
  required = false,
}) => {
  return (
    <div className="contact__field">
      <label htmlFor={name}>
        {label} {required && <span className="contact__required">*</span>}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        placeholder={placeholder}
        className="contact__textArea"
        autoComplete={name}
      />
      <ErrorMessage name={name} component="div" className="contact__error" />
    </div>
  );
};
