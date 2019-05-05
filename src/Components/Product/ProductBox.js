import React from 'react';
import './ProductBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductBox(props) {
  return (
    <div className="product_box">
      <a href="#" className="product_box__image_link"><img className="product_box__image" src={props.image}/></a>
      <a href="#" className="product_box__title_link"><h6 className="product_box__title">{props.title}</h6></a>
      <div className="product_box__price_box">
        <p><span className="product_box__money_unit">{props.moneyUnit}</span> <span>{props.totalValue}</span></p>
        <p><span>{props.installment.times}x</span> of <span className="product_box__money_unit">{props.moneyUnit}</span> <span>{props.installment.value}</span></p>
      </div>
      <a href="#" className="btn product_box__add_to_cart_btn"><FontAwesomeIcon className="product_box__add_to_cart_btn__cart_icon" icon="cart-plus"/> Add to Cart</a>
      <a href="#" className="btn product_box__details_btn">Details</a>
    </div>
  );
}

export default ProductBox;
