import React from 'react';
import './LoginModal.css';

class LoginModal extends React.Component{

  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <div className="login_modal">
          <h5 className="login_modal__title">Login</h5>
          <div className="login_modal__form">
            <div className="login_modal__form__field">
              <input placeholder="example@example.com" type="email"/>
              <label tabindex="-1">E-mail: </label>
            </div>
            <div className="login_modal__form__field">
              <a tabindex="0" href="#">Forgot your password?</a>
              <input placeholder="Your Password" type="password" required/>
              <label tabindex="-1">Password: </label>
            </div>
            <div className="login_modal__form__actions">
              <button className="btn btn--default btn--border">Register</button>
              <button className="btn btn--primary">Login</button>
            </div>
          </div>
        </div>
    );
  }
}

export default LoginModal;
