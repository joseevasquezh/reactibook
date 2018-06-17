import { combineReducers } from 'redux';
import {
  INITIALIZE_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  SET_VISIBILITY_FILTER,
  AUTHENTICATE_USER,
  ADD_LOGGED_USER,
  REMOVE_LOGGED_USER,
  DISPLAY_LOGIN_ERROR,
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
    case INITIALIZE_POSTS:
      return action.posts
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


function user(
  state={
    isAuthenticating: false,
    uid: "",
    mail: "",
    errorType: "",
    errorMessage: "",
  },
  action
) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        isAuthenticating: true,
        uid: "",
        mail: "",
        errorType: "",
        errorMessage: "",
      }
    case ADD_LOGGED_USER:
      return {
        isAuthenticating: false,
        uid: action.uid,
        mail: action.mail,
        errorType: "",
        errorMessage: "",
      }
    case REMOVE_LOGGED_USER:
      return {
        isAuthenticating: false,
        uid: "",
        mail: "",
        errorType: "",
        errorMessage: "",
      }
    case DISPLAY_LOGIN_ERROR:
      return {
        isAuthenticating: false,
        uid: "",
        mail: "",
        errorType: action.errorType,
        errorMessage: action.text,
      }
    default:
      return state
  }
}


const wallApp = combineReducers ({
  visibilityFilter,
  posts,
  user,
})

export default wallApp;
