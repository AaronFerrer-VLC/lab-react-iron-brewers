import { useState } from "react"

function Search({ onSearch }) {

  const [query, setQuery] = useState('')

  const handleInputChange = (e) => {
    setQuery(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search for a beer..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default Search