import { combineReducers } from 'redux';
import {
  ADD_POST,
  EDIT_POST,
  SET_VISIBILITY_FILTER,
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
    default:
      return state;
  }
}


const wallApp = combineReducers ({
  visibilityFilter,
  posts,
})

export default wallApp;