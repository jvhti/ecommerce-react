import React from 'react';
import './ProductSection.css';
import ProductBox from './ProductBox.js';

function ProductSection(props) {
  return (
    <section className="product_section">
      <h4 className="product_section__title">New Products</h4>
      <div className="product_section__container">
        <ProductBox
          image="https://http2.mlstatic.com/cafeteira-eletrica-cadence-single-caf211-2xicaras-110-oferta-D_NQ_NP_848792-MLB27611027139_062018-F.jpg"
          title="Cafeteira Expresso Arno Nescafé Dolce Gusto Lumio 15 BAR - Preta"
          moneyUnit="US$"
          totalValue="359.90"
          installment={{"times": "8", "value": "44.98"}}
        />
        <ProductBox
          image="https://http2.mlstatic.com/cafeteira-eletrica-cadence-single-caf211-2xicaras-110-oferta-D_NQ_NP_848792-MLB27611027139_062018-F.jpg"
          title="Cafeteira Expresso Arno Nescafé Dolce Gusto Lumio 15 BAR - Preta"
          moneyUnit="US$"
          totalValue="359.90"
          installment={{"times": "8", "value": "44.98"}}
        />
        <ProductBox
          image="https://http2.mlstatic.com/cafeteira-eletrica-cadence-single-caf211-2xicaras-110-oferta-D_NQ_NP_848792-MLB27611027139_062018-F.jpg"
          title="Cafeteira Expresso Arno Nescafé Dolce Gusto Lumio 15 BAR - Preta"
          moneyUnit="US$"
          totalValue="359.90"
          installment={{"times": "8", "value": "44.98"}}
        />
        <ProductBox
          image="https://http2.mlstatic.com/cafeteira-eletrica-cadence-single-caf211-2xicaras-110-oferta-D_NQ_NP_848792-MLB27611027139_062018-F.jpg"
          title="Cafeteira Expresso Arno Nescafé Dolce Gusto Lumio 15 BAR - Preta"
          moneyUnit="US$"
          totalValue="359.90"
          installment={{"times": "8", "value": "44.98"}}
        />
      </div>
    </section>
  );
}

export default ProductSection;
