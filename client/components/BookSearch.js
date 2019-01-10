import React, {Component} from 'react'
import {connect} from 'react-redux'
import SearchBar from './Reusable/SearchBar'
import {isbn, byAuthor, bytitle} from '../store'
import history from '../history'

class BookSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      searchType: 'Title'
    }
  }

  handleChange = evt => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    if (this.state.searchType === 'ISBN') {
      await this.props.searchByISBN(this.state.searchString)
    } else if (this.state.searchType === 'Author') {
      await this.props.searchByAuthor(this.state.searchString)
    } else if (this.state.searchType === 'Title') {
      await this.props.searchByTitle(this.state.searchString)
    }
    history.push('/Results')
  }

  render() {
    return (
      <div className="searchBar">
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
      </div>
    )
  }
}

const mapState = state => {
  return {
    result: state.books.result
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
