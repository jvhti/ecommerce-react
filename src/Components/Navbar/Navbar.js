import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from './Search.js';
import PropTypes from "prop-types";

function Navbar(props) {
  return (
      <nav className="navbar">
        <div className="navbar__logo_container">
            <h1 className="navbar__title sr-only">E-commerce</h1>
            <a href="#">
              <img className="navbar__logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png" alt="E-commerce"/>
            </a>
        </div>
        <Search/>
        <ul className="navbar__links">
          {props.children}
        </ul>
        <button className="navbar__mobile_menu_toggle" onClick={props.toggleMobileMenu} type="button"><FontAwesomeIcon icon="bars"/><span className="sr-only">Open Menu</span></button>
      </nav>
  );
}

Navbar.propTypes = {
  toggleMobileMenu: PropTypes.func
};

export default Navbar;
