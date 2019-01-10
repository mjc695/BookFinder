import axios from 'axios'

// ACTION TYPES

const GET_ISBN = 'GET_ISBN'
const GET_AUTHOR = 'GET_AUTHOR'
const GET_TITLE = 'GET_TITLE'

//INITIAL STATE

const defaultBookData = {}

//ACTION CREATORS

const getISBN = isbn => ({type: GET_ISBN, isbn})
const getAuthor = author => ({type: GET_AUTHOR, author})
const getTitle = title => ({type: GET_TITLE, title})

//THUNK CREATORS

export const isbn = isbnNum => async dispatch => {
  try {
    const res = await axios.get(
      `https://openlibrary.org/api/books?bibkeys=ISBN:${isbnNum}&format=json&jscmd=data`
    )
    dispatch(getISBN(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const byAuthor = author => async dispatch => {
  try {
    const res = await axios.get(
      `http://openlibrary.org/search.json?author=${author}`
    )
    dispatch(getAuthor(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const bytitle = title => async dispatch => {
  try {
    const res = await axios.get(
      `http://openlibrary.org/search.json?type=/type&edition&title=${title}`
    )
    dispatch(getTitle(res.data))
  } catch (err) {
    console.error(err)
  }
}

//REDUCER

export default function(state = defaultBookData, action) {
  switch (action.type) {
    case GET_ISBN:
      return {...state, result: action.isbn}
    case GET_AUTHOR:
      return {...state, result: action.author}
    case GET_TITLE:
      return {...state, result: action.title}
    default:
      return state
  }
}
