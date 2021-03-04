import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactsAPI from './utils/api';

const originAPI = 'https://my-json-server.typicode.com';
const pathnameAPI = '/kholehk/Contacts/index';

const contactsAPI = new ContactsAPI(originAPI, pathnameAPI);

console.log(contactsAPI.get());
debugger;

console.log(contactsAPI.get(0));
debugger;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
