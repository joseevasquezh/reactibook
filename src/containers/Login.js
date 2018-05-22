import { connect } from 'react-redux';
import {
  addLoggedUser,
  displayLoginError,
  LoginErrors,
} from '../Actions';
import LoginForm from '../components/LoginForm'

const checkLoginCredentials = (mail, password) => {
  if (mail === 'alice@laboratoria.la' && password === 'lab'){
      return true;
  }
  return false;
};

const mapStateToProps = (state) => {
  return {
    error: state.errorStatus.error,
    errorMessage: state.errorStatus.errorMessage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickLogin: (mail, password) => {
      if (!mail) {
        dispatch(displayLoginError(
          LoginErrors.MAIL_FIELD_ERROR,
          'Debe ingresar un correo electrónico'
        ))
      }else if (!password) {
        dispatch(displayLoginError(
          LoginErrors.PASSWORD_FIELD_ERROR,
          'Debe ingresar una contraseña'
        ))
      }else if (checkLoginCredentials(mail, password)) {
        dispatch(addLoggedUser(mail));
      } else {
        dispatch(displayLoginError(
          LoginErrors.GLOBAL_ERROR,
          'Correo electrónico y contraseña son invalidos'
        ))
      }
    }
  }
};


const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default Login;
