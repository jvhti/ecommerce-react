import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__col">
        <div className="footer__section">
          <h6 className="footer__section__title">Social Medias</h6>
          <ul className="footer__section__links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instragram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__col">
        <div className="footer__section">
          <h6 className="footer__section__title">Links</h6>
          <ul className="footer__section__links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__col">
        <div className="footer__section">
          <a className="footer__logo" href="#">
            <img className="" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png" alt="E-commerce"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
