import React, { Component } from 'react';
import Wall from './containers/Wall';
import Login from './containers/Login';


class App extends Component {
  render() {
    if(this.props.store.getState().loggedUser) {
      return (
        <Wall store={this.props.store}/>
      )
    } else {
      return (
        <Login store={this.props.store}/>
      )
    }
  }
}

export default App;
