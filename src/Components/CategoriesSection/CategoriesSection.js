import React from 'react';
import './CategoriesSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CategoriesSection(props) {
  // Create list dynamically using a property
  return (
      <section id={props.id} className="categories">
        <h3 class="categories__title">Categories</h3>
        <div className="categories__wrapper">
          <div className="categories__side">
            <div className="categories__wrapper">
              <div className="categories__side">
                <ul className="categories__list">
                  <li><a href="#">Eletronics</a></li>
                  <li><a href="#">Computers</a></li>
                  <li><a href="#">Books</a></li>
                  <li><a href="#">Software</a></li>
                  <li><a href="#">Home & Kitchen</a></li>
                  <li><a href="#">Video Games</a></li>
                  <li><a href="#">Toys & Games</a></li>
                  <li><a href="#">Motherboards</a></li>
                  <li><a href="#">CPUs</a></li>
                </ul>
              </div>
              <div className="categories__side">
                <ul className="categories__list">
                  <li><a href="#">Eletronics</a></li>
                  <li><a href="#">Computers</a></li>
                  <li><a href="#">Books</a></li>
                  <li><a href="#">Software</a></li>
                  <li><a href="#">Home & Kitchen</a></li>
                  <li><a href="#">Video Games</a></li>
                  <li><a href="#">Toys & Games</a></li>
                  <li><a href="#">Motherboards</a></li>
                  <li><a href="#">CPUs</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="categories__side categories__side--aside"/>
        </div>
      </section>
  );
}

export default CategoriesSection;
