import React from 'react'
import {NavLink} from 'react-router-dom'

const ListedBook = props => {
  const {book, addBook} = props
  if (props.isISBN) {
    book.author_name = book.authors[0].name
  }
  if (!book.cover) {
    book.cover = {
      small: 'noImage.png',
      large: 'noImageLarge.png'
    }
  }

  return (
    <div className="searchResults" onClick={() => addBook(book)}>
      <NavLink to="/singleBook">
        <div>
          <img src={book.cover.small} />
        </div>
        <div className="results-text">
          <p className="SearchTitles">Title: {book.title}</p>
          {book.author_name ? (
            <p className="SearchAuthors"> by {book.author_name}</p>
          ) : (
            <p>No author available</p>
          )}
        </div>
      </NavLink>
    </div>
  )
}

export default ListedBook
