import React, { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const container = "container";

const fields = [
  { key: "name", label: "Name" }, //first element scope="row" in table
  { key: "surname", label: "Surname" },
  { key: "birthday", label: "Birthday", type: "date" },
  { key: "phone", label: "Phone", type: "tel" },
  { key: "email", label: "Email", type: "email" },
  {
    key: "createAt", label: "Create/Update", type: "datetime-local",
    calculate: (stamp) => stamp
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentContact, setCurrentContact] = useState({});

  return (
    <React.StrictMode>
      <Header
        container={container}
        fields={fields}
        setCurrentContact={setCurrentContact}
      />
      <Main
        container={container}
        fields={fields}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentContact={currentContact}
        setCurrentContact={setCurrentContact}
      />
      <Footer
        container={container}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </React.StrictMode>
  );
}

export default App;
