import { connect } from 'react-redux';
import {
  displayLoginError,
  LoginErrors,
  requestAuthentication,
} from '../Actions';
import LoginForm from '../components/LoginForm'


const mapStateToProps = (state) => {
  return {
    error: state.user.errorType,
    errorMessage: state.user.errorMessage,
    loginButtonDisabled: state.user.isAuthenticating,
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
      }else {
        dispatch(requestAuthentication(mail, password));
      }
    }
  }
};


const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default Login;
