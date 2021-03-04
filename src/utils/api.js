import axios from 'axios';

class ContactsAPI {
  constructor(origin, pathname = '') {
    this.pathname = pathname;
    this.origin = origin;
  }

  set origin(value) {
    this.origin = this.origin || value;
  }

  set pathname(value) {
    this.pathname = this.pathname || value;
  }

  set href(value) {
    this.href = this.origin + this.pathname + value;
  }

  async get(id = '') {
    this.href = `/${id}`;

    try {
      const response = await axios.get(this.href);

      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async post(user) {
    try {
      const response = await axios.post(this.url, user);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async put(user) {
    this.pathname += `/${user.id}`;

    try {
      const response = await axios.put(this.url, user);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUserFromAPI(id) {
    const url = new URL(`${urlAPI.pathname}/${id}`, urlAPI);

    try {
      const response = await axios.delete(url);

      return response.status;
    } catch (error) {
      console.error(error);
    }
  }
}

export default ContactsAPI;
