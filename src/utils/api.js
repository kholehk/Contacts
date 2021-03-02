import axios from 'axios';

const urlAPI = new URL("/kholehk/FakeJSON/users", "https://my-json-server.typicode.com");

async function getUsers(id = '') {
  const url = new URL(`${id}`, urlAPI);

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function postUser(user) {
  const url = new URL(urlAPI);

  try {
    await axios.post(url, user);
  } catch (error) {
    console.error(error);
  }
};

async function putUser(id, user) {
  const url = new URL(`${id}`, urlAPI);

  try {
    await axios.put(url, user);
  } catch (error) {
    console.error(error);
  }
};

async function deleteUser(id) {
  const url = new URL(`${id}`, urlAPI);

  try {
    await axios.delete(url);
  } catch (error) {
    console.error(error);
  }
};

export { getUsers, putUser, postUser, deleteUser };
