import React from 'react';
import './NavbarMobile.css';
import Search from './Search.js';

class NavbarMobile extends React.Component{

  constructor(props){
    super(props);
    this.timeoutObj = null;
    this.state = {
      displayNone: !props.isOpen
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps.isOpen == this.props.isOpen) return;

    if(this.timeoutObj) clearTimeout(this.timeoutObj);

    if (this.props.isOpen) {
        this.setDisplayNone(false);
        return;
    }

    this.timeoutObj = setTimeout(() => {
      this.setDisplayNone(true);
    }, 400);
  }

  setDisplayNone = (val) => {
    this.setState({ displayNone: val });
  }

  render() {
    return (
      <nav className={"navbarMobile" + (this.props.isOpen ? ' navbarMobile--isOpen' : '')} style={this.state.displayNone ? {display:"none"} : {}}>
        <ul className="navbarMobile__links">
          {this.props.children}
        </ul>
        <Search/>
      </nav>
    );
  }
}

export default NavbarMobile;
