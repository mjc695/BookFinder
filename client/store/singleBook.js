// ACTION TYPES
const REMOVE_BOOK = 'REMOVE_BOOK'
const SET_BOOK = 'SET_BOOK'

// INITIAL STATE
const defaultBook = {}

// ACTION CREATORS

const removeBook = () => ({type: REMOVE_BOOK, book: {}})
const addNewBook = newBook => ({type: SET_BOOK, book: newBook})

// THUNK CREATORS

export const ClearBook = () => dispatch => {
  dispatch(removeBook())
}

export const addBook = newBook => dispatch => {
  dispatch(addNewBook(newBook))
}

// REDUCER

export default function(state = defaultBook, action) {
  switch (action.type) {
    case SET_BOOK:
      return {...state, book: action.book}
    case REMOVE_BOOK:
      return {...state, book: {}}
    default:
      return state
  }
}
