import React from 'react'

const SearchBar = props => {
  const {handleSubmit, handleChange, state} = props
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p className="searchByText">Search for a book below ^_^</p>
          <select
            className="searchForm"
            name="searchType"
            value={state.searchType}
            onChange={handleChange}
          >
            <option value="Title">Title</option>
            <option value="ISBN">ISBN</option>
            <option value="Author">Author</option>
          </select>
          <input
            className="searchInput"
            name="searchString"
            value={state.searchString}
            onChange={handleChange}
          />
          <button
            className="mag-glass"
            type="button"
            onClick={() => handleSubmit(event)}
          >
            <img src="mag-glass.jpg" height={23} width={23} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
