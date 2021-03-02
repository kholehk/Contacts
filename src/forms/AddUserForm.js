import React from 'react';

const elements = [
  { id: "name", label: "Name" },
  { id: "surname", label: "Surname" },
  { id: "birthday", label: "Birthday", type: "date" },
  { id: "phone", label: "Phone", type: "tel" },
  { id: "email", label: "Email", type: "email" },
];

function Input(props) {
  const { element } = props;

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
        value=""
        aria-describedby={element.label}
      />
    </div>
  );
}

function AddUserForm(props) {
  return (
    <form className="mb-3">
      {elements.map(element => (<Input key={element.id} element={element} />))}
      <button
        type="submit"
        className="btn btn-primary"
      >Add new user</button>
    </form>
  )
}

export default AddUserForm;