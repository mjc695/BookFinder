import React, {Component} from 'react'
import {connect} from 'react-redux'
import SearchResults from './SearchResults'
import {addBook} from '../store'
import BookSearch from './BookSearch'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterType: '',
      filterValue: ''
    }
  }
  render() {
    return (
      <div>
        <div>
          <BookSearch completeResults={this.searchComplete} />
        </div>
        <div>
          <SearchResults
            addBook={this.props.addSingleBook}
            state={this.props.completeResult}
          />
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    completeResult: state.books.result
  }
}

const mapDispatch = dispatch => {
  return {
    addSingleBook: async book => {
      await dispatch(addBook(book))
    }
  }
}

export default connect(mapState, mapDispatch)(Results)
