import React from 'react';

function Input(props) {
  const { field, contact, handleInputChange } = props;

  return (
    <div className="mb-3">
      <label
        className="form-label"
        htmlFor={field.key}
      >{field.label}</label>
      <input
        type={field.type || "text"}
        className="form-control"
        id={field.key}
        name={field.key}
        value={contact[field.key]}
        onChange={event => handleInputChange(event)}
        aria-describedby={field.label}
      />
    </div>
  );
}

export default Input;