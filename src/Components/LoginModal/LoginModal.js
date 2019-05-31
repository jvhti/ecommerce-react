import React from 'react';
import './LoginModal.css';

class LoginModal extends React.Component{

  constructor(props){
    super(props);

    this.inputEmail = React.createRef();

    this.state = {
      email: "",
      password: "",
      emailValid: null,
      passwordValid: null
    };
  }

  componentDidMount(){
    this.inputEmail.current.focus();
  }

  submitLogin(ev){
    ev.preventDefault();

    console.log(this.state.email, this.state.password);
  }

  updateField(ev){
    const val = ev.target.value;
    const validity = (val === "") ? null : ev.target.validity.valid;
    const state = {};

    switch(ev.target.name){
      case "email":
        state.email = val;
        state.emailValid = validity;
        break;

      case "password":
        state.password = val;
        state.passwordValid = validity;
        break;
    }
    
    this.setState(state);
  }
  
  getValidityState(field){
    const isValid = (field === "email") ? this.state.emailValid : this.state.passwordValid;
    
    return (isValid == null ) ? null : (isValid ? "valid" : "invalid")
  }
  
  render() {
    return (
        <div className="login_modal">
          <h5 className="login_modal__title">Login</h5>
          <form action="#" method="post" onSubmit={this.submitLogin.bind(this)} className="login_modal__form">
            <div className="login_modal__form__field">
              <label className={this.getValidityState('email')}>E-mail: </label>
              <input name="email" ref={this.inputEmail} value={this.state.email} placeholder="example@example.com" type="email" required onChange={this.updateField.bind(this)}/>
            </div>
            <div className="login_modal__form__field">
              <label className={this.getValidityState('password')}>Password: </label>
              <input name="password" value={this.state.password} minLength="4" placeholder="Your Password" type="password" required onChange={this.updateField.bind(this)}/>
              <a href="#">Forgot your password?</a>
            </div>
            <div className="login_modal__form__actions">
              <button className="btn btn--primary" type="submit">Login</button>
              <a className="btn btn--default btn--border">Register</a>
            </div>
          </form>
        </div>
    );
  }
}

export default LoginModal;
