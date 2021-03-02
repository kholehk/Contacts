import React from 'react';

function TableBody(props) {
  const { users, deleteUser } = props;

  return (
    users.map(user => (
      <tr key={user.id}>
        <th scope="row">{user.name}</th>
        <td>{user.surname}</td>
        <td>{user.birthday}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>
          <span className="row">{user.date}</span>
          <button className="btn btn-sm btn-primary">Edit</button>
          <button
            className="btn btn-sm btn-danger mx-1"
            onClick={async () => { await deleteUser(user.id) }}
          >Remove</button>
        </td>
      </tr>)
    )
  );
}

function UserTable(props) {
  const { users, deleteUser } = props;

  // const [currentUser, setCurrentUser] = useState(null);

  return (
    <table className="table overflow-hidden">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">BirthDay</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Create/Update</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0
          ? <TableBody users={users} deleteUser={deleteUser} />
          : <tr><td colSpan="7">No Users</td></tr>
        }
      </tbody>
    </table>
  );
}

export default UserTable;
