const ContactTextArea = ({
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
