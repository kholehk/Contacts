import React from 'react';
import SearchForm from './form/SearchForm';

function Header(props) {
  const { container, fields, contacts, setContacts, setCurrentContact } = props;

  return (
    <header className={container}>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">Contacts</a>
          <SearchForm fields={fields} contacts={contacts} setContacts={setContacts} />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => setCurrentContact({})}
            data-bs-toggle="modal"
            data-bs-target="#contactForm"
          >New contact</button>
        </div>
      </nav>
    </header>
  )
}

export default Header;
