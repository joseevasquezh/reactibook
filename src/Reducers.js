import { combineReducers } from 'redux';
import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  SET_VISIBILITY_FILTER,
  ADD_LOGGED_USER,
  REMOVE_LOGGED_USER,
  VisibilityFilters
} from './Actions';

const { SHOW_PUBLIC } = VisibilityFilters;


function visibilityFilter(state = SHOW_PUBLIC, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function posts (state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return state.concat({
          id: action.id,
          text: action.text,
          isPublic: action.isPublic
      })
    case EDIT_POST:
      return state.map((post, index) => {
        if (post.id === action.id) {
          return Object.assign({}, post, {
            text: action.text
          })
        }
        return post
      })
    case DELETE_POST:
      return state.filter(p => !(p.id === action.id))
    default:
      return state;
  }
}

function loggedUser(state='', action) {
  switch (action.type) {
    case ADD_LOGGED_USER:
      return action.mail
    case REMOVE_LOGGED_USER:
      return {}
    default:
      return state
  }
}


const wallApp = combineReducers ({
  visibilityFilter,
  posts,
  loggedUser,
})

export default wallApp;