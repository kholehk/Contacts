import React, { useState, useEffect } from 'react';

import crudAPI from './utils/api';
import ContactForm from './form/ContactForm';
import ContactsTable from './table/ContactsTable';
import ConfirmDelete from './form/ConfirmDelete';
import Loader from './loader/Loader';

const NUMBER_OF_ROWS = 10;

const originAPI = 'https://my-json-server.typicode.com';
const pathnameAPI = '/kholehk/Contacts/index';

const contactsAPI = new crudAPI(originAPI, pathnameAPI);

function Main(props) {
  const {
    container,
    fields,
    currentPage,
    setCurrentPage,
    currentContact,
    setCurrentContact,
  } = props;

  const [book, setBook] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadingAPI = async (action) => { setIsLoading(true); await action(); setIsLoading(false); }

  const collectPages = (contacts) => contacts.reduce(
    (acc, cur, idx) => {
      const page = Math.floor(idx / NUMBER_OF_ROWS);

      if (page === acc.length) { acc.push([]); }
      acc[page].push(cur);
      return acc;
    },
    []
  );

  useEffect(() => {
    loadingAPI(readContacts);
  }, []);

  useEffect(() => {
    setBook(collectPages(contacts));
  }, [contacts]);

  async function createContact(newContact) {
    const createdContact = await contactsAPI.create(newContact);

    setContacts([...contacts, createdContact]);
  }

  async function readContacts() {
    const contactsFromAPI = await contactsAPI.read();

    setContacts(contactsFromAPI);
  }

  async function updateContacts(receivedContact) {
    const updatedContact = await contactsAPI.update(receivedContact);

    setContacts(
      contacts
        .map(contact => (contact.id === updatedContact.id
          ? updatedContact : contact))
    );
  }

  async function deleteContact(wasteContact) {
    const { id } = wasteContact;

    await contactsAPI.delete(id);

    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const isNewContact = (contact) => !(Object.keys(contact).length);

  return (
    <main className={container}>
      <ContactForm
        title={isNewContact(currentContact) ? 'Add contact' : 'Edit contact'}
        fields={fields}
        currentContact={currentContact}
        submitContact={isNewContact(currentContact) ? createContact : updateContacts}
      />
      {isLoading
        ? <Loader />
        : (<ContactsTable
          fields={fields}
          book={book}
          currentPage={currentPage}
          setCurrentContact={setCurrentContact}
        />)
      }
      <ConfirmDelete
        contact={currentContact}
        deleteContact={deleteContact}
      />
    </main>
  )
}

export default Main;
