import React, { useState, useEffect } from 'react';
import UserTable from './table/UserTable';
import AddUserForm from './forms/AddUserForm';
import { getUsersFromAPI, postUserToAPI } from './utils/api';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersFromAPI()
      .then(usersFromAPI => setUsers(usersFromAPI))
      .catch(e => console.error(e))
  }, []);

  async function addUser(newUser) {
    const response = await postUserToAPI(newUser);
    console.log(response);
    debugger;
    setUsers([...users], newUser);
  }

  return (
    <div className="container">
      <h1>Test React with CRUD</h1>
      <div className="row">
        <div className="col">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
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
