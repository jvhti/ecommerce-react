import React from 'react';

/*
 * Props:
 *   - title: text -- title of the modal
 *   - text: text -- text of the modal (only if not using childs)
 *   - buttons: ok|yes_no|none -- default="ok"
 *   - onClickCloseEvent: function -- if clicks on the close button (or on No Button)
 *   
 *   # Yes_No
 *   - buttonYesColor: primary|default -- Color class of Button (btn--{color}) -- default="primary"
 *   - buttonNoColor: primary|default -- Color class of Button (btn--{color}) -- default="default"
 *   - buttonYesClasses: text -- injects classes in the Button -- default=""
 *   - buttonNoClasses: text -- injects classes in the Button -- default=""
 *   - buttonYesText: text -- Text of the Yes Button -- default="Yes"
 *   - buttonNoText: text -- Text of the No Button -- default="No"
 *   - buttonYesEvent: function -- OnClick event hook for Yes Button
 *   - buttonNoEvent: function -- OnClick event hook for No Button
 *   - buttonNoCloses: bool -- if clicks no, calls close event -- default="true"
 *   
 *   # Ok
 *   - buttonColor: primary|default -- Color class of Button (btn--{color}) -- default="primary"
 *   - buttonClasses: text -- injects classes in the Button -- default=""
 *   - buttonText: text -- Text of the button -- default="Ok"
 *   - buttonEvent: function -- OnClick event hook for the Button
 *   - buttonAlign: left|right|center -- Alignment of the Button
 */

class MessageModal extends React.Component{

  constructor(props){
    super(props);

    // this.inputEmail = React.createRef();
  }

  componentDidMount(){
    // this.inputEmail.current.focus();
  }
  
  render() {
    let buttons = new Array();
    let modalActionsClasses = "";

    switch(this.props.buttons){
      default:
      case "ok":
        buttons.push (
          <button className={"btn btn--" + (this.props.buttonColor || "default") + " " + (this.props.buttonClasses || "")} type="button" onClick={this.props.buttonEvent || this.props.onClickCloseEvent}>{(this.props.buttonText || "Ok" )}</button>
        );

        modalActionsClasses = this.props.buttonAlign || "right";
        if(modalActionsClasses !== "") modalActionsClasses = "modal__actions--" + modalActionsClasses;
      break;
      case "yes_no":
        buttons.push (
          <button className={"btn btn--" + (this.props.buttonYesColor || "primary") + " " + (this.props.buttonYesClasses || "")} type="button" onClick={this.props.buttonYesEvent}>{(this.props.buttonYesText || "Yes" )}</button>
        );

        buttons.push (
          <button className={"btn btn--" + (this.props.buttonNoColor || "default") + " " + (this.props.buttonNoClasses || "")} type="button" onClick={(this.props.buttonNoCloses !== false) ? this.props.buttonNoEvent : this.props.onClickCloseEvent}>{(this.props.buttonYesText || "No" )}</button>
        );
      break;
      case "none":
      break;
    }

    return (
        <div className={this.props.size ? "modal modal--" + this.props.size : "modal"}>
          <h5 className="modal__title">{this.props.title}</h5>
          <button className="modal__close_btn" type="button" onClick={this.props.onClickCloseEvent}>x</button>
          <div class="text--center">
            <p>{this.props.text}</p>
          </div>
          <div className={"modal__actions " + (modalActionsClasses || "")}>
            { buttons }
          </div>
        </div>
    );
  }
}

export default MessageModal;
