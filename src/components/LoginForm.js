import React from 'react';

const LoginForm = ({onClickLogin}) => {

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
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              ref={node => {this.mail = node}}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              ref={node => {this.password = node}}
            />
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
