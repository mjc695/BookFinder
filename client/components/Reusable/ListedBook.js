import React from 'react'
import {NavLink} from 'react-router-dom'

const ListedBook = props => {
  const {book, addBook} = props
  return (
    <div onClick={() => addBook(book)}>
      <NavLink to="/singleBook">
        <div>
          <img src={book.cover && book.cover.small} />
          <p className="SearchTitles">{book.title}</p>
          {book.author_name ? (
            <p className="SearchAuthors">by {book.author_name}</p>
          ) : null}
        </div>
      </NavLink>
    </div>
  )
}

export default ListedBook
