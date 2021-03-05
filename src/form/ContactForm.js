import React, { useEffect, useState, useCallback } from 'react';
import Input from './Input';

function ContactForm(props) {
  const { title, fields, currentContact, submitContact } = props;
  const initContact = useCallback(
    (obj) => fields.reduce((acc, cur) => {
      acc[cur.key] = obj[cur.key] || '';
      return acc;
    }, { id: currentContact.id || null }),
    [currentContact, fields]
  );
  const [contact, setContact] = useState(initContact(currentContact));

  useEffect(() => setContact(initContact(currentContact)), [currentContact, initContact]);

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
      <form
        id="contactFormDialog"
        className="modal-dialog"
      >
        <div className="modal-content">
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
              formTarget="contactFormDialog"
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={async (event) => {
                event.preventDefault();
                await submitContact({ ...contact, createAt: Date.now() });
              }}
            >{title}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;
