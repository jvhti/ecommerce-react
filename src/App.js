import React from 'react';
import NavbarComponent from './Components/Navbar/NavbarComponent.js';
import Banner from './Components/Banner/Banner.js';
import ProductSection from './Components/Product/ProductSection.js';
import LoginModal from './Components/Modals/LoginModal/LoginModal.js';
import ForgotPasswordModal from './Components/Modals/ForgotPasswordModal/ForgotPasswordModal.js';
import MessageModal from './Components/Modals/MessageModal/MessageModal.js';
import CategoriesSection from './Components/CategoriesSection/CategoriesSection.js';

function App() {
  return (
    <div className="App">
      <header>
        <NavbarComponent>
          <li><a href="#">Home</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>
        </NavbarComponent>
      </header>
      <Banner hrefCTA="#body" backgroundImage="url('https://unsplash.com/photos/vaWZyE1Z6xg/download?force=true')">
        Buy what you want<small>When you want</small>
      </Banner>
      <CategoriesSection id="categories"/>
      <LoginModal/>
    </div>
  );
}

export default App;
