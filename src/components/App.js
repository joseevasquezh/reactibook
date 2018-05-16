import React from 'react';
import Wall from './Wall';
import Login from '../containers/Login';


const App = ({isLogged}) => {
  if(isLogged) {
    return (
      <Wall />
    )
  } else {
    return (
      <Login />
    )
  }
}

export default App;
