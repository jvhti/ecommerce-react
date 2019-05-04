import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.js';
import NavbarMobile from './NavbarMobile.js';

class NavbarComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false
    };
  }

  toggleMobileMenu = () => {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar toggleMobileMenu={this.toggleMobileMenu}>
          {this.props.children}
        </Navbar>
        <NavbarMobile isOpen={this.state.isMobileMenuOpen}>
          {this.props.children}
        </NavbarMobile>
      </React.Fragment>
    );
  }
}

export default NavbarComponent;
