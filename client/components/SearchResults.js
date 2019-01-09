import React from 'react'

const SearchResults = props => {
  const {state} = props
  // const results = state.bookData
  const searchedType = state.searchedType
  if (searchedType === 'ISBN') {
    const results = state.bookData[Object.keys(state.bookData)]
    return (
      <div>
        {/* {console.log('results:', results)} */}
        <h4>
          {results.title} by {results.authors[0].name}
        </h4>
        {/* <h5>{results.authors[0].name}</h5> */}
      </div>
    )
  }

  return (
    <div>
      {/* {results.map} */}
      <h3>hELLO OPENED</h3>
    </div>
  )
}

export default SearchResults
