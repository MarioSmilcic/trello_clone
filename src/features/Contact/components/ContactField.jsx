const ContactField = ({
  label,
  error,
  required,
  register,
  name,
  className,
  ...props
}) => (
  <div className={`contact__field ${className}`}>
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
