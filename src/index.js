import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import wallApp from './Reducers';

import {
  addPost,
  editPost,
  setVisibilityFilter,
  VisibilityFilters,
} from './Actions';


const store = createStore(wallApp);


console.log(store.getState());

store.subscribe(() =>
  console.log(store.getState())
);


const render = () => {
  ReactDOM.render(<App
    posts={store.getState().posts}
    onClickPost={(id,text,visbility)=>store.dispatch(addPost(id,text,(visbility === 'friends' ? false : true)))}
  />, document.getElementById('root'));
}
store.subscribe(render);
render();


registerServiceWorker();
