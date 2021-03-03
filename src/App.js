import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import UserTable from './table/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import { getUsersFromAPI, postUserToAPI, deleteUserFromAPI, putUserToAPI } from './utils/api';

const fields = [
  { key: "name", label: "Name" }, //first element scope="row" in table
  { key: "surname", label: "Surname" },
  { key: "birthday", label: "Birthday", type: "date" },
  { key: "phone", label: "Phone", type: "tel" },
  { key: "email", label: "Email", type: "email" },
  {
    key: "timestamp", label: "Create/Update", type: "datetime-local",
    calculate: (stamp) => Number.isNaN(+stamp) ? "" : format(+stamp, "dd.MM.yyyy HH:mm")
  },
];

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    getUsersFromAPI()
      .then(usersFromAPI => setUsers(usersFromAPI))
      .catch(e => console.error(e))
  }, []);

  async function addUser(newUser) {
    const addedUser = await postUserToAPI(newUser);

    setUsers([...users, addedUser]);
    setCurrentUser({});
  }

  function editUser(current) {
    setEditing(true);
    setCurrentUser(current);
  }

  async function updateUser(id, receivedUser) {
    const userFromApi = await putUserToAPI(id, receivedUser);

    setEditing(false);
    setUsers(users.map(user => (user.id === id ? userFromApi : user)));
  }

  async function deleteUser(wasteUser) {
    const { id } = wasteUser;

    await deleteUserFromAPI(id);

    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div className="container-lg">
      <h1>Test React with CRUD</h1>
      <div className="row">
        <div className="col-lg-4">
          {editing
            ? <EditUserForm fields={fields} currentUser={currentUser} updateUser={updateUser} />
            : <AddUserForm fields={fields} addUser={addUser} />
          }
        </div>
        <div className="col-lg-8">
          <h2>View users</h2>
          <UserTable fields={fields} users={users} editUser={editUser} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
