import axios from 'axios';

const urlAPI = new URL("/kholehk/FakeJSON/users", "https://my-json-server.typicode.com");

function formatDate(timestamp) {
  const date = new Date(timestamp);

  return date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes;
}

async function getUsersFromAPI(id = '') {
  const url = new URL(`${id}`, urlAPI);

  try {
    const response = await axios.get(url);
    const { data } = response;

    return data.map(user => user.timestamp = formatDate(user.timestamp));
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function postUserToAPI(user) {
  const url = new URL(urlAPI);

  try {
    const response = await axios.post(url, user);
    const { data } = response;

    return { ...data, timestamp: formatDate(data.timestamp) || "" };
  } catch (error) {
    console.error(error);
  }
};

async function putUserToAPI(id, user) {
  const url = new URL(`${id}`, urlAPI);

  try {
    const response = await axios.put(url, user);
    const { data } = response;

    return { ...data, timestamp: formatDate(data.timestamp) || "" };
  } catch (error) {
    console.error(error);
  }
};

async function deleteUserFromAPI(id) {
  const url = new URL(`${urlAPI.pathname}/${id}`, urlAPI);

  try {
    const response = await axios.delete(url);

    return response.status;
  } catch (error) {
    console.error(error);
  }
};

export { getUsersFromAPI, postUserToAPI, putUserToAPI, deleteUserFromAPI };
