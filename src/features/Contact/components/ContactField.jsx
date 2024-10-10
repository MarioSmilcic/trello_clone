import React from "react";
import { Field, ErrorMessage } from "formik";

const ContactField = ({ name, label, required, ...props }) => (
  <div className="contact__field">
    <label htmlFor={name}>
      {label} {required && <span className="contact__required">*</span>}
    </label>
    <Field
      id={name}
      name={name}
      className="contact__input"
      autoComplete={name}
      {...props}
    />
    <ErrorMessage name={name} component="div" className="contact__error" />
  </div>
);

export default ContactField;
