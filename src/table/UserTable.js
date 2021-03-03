import React from 'react';

function TableRow(props) {
  const { fields, user, deleteUser } = props;

  return (
    fields.map((field, idx) =>
      idx
        ? <td key={field.key}>{user[field.key]}</td>
        : <th key={field.key} scope="row">
          <strong className="row">{user[field.key]}</strong>
          <div className="row flex-nowrap">
            <button className="btn btn-sm btn-primary col-auto">Edit</button>
            <button
              className="btn btn-sm btn-danger col-auto mx-1"
              onClick={async () => { await deleteUser(user.id) }}
            >Remove</button>
          </div>
        </th>
    )
  )
}

function TableBody(props) {
  const { fields, users, deleteUser } = props;

  return (
    users.map(user => (
      <tr key={user.id}>
        <TableRow fields={fields} user={user} deleteUser={deleteUser} />
      </tr>)
    )
  );
}

function UserTable(props) {
  const { fields, users, deleteUser } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {fields.map(field => <th key={field.key} scope="col">{field.label}</th>)}
        </tr>
      </thead>
      <tbody>
        {users.length > 0
          ? <TableBody fields={fields} users={users} deleteUser={deleteUser} />
          : <tr><td colSpan="7">No Users</td></tr>
        }
      </tbody>
    </table>
  );
}

export default UserTable;
