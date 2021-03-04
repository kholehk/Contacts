import React from 'react';

function SearchForm(props) {
  const { fields } = props;

  return (
    <form className="d-flex">
      <select
        className="form-select"
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
  )
}

export default SearchForm;
