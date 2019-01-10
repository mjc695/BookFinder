import React from 'react'
import {NavLink} from 'react-router-dom'

const ListedBook = props => {
  const {book, addBook} = props
  return (
    <div className="searchResults" onClick={() => addBook(book)}>
      <NavLink to="/singleBook">
        <div>
          <img src={book.cover ? book.cover.small : 'noImage.png'} />
          <div>
            <p className="SearchTitles">{book.title}</p>
            {book.author_name ? (
              <p className="SearchAuthors">by {book.author_name}</p>
            ) : (
              <p>No author available</p>
            )}
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default ListedBook
