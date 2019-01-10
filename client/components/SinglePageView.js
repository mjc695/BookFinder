import React, {Component} from 'react'
import {connect} from 'react-redux'

class SinglePageView extends Component {
  render() {
    console.log('singleBook:', this.props.singleBook)
    const book = this.props.singleBook.book

    if (book && book.title) {
      if (book.first_publish_year) book.publish_date = book.first_publish_year
      return (
        <div className="singlePageWrap">
          <img src={book.cover.large} />
          <div>
            <p className="SearchTitles">{book.title}</p>
            {book.author_name ? (
              <p className="SearchAuthors">by {book.author_name}</p>
            ) : null}
            <div className="publishDate">
              {book.publish_date ? (
                <p>Published in : {book.publish_date}</p>
              ) : (
                <p>No Publish date available</p>
              )}
            </div>
          </div>
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
