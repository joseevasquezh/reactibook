import { connect } from 'react-redux';
import App from '../components/App';


const mapStateToProps = (state) => {
  return {
    isLogged: !(state.user.mail === "")
  }
};

const UserContent = connect(
  mapStateToProps
)(App);

export default UserContent;