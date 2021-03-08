import React, { useEffect, useState, useCallback } from 'react';

import Input from './Input';

function ContactForm(props) {
  const { title, fields, currentContact, submitContact } = props;

  const initContact = useCallback(
    (obj) => fields.reduce((contact, field) => {
      const { key, calculate, auto } = field;

      if (auto) return contact;

      contact[key] = calculate && calculate instanceof Function
        ? calculate(obj[key], "yyyy-MM-dd")
        : obj[key];

      contact[key] = contact[key] ?? "";

      return contact;
    }, { id: currentContact.id ?? null }),
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
            {fields.map(field => field.auto
              ? ""
              : <Input
                key={field.key}
                field={field}
                contact={contact}
                handleInputChange={handleInputChange}
              />
            )}
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

                const submitedContact = fields.reduce((calculatedContact, field) => {
                  const { key, auto, calculate } = field;

                  if (auto && auto instanceof Function)
                    return { ...calculatedContact, [key]: auto() };

                  if (calculate && calculate instanceof Function)
                    return { ...calculatedContact, [key]: calculate(calculatedContact[key], null, false) };

                  return calculatedContact;
                }, contact);

                await submitContact(submitedContact);
              }}
            >{title}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;
