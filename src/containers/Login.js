import { connect } from 'react-redux';
import { addLoggedUser} from '../Actions';
import LoginForm from '../components/LoginForm'

const checkLoginCredentials = (mail, password) => {
  if (mail === 'alice@laboratoria.la' && password === 'lab'){
      return true;
  }
  return false;
};

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickLogin: (mail, password) => {
      if (checkLoginCredentials(mail, password)) {
        dispatch(addLoggedUser(mail));
      } else {
        //wrong credential error
      }
    }
  }
};


const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default Login;
