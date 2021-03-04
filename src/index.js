import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import crudAPI from './utils/api';

const originAPI = 'https://my-json-server.typicode.com';
const pathnameAPI = '/kholehk/Contacts/index';

const contactsAPI = new crudAPI(originAPI, pathnameAPI);

contactsAPI.create({ name: "Piter", surname: "Pen" })
  .then(response => console.log(response));

contactsAPI.read()
  .then(response => console.log(response));

contactsAPI.read('/?page=1')
  .then(response => console.log(response));

contactsAPI.read('/?page=2')
  .then(response => console.log(response));

contactsAPI.update({ id: "0", name: "Tim", surname: "Building" })
  .then(response => console.log(response));

contactsAPI.delete(0)
  .then(response => console.log(response));

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
