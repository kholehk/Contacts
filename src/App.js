import React, { useState, useEffect } from 'react';
import UserTable from './table/UserTable';
import { getUsers } from './utils/api';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(usersFromAPI => setUsers(usersFromAPI))
      .catch(e => console.error(e))
  }, []);

  return (
    <div className="container">
      <h1>Test React with CRUD</h1>
      <div className="row">
        <div className="col">
          <h2>Add user</h2>
        </div>
        <div className="col">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
