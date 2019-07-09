import React from 'react';
import './LoginModal.css';

class LoginModal extends React.Component{

  constructor(props){
    super(props);
  }

  handleValidityChange(ev){
    const validity = ev.target.validity;
    const label = ev.target.parentNode.querySelector('label');
    console.log(ev.target.validity);

    if(validity.valid){
      label.classList.add("valid");
      label.classList.remove("invalid");
    }else{
      label.classList.add("invalid");
      label.classList.remove("valid");
    }
  }

  render() {
    return (
        <div className="login_modal">
          <button className="login_modal__close">x</button>
          <h5 className="login_modal__title">Login</h5>
          <form action="#">
            <div className="login_modal__form">
              <div className="login_modal__form__field">
                <label htmlFor="email">E-mail: </label>
                <input id="email" placeholder="example@example.com" type="email" required onChange={this.handleValidityChange}/>
              </div>
              <div className="login_modal__form__field">
                <label htmlFor="password">Password: </label>
                <input id="password" placeholder="Your Password" type="password" required onChange={this.handleValidityChange}/>
                <a href="#">Forgot your password?</a>
              </div>
              <div className="login_modal__form__actions">
                <button className="btn btn--default btn--border">Register</button>
                <button className="btn btn--primary">Login</button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default LoginModal;
