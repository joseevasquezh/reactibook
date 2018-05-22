import React from 'react';
import { LoginErrors } from '../Actions';

const LoginForm = ({error, errorMessage,  onClickLogin}) => {

  return (
    <div className="card">
      <div className="card-body">
        <form
          className="form-signin"
          onSubmit={e => {
            e.preventDefault();
            onClickLogin(this.mail.value.trim(),this.password.value.trim());
            this.password.value = '';
          }}>
          <h1 className="h3 mb-3 font-weight-normal">Reactibook</h1>
          <div className={(error === LoginErrors.GLOBAL_ERROR? "alert alert-danger" : "alert alert-danger d-none")} role="alert">
            { errorMessage }
          </div>
          <div className="form-group">
            <input
              type="email"
              className={(error === LoginErrors.MAIL_FIELD_ERROR? "form-control is-invalid" : "form-control")}
              placeholder="Correo electrónico"
              ref={node => {this.mail = node}}
            />
            <div className={(error === LoginErrors.MAIL_FIELD_ERROR? "invalid-feedback is-invalid" : "invalid-feedback")}>
              { errorMessage }
            </div>
          </div>
          <div className="form-group">
            <input
              type="password"
              className={(error === LoginErrors.PASSWORD_FIELD_ERROR? "form-control is-invalid" : "form-control")}
              placeholder="Password"
              ref={node => {this.password = node}}
            />
            <div className={(error === LoginErrors.PASSWORD_FIELD_ERROR? "invalid-feedback is-invalid" : "invalid-feedback")}>
              { errorMessage }
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-lg btn-primary btn-block" type="submit">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  );

};

export default LoginForm;
