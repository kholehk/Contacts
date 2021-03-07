import React, { useEffect, useState } from 'react';
import format from 'date-fns/format';

import crudAPI from './utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ContactForm from './form/ContactForm';
import ConfirmDelete from './form/ConfirmDelete';

const originAPI = 'https://my-json-server.typicode.com';
const pathnameAPI = '/kholehk/Contacts/index';

const contactsAPI = new crudAPI(originAPI, pathnameAPI);

const NUMBER_OF_ROWS = 10;

const container = "container-lg";

const calculateDate = (stamp, template, isFormat = true) => isFormat ? format(+stamp, template) : new Date(stamp);

const fields = [
  { key: "name", label: "Name", type: "text" }, //first element scope="row" in table
  { key: "surname", label: "Surname", type: "text" },
  {
    key: "birthday", label: "Birthday", type: "date",
    calculate: (stamp, isFormat) => calculateDate(+stamp, "dd.MM.yyyy", isFormat),
  },
  { key: "phone", label: "Phone", type: "tel" },
  { key: "email", label: "Email", type: "email" },
  {
    key: "createAt", label: "Create/Update",
    calculate: (stamp, isFormat) => calculateDate(+stamp, "dd.MM.yyyy hh:mm", isFormat),
  },
];

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({});

  const [book, setBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const loadingAPI = async (action) => { setIsLoading(true); await action(); setIsLoading(false); }

  useEffect(() => {
    loadingAPI(readContacts);
  }, []);

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
    <React.StrictMode>
      <Header
        container={container}
        fields={fields}
        contacts={contacts}
        setContacts={setContacts}
        setCurrentContact={setCurrentContact}
      />
      <Main
        container={container}
        fields={fields}
        contactsOnPage={book[currentPage]}
        setCurrentContact={setCurrentContact}
        isLoading={isLoading}
      />
      <Footer
        container={container}
        firstPage={0}
        lastPage={book.length - 1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ContactForm
        fields={fields}
        title={isNewContact(currentContact) ? 'Add contact' : 'Edit contact'}
        currentContact={currentContact}
        submitContact={isNewContact(currentContact) ? createContact : updateContacts}
      />
      <ConfirmDelete
        contact={currentContact}
        deleteContact={deleteContact}
      />
    </React.StrictMode>
  );
}

export default App;
