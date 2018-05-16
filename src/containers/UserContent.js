import { connect } from 'react-redux';
import App from '../App';


const mapStateToProps = (state) => {
  return {
    isLogged: !(state.loggedUser === "")
  }
};

const UserContent = connect(
  mapStateToProps
)(App);

export default UserContent;