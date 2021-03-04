import React, { useEffect, useState } from 'react';
import Input from './Input';

function ContactForm(props) {
  const { title, fields, currentContact, submitContact } = props;
  const [contact, setContact] = useState(currentContact);

  useEffect(() => setContact(props.currentContact), [props]);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setContact({ ...contact, [name]: value });
  }

  return (
    <div
      className="modal fade"
      id="contactForm"
      tabIndex="-1"
      aria-labelledby="contactFormLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <form
          className="modal-content"
          onSubmit={async (event) => {
            event.preventDefault();
            await submitContact({ ...contact, createAt: Date.now() });
          }}
        >
          <div className="modal-header">
            <h5
              className="modal-title"
              id="contactFormLabel"
            >{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {fields.map(field => {
              if (field.calculate) return "";
              return (
                <Input
                  key={field.key}
                  field={field}
                  contact={contact}
                  handleInputChange={handleInputChange}
                />
              )
            })}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >Close</button>
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >{title}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm;
