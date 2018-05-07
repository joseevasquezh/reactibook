export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export const VisibilityFilters = {
  SHOW_PUBLIC: 'SHOW_PUBLIC',
  SHOW_FRIENDS_ONLY: 'SHOW_FRIENDS_ONLY'
};

export function addPost(id, text, isPublic) {
  return {
    type: ADD_POST,
    id: id,
    text: text,
    isPublic: isPublic,
  };
}

export function editPost(id, text) {
  return {
    type: EDIT_POST,
    id: id,
    text: text,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  };
}