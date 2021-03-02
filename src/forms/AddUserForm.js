import React, { useState } from 'react';

const elements = [
  { id: "name", label: "Name" },
  { id: "surname", label: "Surname" },
  { id: "birthday", label: "Birthday", type: "date" },
  { id: "phone", label: "Phone", type: "tel" },
  { id: "email", label: "Email", type: "email" },
];

function Input(props) {
  const { element, user, handleInputChange } = props;

  return (
    <div className="mb-3">
      <label
        className="form-label"
        htmlFor={element.id}
      >{element.label}</label>
      <input
        type={element.type || "text"}
        className="form-control"
        id={element.id}
        name={element.id}
        value={user[element.id]}
        onChange={handleInputChange}
        aria-describedby={element.label}
      />
    </div>
  );
}

function AddUserForm(props) {
  const { addUser } = props;

  const initialFormState = elements.reduce((acc, cur) => {
    acc[cur.id] = "";

    return acc;
  }, { id: null });

  const [user, setUser] = useState(initialFormState);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  }

  return (
    <form className="mb-3" onSubmit={async (event) => {
      event.preventDefault();
      await addUser({ ...user, date: Date.now() });
      setUser(initialFormState);
    }}>
      {elements.map(element => {
        return (
          <Input
            key={element.id}
            element={element}
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