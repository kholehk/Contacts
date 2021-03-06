import React, { useState } from 'react';

function SearchForm(props) {
  const { fields, contacts, setContacts } = props;
  const [search, setSearch] = useState({ name: fields[0].key, value: "" });

  function handleInputChange(event) {
    const { value } = event.target;

    setSearch({ ...search, value });
  }

  function handleSelectChange(event) {
    const { options } = event.target;
    const field = [...options].find(option => option.selected);

    setSearch({ ...search, name: field.label });
  }

  return (
    <form className="d-flex">
      <select
        className="form-select"
        aria-label="contactsProperties"
        onChange={(event) => handleSelectChange(event)}
      >
        {fields.map(field => (
          <option
            key={field.key}
            label={field.key}
          >
            {field.label}
          </option>
        ))}
      </select>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name={search.name}
        value={search.value}
        onChange={(event) => handleInputChange(event)}
      />
      <button
        className="btn btn-outline-success"
        type="submit"
        onClick={(event) => {
          event.preventDefault();

          const filteredContacts = contacts.filter(contact => contact[search.name] === search.value);
          setContacts(filteredContacts ?? []);
        }}
      >Search</button>
    </form>
  )
}

export default SearchForm;
