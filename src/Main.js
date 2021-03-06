import React from 'react';

import ContactsTable from './table/ContactsTable';
import Loader from './loader/Loader';

function Main(props) {
  const {
    container,
    fields,
    contactsOnPage,
    setCurrentContact,
    isLoading,
  } = props;

  return (
    <main className={container}>
      {isLoading
        ? <Loader />
        : (<ContactsTable
          fields={fields}
          contactsOnPage={contactsOnPage}
          setCurrentContact={setCurrentContact}
        />)
      }
    </main>
  )
}

export default Main;
