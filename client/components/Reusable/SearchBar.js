import React from 'react'

const SearchBar = props => {
  const {handleSubmit, handleChange, state} = props
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          name="searchType"
          value={state.searchType}
          onChange={handleChange}
        >
          <option value="Title">Title</option>
          <option value="ISBN">ISBN</option>
          <option value="Author">Author</option>
        </select>
        <input
          name="searchString"
          value={state.searchString}
          onChange={handleChange}
        />
        <button type="button" onClick={() => handleSubmit(event)}>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
