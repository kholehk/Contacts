import React, { useState } from 'react';

function SearchForm(props) {
  const { fields, contacts, setContacts } = props;
  const [search, setSearch] = useState({ key: fields[0].key, value: "" });

  function handleInputChange(event) {
    const { value } = event.target;

    setSearch({ ...search, value });
  }

  function handleSelectChange(event) {
    const { options } = event.target;
    const field = [...options].find(option => option.selected);

    setSearch({ ...search, key: field.dataset.key, type: field.dataset.type });
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
            data-key={field.key}
            data-type={field.type}
          >
            {field.label}
          </option>
        ))}
      </select>
      <input
        className="form-control me-2"
        placeholder="Search"
        aria-label="Search"
        type={search.type || "search"}
        name={search.key}
        value={search.value}
        onChange={(event) => handleInputChange(event)}
      />
      <button
        className="btn btn-outline-success"
        type="submit"
        onClick={(event) => {
          event.preventDefault();

          const calculatedSearch = fields.reduce((accSearch, field) => {
            const { key, calculate } = field;

            if (key !== accSearch.key) return accSearch;

            if (calculate && calculate instanceof Function)
              return { ...accSearch, value: calculate(accSearch.value, null, false) }

            return accSearch;
          }, search);

          const filteredContacts = contacts
            .filter(contact => contact[calculatedSearch.key] === calculatedSearch.value);

          setContacts(filteredContacts ?? []);
        }}
      >Search</button>
    </form>
  )
}

export default SearchForm;
