import React from 'react';

function AddUserForm(props) {
  return (
    <form className="mb-3">
      <div className="mb-3">
        <label htmlFor="" className="form-label"></label>
        <input type="text" className="form-control" id="" aria-describedby="" />
      </div>
      <button type="submit" className="btn btn-primary">Add new user</button>
    </form>
  )
}

export default AddUserForm;