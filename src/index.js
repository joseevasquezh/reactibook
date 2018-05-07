import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import wallApp from './Reducers';


const store = createStore(wallApp);


console.log(store.getState());

store.subscribe(() =>
  console.log(store.getState())
);


const render = () => {
  ReactDOM.render(<App
    store={store}
  />, document.getElementById('root'));
}
store.subscribe(render);
render();


registerServiceWorker();
