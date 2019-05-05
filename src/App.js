import React from 'react';
import NavbarComponent from './Components/Navbar/NavbarComponent.js';
import Banner from './Components/Banner/Banner.js';
import ProductBox from './Components/Product/ProductBox.js';

function App() {
  return (
    <div className="App">
      <header>
        <NavbarComponent>
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>
        </NavbarComponent>
      </header>
      <Banner hrefCTA="#body" backgroundImage="url('https://unsplash.com/photos/vaWZyE1Z6xg/download?force=true')">
        Buy what you want<small>When you want</small>
      </Banner>
      <ProductBox
        image="https://http2.mlstatic.com/cafeteira-eletrica-cadence-single-caf211-2xicaras-110-oferta-D_NQ_NP_848792-MLB27611027139_062018-F.jpg"
        title="Cafeteira Expresso Arno Nescafé Dolce Gusto Lumio 15 BAR - Preta"
        moneyUnit="US$"
        totalValue="359.90"
        installment={{"times": "8", "value": "44.98"}}
      />
    </div>
  );
}

export default App;
