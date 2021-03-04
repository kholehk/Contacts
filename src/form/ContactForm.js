import React, { useState } from 'react';
import Input from './Input';

function ContactForm(props) {
  const { fields, addUser } = props;

  const initialFormState = fields.reduce((acc, cur) => {
    acc[cur.key] = "";

    return acc;
  }, { id: null });

  const [user, setUser] = useState(initialFormState);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  }

  return (
    <form
      className="mb-3"
      onSubmit={async (event) => {
        event.preventDefault();
        await addUser({ ...user, timestamp: Date.now() });
        setUser(initialFormState);
      }}>
      <h2>Add user</h2>
      {fields.map(field => {
        if (field.calculate) return "";
        return (
          <Input
            key={field.key}
            field={field}
            user={user}
            handleInputChange={handleInputChange}
          />
        )
      })}
      <button
        type="submit"
        className="btn btn-primary"
      >Add new user</button>
    </form>
  )
}

export default ContactForm;
