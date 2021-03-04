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
  } = props;

  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({});
  const [action, setAction] = useState(false);

  function actionCurrentContact(selectedContact) {
    setAction(true);
    setCurrentContact(selectedContact);
  }

  function actionCancel() {
    setAction(false);
    setCurrentContact({});
  }

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

  return (
    <main className={container}>
      <ContactForm
        title={action ? 'Edit contact' : 'Add contact'}
        fields={fields}
        currentContact={currentContact}
        submitContact={action ? updateContacts : createContact}
      />
      <ContactsTable
        fields={fields}
        contacts={contacts}
        action={actionCurrentContact}
      />
      <ConfirmDelete contact={currentContact} deleteContact={deleteContact} />
    </main>
  )
}

export default Main;
