import React, { useState } from 'react';

function Input(props) {
  const { field, user, handleInputChange } = props;

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
        value={user[field.key]}
        onChange={handleInputChange}
        aria-describedby={field.label}
      />
    </div>
  );
}

function AddUserForm(props) {
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

export default AddUserForm;
