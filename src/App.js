import React, { Component } from 'react';
import { createStore } from 'redux';
import wallApp from './Reducers';
import './App.css';


const store = createStore(wallApp);


class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
