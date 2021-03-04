import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

const modalConfirm = document.querySelector('#confirmDelete');
const modalForm = document.querySelector('#contactForm');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

console.log(modalConfirm);
console.log(modalForm);
