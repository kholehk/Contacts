import React, { useState, useEffect } from 'react';

import crudAPI from './utils/api';
import ContactForm from './form/ContactForm';
import ContactsTable from './table/ContactsTable';
import ConfirmDelete from './form/ConfirmDelete';

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

  const [contacts, setContacts] = useState([]);

  useEffect(() => readContacts(), []);

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
      <ContactsTable
        fields={fields}
        contacts={contacts}
        setCurrentContact={setCurrentContact}
      />
      <ConfirmDelete
        contact={currentContact}
        deleteContact={deleteContact} />
    </main>
  )
}

export default Main;
