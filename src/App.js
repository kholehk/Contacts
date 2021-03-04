import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import ContactsTable from './table/ContactsTable';
import ContactForm from './form/ContactForm';
import { getUsersFromAPI, postUserToAPI, deleteUserFromAPI, putUserToAPI } from './utils/api';

const container = "container";

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

    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <React.StrictMode>
      <header className={container}>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="./">Test React with CRUD</a>
            <form className="d-flex">
              <select className="form-select"
                aria-label="Users properties"
              >
                {fields.map(field => (
                  <option key={field.key} name={field.key} >
                    {field.label}
                  </option>
                ))}
              </select>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
              >Search</button>
            </form>
            <button
              className="btn btn-primary"
              type="button"
            >Add new user</button>
          </div>
        </nav>
      </header>
      <main className={container}>
        <h2>View users</h2>
        <UserTable
          fields={fields}
          users={users}
          editUser={editUser}
          deleteUser={deleteUser}
        />
      </main>
      <footer className={container}>
        <nav aria-label="Pagination of users list">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="./?page=1"
                tabIndex="-1"
                aria-disabled="true"
              >Previous</a>
            </li>
            <li className="page-item active" aria-current="page">
              <a
                className="page-link"
                href="./?page=1"
              >1</a></li>
            <li className="page-item">
              <a
                className="page-link"
                href="./?page=2"
              >2</a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="./?page=2"
              >Next</a>
            </li>
          </ul>
        </nav>
      </footer>
    </React.StrictMode>
  );
}

export default App;
