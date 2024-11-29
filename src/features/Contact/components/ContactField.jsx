import "../styles";

const ContactField = ({ label, error, required, register, name, ...props }) => (
  <div className="contact__field">
    <label htmlFor={name}>
      {label} {required && <span className="contact__required">*</span>}
    </label>
    <input
      className="contact__input"
      id={name}
      {...register(name)}
      {...props}
    />
    {error && <div className="contact__error">{error.message}</div>}
  </div>
);

export default ContactField;
