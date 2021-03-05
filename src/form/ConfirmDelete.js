import React from 'react';

function ConfirmDelete(props) {
  const { contact, deleteContact } = props;

  return (
    <div
      className="modal fade"
      id="confirmDelete"
      tabIndex="-1"
      aria-labelledby="confirmDeleteLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id="confirmDeleteLabel"
            >{contact.name} {contact.surname}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            Are you sure to delete?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >Close</button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={async () => { await deleteContact(contact) }}
            >Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDelete;
