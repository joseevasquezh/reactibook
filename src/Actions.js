export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ADD_LOGGED_USER = 'ADD_LOGGED_USER';
export const REMOVE_LOGGED_USER = 'REMOVE_LOGGED_USER';

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

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id: id,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  };
}

export function addLoggedUser(mail) {
  return {
    type: ADD_LOGGED_USER,
    mail: mail,
  };
}

export function removeLoggedUser() {
  return {
    type: REMOVE_LOGGED_USER,
  };
}