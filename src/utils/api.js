import axios from 'axios';

class crudAPI {
  constructor(origin, pathname = '') {
    this.origin = origin;
    this.pathname = pathname;
  }

  set origin(value) {
    this._origin = this._origin || value;
  }

  get origin() {
    return this._origin;
  }

  set pathname(value) {
    this._pathname = this._pathname || value;
  }

  get pathname() {
    return this._pathname;
  }

  get href() {
    return this.origin + this.pathname;
  }

  async create(data) {
    try {
      const response = await axios.post(this.href, data);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async read(params = '') {
    try {
      const response = await axios.get(`${this.href}/${params}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }


  async update(data) {
    try {
      const response = await axios.put(`${this.href}/${data.id}`, data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id) {
    try {
      const response = await axios.delete(`${this.href}/${id}`);

      return response.status;
    } catch (error) {
      console.error(error);
    }
  }
}

export default crudAPI;
