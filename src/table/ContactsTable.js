import React from 'react';

function ContactsTable(props) {
  const { fields, contacts, action } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {fields.map(
            field => <th key={field.key} scope="col">{field.label}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {contacts.length > 0
          ? <TableBody
            fields={fields}
            contacts={contacts}
            action={action}
          />
          : <tr><td colSpan="7">No Contacts</td></tr>
        }
      </tbody>
    </table>
  );
}

function TableBody(props) {
  const { fields, contacts, action } = props;

  return (
    contacts.map(contact => (
      <tr key={contact.id}>
        <TableRow
          fields={fields}
          contact={contact}
          action={action}
        />
      </tr>)
    )
  );
}

function TableRow(props) {
  const { fields, contact, action } = props;

  return (
    fields.map((field, idx) => {
      if (idx) return (
        <td key={field.key}>{
          field.calculate && field.calculate instanceof Function
            ? field.calculate(contact[field.key])
            : contact[field.key]
        }</td>
      )
      return (
        < th key={field.key} scope="row" >
          <strong className="row">{contact[field.key]}</strong>
          <div className="row flex-nowrap">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#contactForm"
              className="btn btn-sm btn-primary col-auto"
              onClick={() => action(contact)}
            >Edit</button>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#confirmDelete"
              className="btn btn-sm btn-danger col-auto mx-1"
              onClick={() => action(contact)}
            >Delete</button>
          </div>
        </th>
      )
    })
  )
}

export default ContactsTable;
