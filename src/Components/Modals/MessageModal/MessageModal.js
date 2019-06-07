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

const MessageModal = props => {
  let buttons = new Array();
  let modalActionsClasses = "";

  switch(props.buttons){
    default:
    case "ok":
      buttons.push (
        <button ref={props.refButtonOk} key="ok" className={"btn btn--" + (props.buttonColor || "default") + " " + (props.buttonClasses || "")} type="button" onClick={props.buttonEvent || props.onClickCloseEvent}>{(props.buttonText || "Ok" )}</button>
      );

      modalActionsClasses = props.buttonAlign || "right";
      if(modalActionsClasses !== "") modalActionsClasses = "modal__actions--" + modalActionsClasses;
    break;
    case "yes_no":
      buttons.push (
        <button ref={props.refButtonYes} key="yes" className={"btn btn--" + (props.buttonYesColor || "primary") + " " + (props.buttonYesClasses || "")} type="button" onClick={props.buttonYesEvent}>{(props.buttonYesText || "Yes" )}</button>
      );

      buttons.push (
        <button ref={props.refButtonNo} key="no" className={"btn btn--" + (props.buttonNoColor || "default") + " " + (props.buttonNoClasses || "")} type="button" onClick={(props.buttonNoCloses !== false) ? props.buttonNoEvent : props.onClickCloseEvent}>{(props.buttonYesText || "No" )}</button>
      );
    break;
    case "none":
    break;
  }

  return (
      <div className={props.size ? "modal modal--" + props.size : "modal"}>
        <h5 className="modal__title">{props.title}</h5>
        <button className="modal__close_btn" type="button" onClick={props.onClickCloseEvent}>x</button>
        <div className="text--center">
          <p>{props.text}</p>
        </div>
        <div className={"modal__actions " + (modalActionsClasses || "")}>
          { buttons }
        </div>
      </div>
  );
};

export default MessageModal;
