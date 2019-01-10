import React from 'react'

const SearchBarReusable = props => {
  const {handleSubmit, handleChange, state, searchString} = props
  // const bookKeys = Object.keys(state.bookData)
  return (
    <div>
      {/* {console.log('this is state:', this.state)}
        {console.log('book keys:', bookKeys)} */}
      {/* {console.log('this is imgsrc:', this.state.bookData[bookKeys[0]])} */}
      <div>
        {/* <form onSubmit={() => handleSubmit(event, searchString)}> */}
        <form onSubmit={handleSubmit}>
          <h3>Search by {searchString}:</h3>
          <select>
            <option name="title" value="title">
              Title
            </option>
            <option>Author</option>
            <option>ISBN</option>
          </select>
          <input
            name={searchString}
            value={state[searchString]}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => handleSubmit(event, searchString)}
          >
            Search!
          </button>
        </form>
      </div>
      {/* {bookKeys.length ? (
        <img src={state.bookData[bookKeys[0]].thumbnail_url} />
      ) : (
        <div />
      )} */}
      {console.log(state.bookData)}

      <h3>Search Results above! ^_^</h3>
    </div>
  )
}
export default SearchBarReusable
