import React from 'react';

function ContactsTable(props) {
  const { fields, book, currentPage, setCurrentContact } = props;

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            {fields.map(
              field => <th key={field.key} scope="col">{field.label}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {
            book.length > 0 && book[currentPage] && book[currentPage].length > 0
              ? <TableBody
                fields={fields}
                book={book}
                currentPage={currentPage}
                setCurrentContact={setCurrentContact}
              />
              : <tr><td colSpan="7">No Contacts</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
}

function TableBody(props) {
  const { fields, book, currentPage, setCurrentContact } = props;

  return (
    book[currentPage].map(contact => (
      <tr key={contact.id}>
        <TableRow
          fields={fields}
          contact={contact}
          setCurrentContact={setCurrentContact}
        />
      </tr>)
    )
  );
}

function TableRow(props) {
  const { fields, contact, setCurrentContact } = props;

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
          <div
            className="row flex-nowrap"
            onClick={() => setCurrentContact(contact)}
          >
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#contactForm"
              className="btn btn-sm btn-primary col-auto"
            >Edit</button>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#confirmDelete"
              className="btn btn-sm btn-danger col-auto mx-1"
            >Delete</button>
          </div>
        </th>
      )
    })
  )
}

export default ContactsTable;
