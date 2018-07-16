import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './css/index.css';
import wallApp from './Reducers';
import UserContent from './containers/UserContent';
import registerServiceWorker from './registerServiceWorker';



const loggerMiddleware = createLogger();
const store = createStore(
  wallApp,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
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
