import React, {Component} from 'react'
import {connect} from 'react-redux'

class SinglePageView extends Component {
  render() {
    console.log('singleBook:', this.props.singleBook)
    const book = this.props.singleBook.book
    if (book && book.title) {
      return (
        <div>
          <img
            src={`http://covers.openlibrary.org/b/ID/${book.cover_i}-L.jpg`}
          />
          <p className="SearchTitles">{book.title}</p>
          {book.author_name ? (
            <p className="SearchAuthors">by {book.author_name}</p>
          ) : null}
        </div>
      )
    } else {
      this.props.history.push('/Home')
      return (
        <div>
          <h3>
            Sorry the selection you have been made is misplaced, please go back
            and select a book, Thank you!
          </h3>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    singleBook: state.singleBook
  }
}

export default connect(mapState, null)(SinglePageView)
