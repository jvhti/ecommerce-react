import React from 'react';
import './LoginModal.css';

class LoginModal extends React.Component{

  constructor(props){
    super(props);

    this.labelEmail = React.createRef();
    this.inputEmail = React.createRef();
    this.labelPassword = React.createRef();
  }

  componentDidMount(){
    this.inputEmail.current.focus();
  }

  updateFieldValidation(ev){
    const tgLabel = (ev.target.type === "email") ? this.labelEmail.current : this.labelPassword.current;

    if(ev.target.value === ""){
      tgLabel.classList.remove("valid");
      tgLabel.classList.remove("invalid");
      return;
    }

    if(ev.target.validity.valid){
      tgLabel.classList.add("valid");
      tgLabel.classList.remove("invalid");
    }else{
      tgLabel.classList.add("invalid");
      tgLabel.classList.remove("valid");
    }
  }
  
  render() {
    return (
        <div className="login_modal">
          <h5 className="login_modal__title">Login</h5>
          <div className="login_modal__form">
            <div className="login_modal__form__field">
              <label ref={this.labelEmail}>E-mail: </label>
              <input ref={this.inputEmail} placeholder="example@example.com" type="email" required onChange={this.updateFieldValidation.bind(this)}/>
            </div>
            <div className="login_modal__form__field">
              <label ref={this.labelPassword}>Password: </label>
              <input placeholder="Your Password" type="password" required onChange={this.updateFieldValidation.bind(this)}/>
              <a href="#">Forgot your password?</a>
            </div>
            <div className="login_modal__form__actions">
              <button className="btn btn--primary">Login</button>
              <button className="btn btn--default btn--border">Register</button>
            </div>
          </div>
        </div>
    );
  }
}

export default LoginModal;
