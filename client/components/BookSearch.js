import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import SearchBarReusable from './SearchBarReusable'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import {isbn, byAuthor, bytitle} from '../store'

class BookSearch extends Component {
  constructor() {
    super()
    this.state = {
      openResults: false,
      searchedType: '',
      bookData: {},
      searchString: '',
      searchType: 'Title'
    }
  }

  handleChange = evt => {
    console.log('changing')
    console.log(evt.target)
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    if (this.state.searchType === 'ISBN') {
      await this.props.searchByISBN(this.state.searchString)
      this.setState({
        bookData: this.props.isbn,
        openResults: true,
        searchedType: 'ISBN'
      })
      console.log('this is store state', this.props.isbn)
    } else if (this.state.searchType === 'Author') {
      await this.props.searchByAuthor(this.state.searchString)
      console.log('this is store state', this.props.authorSearch)
      this.setState({
        bookData: this.props.authorSearch,
        openResults: true,
        searchedType: 'Author'
      })
    } else if (this.state.searchType === 'Title') {
      await this.props.searchByTitle(this.state.searchString)
      console.log('this is store state in title:', this.props.titleSearch)
      this.setState({
        bookData: this.props.titleSearch,
        openResults: true,
        searchedType: 'Title'
      })
    }
  }

  render() {
    console.log('test for isbn#:', this.state.searchString)
    console.log('book data:', this.state.bookData)
    return (
      <div>
        <div>
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            state={this.state}
          />
        </div>
        {this.state.openResults && <SearchResults state={this.state} />}
      </div>
    )
  }
}

const mapState = state => {
  return {
    isbn: state.books.isbn,
    authorSearch: state.books.author,
    titleSearch: state.books.title
  }
}

const mapDispatch = dispatch => {
  return {
    searchByISBN: async bookId => {
      await dispatch(isbn(bookId))
    },
    searchByAuthor: async name => {
      await dispatch(byAuthor(name))
    },
    searchByTitle: async title => {
      await dispatch(bytitle(title))
    }
  }
}

export default connect(mapState, mapDispatch)(BookSearch)
