import React from 'react';

class ForgotPasswordModal extends React.Component{

  constructor(props){
    super(props);

    this.inputEmail = React.createRef();

    this.state = {
      email: "",
      emailValid: null
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
    }
    
    this.setState(state);
  }
  
  getValidityState(field){
    const isValid = (field === "email") ? this.state.emailValid : this.state.passwordValid;
    
    return (isValid == null ) ? null : (isValid ? "valid" : "invalid")
  }
  
  render() {
    return (
        <div className="modal">
          <h5 className="modal__title">Forgot your password?</h5>
          <button className="modal__close_btn" type="button" onClick={this.props.onClickCloseEvent}>x</button>
          <form action="#" method="post" onSubmit={this.submitLogin.bind(this)} className="modal__form">
            <div className="modal__form__field">
              <label className={this.getValidityState('email')}>E-mail: </label>
              <input name="email" ref={this.inputEmail} value={this.state.email} placeholder="example@example.com" type="email" required onChange={this.updateField.bind(this)}/>
            </div>
            <div className="modal__form__actions">
              <button className="btn btn--primary" type="submit">Recover</button>
              <button className="btn btn--default btn--border" type="button" onClick={this.props.onClickCloseEvent}>Close</button>
            </div>
          </form>
        </div>
    );
  }
}

export default ForgotPasswordModal;
