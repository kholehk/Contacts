import axios from 'axios';

const urlAPI = new URL("/kholehk/FakeJSON/users", "https://my-json-server.typicode.com");

async function getUsersFromAPI(id = '') {
  const url = new URL(`${id}`, urlAPI);

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function postUserToAPI(user) {
  const url = new URL(urlAPI);

  try {
    const response = await axios.post(url, user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

async function putUserToAPI(id, user) {
  const url = new URL(`${id}`, urlAPI);

  try {
    await axios.put(url, user);
  } catch (error) {
    console.error(error);
  }
};

async function deleteUserFromAPI(id) {
  const url = new URL(`${id}`, urlAPI);

  try {
    await axios.delete(url);
  } catch (error) {
    console.error(error);
  }
};

export { getUsersFromAPI, postUserToAPI, putUserToAPI, deleteUserFromAPI };
