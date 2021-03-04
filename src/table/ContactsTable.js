import React from 'react';

function ContactsTable(props) {
  const { fields, users, editUser, deleteUser } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {fields.map(field => <th key={field.key} scope="col">{field.label}</th>)}
        </tr>
      </thead>
      <tbody>
        {users.length > 0
          ? <TableBody fields={fields} users={users} editUser={editUser} deleteUser={deleteUser} />
          : <tr><td colSpan="7">No Users</td></tr>
        }
      </tbody>
    </table>
  );
}

function TableBody(props) {
  const { fields, users, editUser, deleteUser } = props;

  return (
    users.map(user => (
      <tr key={user.id}>
        <TableRow fields={fields} user={user} editUser={editUser} deleteUser={deleteUser} />
      </tr>)
    )
  );
}

function TableRow(props) {
  const { fields, user, editUser, deleteUser } = props;

  return (
    fields.map((field, idx) =>
      idx
        ? <td key={field.key}>{
          field.calculate && field.calculate instanceof Function
            ? field.calculate(user[field.key])
            : user[field.key]
        }</td>
        : <th key={field.key} scope="row">
          <strong className="row">{user[field.key]}</strong>
          <div className="row flex-nowrap">
            <button
              type="button"
              className="btn btn-sm btn-primary col-auto"
              onClick={() => editUser(user)}
            >Edit</button>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#confirmDelete"
              className="btn btn-sm btn-danger col-auto mx-1"
            >Remove</button>
            <ConfirmDelete user={user} deleteUser={deleteUser} />
          </div>
        </th>
    )
  )
}

function ConfirmDelete(props) {
  const { user, deleteUser } = props;

  return (
    <div className="modal fade" id="confirmDelete" tabIndex="-1" aria-labelledby="confirmDeleteLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="confirmDeleteLabel">{user.name} {user.surname}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Are you sure to remove?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
              onClick={async () => { await deleteUser(user) }}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsTable;
