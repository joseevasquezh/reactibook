import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import UserContent from './containers/UserContent';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import wallApp from './Reducers';


const store = createStore(wallApp);


console.log(store.getState());

store.subscribe(() =>
  console.log(store.getState())
);


const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <UserContent store={store}/>
    </Provider>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();


registerServiceWorker();
