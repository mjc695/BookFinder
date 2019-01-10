import React from 'react'
import ListedBook from './Reusable/ListedBook'

const SearchResults = props => {
  const {state, addBook} = props
  if (!state) {
    return (
      <h3>
        Sorry the selection you have been made is misplaced, please go back and
        select a book, Thank you!
      </h3>
    )
  } else {
    if (!state.docs) {
      const results = state[Object.keys(state)]
      if (!results) {
        return (
          <h3>
            Sorry The book you were looking for was not found. Please try
            searching for something else.
          </h3>
        )
      }
      return (
        <div>
          <ListedBook isISBN={true} addBook={addBook} book={results} />
        </div>
      )
    } else {
      const results = state.docs
      if (results.length < 1) {
        return (
          <h3>
            Sorry The book you were looking for was not found. Please try
            searching for something else.
          </h3>
        )
      }
      return (
        <div>
          {results.map((book, idx) => {
            if (true && book.cover_i) {
              book.cover = {}
              book.cover.small = `http://covers.openlibrary.org/b/ID/${
                book.cover_i
              }-S.jpg`
              book.cover.medium = `http://covers.openlibrary.org/b/ID/${
                book.cover_i
              }-M.jpg`
              book.cover.large = `http://covers.openlibrary.org/b/ID/${
                book.cover_i
              }-L.jpg`
            }
            return (
              <div key={idx}>
                <ListedBook addBook={addBook} book={book} />
              </div>
            )
          })}
        </div>
      )
    }
  }
}

export default SearchResults
