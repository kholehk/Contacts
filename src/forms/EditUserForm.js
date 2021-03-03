import React, { useState, useEffect } from 'react';
import Input from './Input';

function EditUserForm(props) {
  const { fields, currentUser, updateUser } = props;

  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  }

  return (
    <form
      className="mb-3"
      onSubmit={async (event) => {
        event.preventDefault();
        await updateUser(user.id, { ...user, timestamp: Date.now() });
      }}>
      <h2>Edit user</h2>
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
      >Edit user</button>
      <button
        type="button"
        className="btn btn-primary"
      >Cancel</button>
    </form>
  )
}

export default EditUserForm;
