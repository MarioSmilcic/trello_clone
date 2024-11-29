import "../styles";
const ContactTextArea = ({
  label,
  error,
  required,
  register,
  name,
  ...props
}) => (
  <div className="contact__field">
    <label htmlFor={name}>
      {label} {required && <span className="contact__required">*</span>}
    </label>
    <textarea
      className="contact__textArea"
      id={name}
      {...register(name)}
      {...props}
    />
    {error && <div className="contact__error">{error.message}</div>}
  </div>
);

export default ContactTextArea;
