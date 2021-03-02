import React from 'react';

function UserTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">BirthDay</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Create/Update</th>
          <th scope="col" colSpan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0
          ? props.users.map(user => (
            <tr key={user.id}>
              <th scope="row">{user.name}</th>
              <td>{user.surname}</td>
              <td>{user.birthday}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.date}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Remove</button>
              </td>
            </tr>
          )
          )
          : <tr><td colSpan="7">No Users</td></tr>
        }
      </tbody>
    </table>
  );
}

export default UserTable;
