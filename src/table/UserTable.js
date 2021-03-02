import React from 'react';

function UserTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">SurName</th>
          <th scope="col">BirthDate</th>
          <th scope="col">Email</th>
          <th scope="col">Create/Update</th>
          <th scope="col" colSpan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0
          ? <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="btn btn-primary">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Remove</button>
            </td>
          </tr>
          : <tr><td colSpan="6">No Users</td></tr>
        }
      </tbody>
    </table>
  );
}

export default UserTable;
