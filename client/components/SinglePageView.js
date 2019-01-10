import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class SinglePageView extends Component {
  openNewTab(url) {
    const win = window.open(url, '_blank')
    win.focus()
  }
  render() {
    console.log('singleBook:', this.props.singleBook)
    const book = this.props.singleBook.book
    if (book && book.title) {
      if (!book.url) book.url = `https://openlibrary.org${book.key}`
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
              {/* <p
                className="clickableLink"
                onClick={() => this.openNewTab(book.url)}
              >
                Book in Open Library Website
              </p> */}
              <button type="button">
                <a href={book.url} target="_blank">
                  Book in Open Library Webiste
                </a>
              </button>
              {/* <Link to={book.url}>Book in Open Library Website</Link> */}
            </div>
          </div>
        </div>
      )
    } else {
      this.props.history.push('/Home')
      return (
        <div>
          <h3 className="textPadding">
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
